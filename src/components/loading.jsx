import React, { Component } from 'react'

import Loader from './loading.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={Loader} alt="loading" />
            </div>
        )
    }
}
