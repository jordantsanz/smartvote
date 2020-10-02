import React, { Component } from 'react';

class RenderedElectionData extends Component {
    electionDataRender = () => {
      console.log(this.props.electionData);
      if (this.props.electionData !== []) {
        return (
          this.props.electionData.map(((election) => {
            return (
              <div key={election.id} className="election">
                {election.office}
              </div>
            );
          }))
        );
      } else {
        return (
          <div className="nodata"> No data yet.</div>
        );
      }
    }

    render() {
      return (
        <div className="electionData">
          {this.electionDataRender()}
        </div>
      );
    }
}
export default RenderedElectionData;
