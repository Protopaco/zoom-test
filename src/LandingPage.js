import React, { Component } from 'react'


export default class LandingPage extends Component {
    // state = {
    //     code: ''
    // }

    componentDidMount = async () => {
        let code = new URLSearchParams(window.location.search);
        // this.setState({ code: code.get('code') })
        // `https://zoom.us/oauth/token?grant_type=authorization_code&code=${code.get('code)}&redirect_uri=https://determined-davinci-266c06.netlify.app/`

        this.props.handleSetState({ code: code.get('code') });
        this.props.history.push('/auth/');

    }
    render() {
        return (
            <div>
                {/* <Link to='/auth/'>Auth</Link>
                <br />LandingPage
                <br />
                {this.state.code} */}
                redirecting...
            </div>
        )
    }
}
