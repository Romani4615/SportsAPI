import React, { Component } from "react";

//construct
export default class Teams extends Component {
  constructor(props) {
    super(props);
    console.log("component constructing teams");
    this.state = {
      nhlTeams: [],
    };
  }
  componentDidMount() {
    console.log("mounting in progress");
    fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          nhlTeams: data,
        });
      });
  }

  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
