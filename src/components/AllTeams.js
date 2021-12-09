import React, { Component } from "react";

export default class AllTeams extends Component {
  render() {
      const a = this.props.team
    return (
        <>
        <table>
            <thead>
                
            </thead>
        </table>
      <div>
        <table class="table">
          
          
          <tbody>
          <tr>
              
                <td>{a.name}</td>
                <td>{}</td>
                
            </tr>
          </tbody>
        </table>
      </div>
        </>
    );
  }
}
