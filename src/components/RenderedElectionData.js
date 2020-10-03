import React, { Component } from 'react';

import ElectionCard from './ElectionCard';

class RenderedElectionData extends Component {
    electionDataRender = () => {
      console.log(this.props.electionData);
      if (this.props.electionData !== []) {
        return (
          this.props.electionData.map(((election) => {
            // not expanded version
            if (election.type === 'General') {
              return (
                <ElectionCard election={election} />
              );
            } else {
              return (
                <div className="blank" />
              );
            }
          }
          ))
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
