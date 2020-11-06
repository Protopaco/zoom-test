import React, { Component } from 'react'
import fetch from 'superagent';

export default class ListMeetings extends Component {

    componentDidMount = async () => {
        const URL = `https://api.zoom.us/v2/users/{this.props.baseState.code}/recordings`;
        try {
            const returnObject = await fetch.get(URL);
            console.log(returnObject);

        }
        catch (e) {
            throw e;
        }

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
