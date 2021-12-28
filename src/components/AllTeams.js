import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';

export default class AllTeams extends Component {
  constructor(props) {
    super(props);
    console.log("component constructing team");
    
    this.state = {
      team: props.team,
      teamStats: null
    }
  };41

  componentDidMount() {
    const { team } = this.state;

    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/stats`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          teamStats: data.stats[0],
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { team } = this.state;
    const stat = this.state.teamStats?.splits[0]?.stat;
    console.log(stat + "undef means broken")
    return (
<>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{team.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{team.division.name}</Card.Subtitle>
    { stat && <Card.Text> 
      Pts: 
    { " " + stat.pts } <br />
    Wins:   
    { " " + stat.wins } <br />
    Losses: 
    { " " + stat.losses } <br />
      { console.log(stat)
        // Put stats/standings informaiton here
      }
   <Button className="outline-secondary" href={`/selectedteam/${team.id}`}>{team.abbreviation + " Stats"}</Button>      
    
    </Card.Text> } 
  </Card.Body>
</Card>
</>
    )
    
  }
}
/* <div className="row">

// <div className="accordion" id="accordionExample">
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingOne">
//       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//       {a.name}
//       </button>
//     </h2>
            
//       </div>
//       </div>
//       </div> */