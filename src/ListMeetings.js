import React, { Component } from 'react'
// import fetch from 'superagent';

export default class ListMeetings extends Component {
    state = {
        loading: true
    }

    componentDidMount = async () => {
        // const URL = `https://api.zoom.us/v2/users/{this.props.baseState.code}/recordings`;
        // const URL = 'https://morning-dusk-56874.herokuapp.com/user/';
        //     try {
        //         const returnedObject = await fetch.post(URL).send(this.props.baseState.code);
        //         console.log(returnedObject);
        //         this.setState({
        //             loading: false
        //         })
        //     }
        //     catch (e) {
        //         throw e;
        //     }
        // }
        console.log(this.props.baseState.code);
    }
    render() {
        return (
            <div>
                {/* {this.state.loading
                        ? <></>
                        :
                        <div>
                            <p>{
                                `${this.returnedObject.first_name} ${this.returnedObject.last_name}`
                            }</p>
                            <img src={this.returnedObject.pic_url} alt="its me!" />
                        </div>
                    } */}
            </div>
        )
    }
}
