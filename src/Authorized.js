import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Authorized extends Component {
    render() {
        return (
            <div>
                'You're Authorized!'
                <br />
                <Link to="/">Landing</Link>
            </div>
        )
    }
}
