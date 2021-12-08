import React, { Component } from "react";

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
            nhlTeams: data
        })
    })
    .catch(err => console.log(err))
}
  render() {
    return (
      <div className="container">
   
      </div>
    );
  }
}


/* <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  {this.props.nhlTeams.map((teams, i) => (
    <TeamStats teams={teams} key={i} />
  ))}
</tbody>
</table> */