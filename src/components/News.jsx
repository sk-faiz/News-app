import React, { Component } from 'react'
import Card from './card'
import Loading from './loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Typewriter from 'typewriter-effect';


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
  }

  static proptype = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1, 
            loading: false,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Good NEWS`
    }
    
    async updateNews(pageNo){
      this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=`Your NEWS API key`&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json()
      this.props.setProgress(60);
      this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
      })
      this.props.setProgress(100);
      }
      

    async componentDidMount() {
      this.updateNews();
    }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c4be082d1c634629a137879e75602006&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let finalData = await data.json();
    this.setState({
      articles: this.state.articles.concat(finalData.articles),
      totalResults: finalData.totalResults,
      loading: false
    })
  };
   
    render() {  
        return (
            <>
              <h2 className="text-center"><Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(`ニュース - Top ${this.capitalizeFirstLetter(this.props.category)} Headlines`).start()}}/></h2>
                <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length !== this.state.totalresults}
                  loader={<Loading/>}
                >
                  <div className="container">
                  <div className="row">
                    {this.state.articles.map((elements) => {
                      return <div className="col-md-4" key={elements.url}>
                             <Card 
                             title={`${elements.title === null?"sorry no title": elements.title}.slice(0,70)`} 
                             description={`${elements.description === null?"sorry no description": elements.description}`.slice(0,100)} 
                             newsImg={elements.urlToImage === null ? "https://via.placeholder.com/350x150" : elements.urlToImage} 
                             newsURL={elements.url}
                             author={elements.author === null ? "Anonymous": elements.author}
                             published={elements.publishedAt}
                             source={elements.source.name}/>
                        </div>    
                    
                    })}
                </div>
                </div>
                  
                </InfiniteScroll>
                </>
            
        )
    }
}
