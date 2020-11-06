import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <p>Please log in to your zoom account</p>
                <a href="https://zoom.us/oauth/authorize?response_type=code&client_id=AxrbH83_Q0aEO273dFIafw&redirect_uri=https%3A%2F%2Fdetermined-davinci-266c06.netlify.app%2F">
                    <img src='/assests/zoom-logo.jpg' width='200px' alt="zoom logo" height='150px' />
                </a>
            </div>
        )
    }
}
