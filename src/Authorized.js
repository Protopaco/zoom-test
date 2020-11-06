import React, { Component } from 'react'
import Login from './Login.js';
import ListMeetings from './ListMeetings.js';
export default class Authorized extends Component {
    render() {
        return (
            <div>
                { this.props.baseState.code !== ''
                    ?
                    <ListMeetings />
                    :
                    <Login />
                }


                {/* code:   {this.props.baseState.code}
                <br />
                'You're Authorized!'
                <br />
                <Link to="/">Landing</Link> */}
            </div>
        )
    }
}
