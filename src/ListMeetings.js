import React, { Component } from 'react'
import fetch from 'superagent';

export default class ListMeetings extends Component {
    state = {
        loading: true
    }

    componentDidMount = async () => {
        const URL = 'https://morning-dusk-56874.herokuapp.com/user/';
        try {
            const returnedObject = await fetch.post(URL).send({ token: this.props.baseState.code });
            console.log(returnedObject.body);
            this.setState({
                loading: false
            })
        }
        catch (e) {
            throw e;
        }
        // console.log(this.props.baseState.code);

    }

    render() {
        return (
            <div>
                <h1>{this.props.baseState.code}</h1>
                {this.state.loading
                    ? <></>
                    :
                    <div>
                        <p>{
                            `${this.returnedObject.body.first_name} ${this.body.returnedObject.last_name}`
                        }</p>
                        <img src={this.bosy.returnedObject.pic_url} alt="its me!" />
                    </div>
                }
            </div>
        )
    }
}
