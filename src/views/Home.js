import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Link rel="stylesheet" to="/teams" >
                <img src="src/photos/NHLlogo.png" ></img>
                </Link>
            </div>
        )
    }
}
