import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/News';

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#fff'
        progress={this.state.progress}
      />
        <Navbar/>
          <Switch>
              <Route exact path="/">
                <News setProgress={this.setProgress} key="general" pageSize="6" country="in" category="general"/>
              </Route>
              <Route exact path="/business">
                <News setProgress={this.setProgress} key="business" pageSize="6" country="in" category="business"/>
              </Route>
              <Route exact path="/entertainment">
                <News setProgress={this.setProgress} key="entertainment" pageSize="6" country="in" category="entertainment"/>
              </Route>
              <Route exact path="/health">
                <News setProgress={this.setProgress} key="health" pageSize="6" country="in" category="health"/>
              </Route>
              <Route exact path="/science">
                <News setProgress={this.setProgress} key="science" pageSize="6" country="in" category="science"/>
              </Route>
              <Route exact path="/sports">
                <News setProgress={this.setProgress} key="sports" pageSize="6" country="in" category="sports"/>
              </Route>
              <Route exact path="/technology">
                <News setProgress={this.setProgress} key="technology" pageSize="6" country="in" category="technology"/>
              </Route>
          </Switch>
          
        </Router>
        
      </div>
    )
  }
}
