import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class LandingPage extends Component {
    // state = {
    //     code: ''
    // }

    componentDidMount = async () => {
        let code = new URLSearchParams(window.location.search);
        // this.setState({ code: code.get('code') })
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