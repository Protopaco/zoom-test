import React, { Component } from 'react'
import fetch from 'superagent';

export default class ListMeetings extends Component {

    componentDidMount = async () => {
        // const URL = `https://api.zoom.us/v2/users/{this.props.baseState.code}/recordings`;
        const URL = 'https://morning-dusk-56874.herokuapp.com/meetings';
        try {
            const returnObject = await fetch.post(URL).send(this.props.baseState.code);
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
