import React, { Component } from 'react'
import fetch from 'superagent';

export default class ListMeetings extends Component {

    componentDidMount = async () => {
        URL = `https://api.zoom.us/v2/users/{this.props.baseState.code}/recordings`;
        const returnObject = await fetch.get(URL);
        console.log(returnObject);
        console.log('------------------------------------');
        console.log(`hi:`)
        console.log('------------------------------------');
    }

    render() {
        return (
            <div>
                List Meetings
                <br />
                {this.props.baseState.code}
            </div>
        )
    }
}
