import React, { Component } from "react";
import AllTeams from "../components/AllTeams";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    console.log("component constructing teams")
    this.state = {
        nhlTeams: []
    }
}
componentDidMount() {
    console.log("mounting in progress")
    fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        this.setState({
            nhlTeams: data.teams
        })
    })
    .catch(err => console.log(err))
}
  render() {
    return (
      <div className="container">
        <table className="table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          
        </table>
        <tbody>
          <tr>
              <td>
                {this.state.nhlTeams.map(a => <AllTeams team={a} />)};
              </td>
          </tr>
        </tbody>
      </div>
    );
  };
};