/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { VideoScroll } from 'react-video-scroll';
import ElectionCard from './ElectionCard';
import video from '../images/ballotbox_h264.mp4';

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${`${Math.floor(videoEl.duration)
    * playbackRate
  }px`})`;
  wrapperEl.style.marginBottom = `calc(180% - ${`${Math.floor(videoEl.duration)
    * playbackRate
  }px`})`;
};
const results = {
  elections: [
    {
      candidates: [
        {
          profile: {
            needs_score: 50,
            values_score: 8,
            average_score: 98,
          },
          name: 'Sathvi',
        },
        {
          profile: {
            needs_score: 98,
            values_score: 20,
            average_score: 2,
          },
          name: 'Catherine',
        },
      ],
      office: 'US Senate',
    },

    {
      candidates: [
        {
          profile: {
            needs_score: 50,
            values_score: 80,
            average_score: 98,
          },
          name: 'John Cornyn',
        },
        {
          profile: {
            needs_score: 98,
            values_score: 20,
            average_score: 2,
          },
          name: 'MJ Hegar',
        },
      ],
      office: 'Railroad Convention',
    },
  ],
};

class FinalResults extends Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
  }

    finalResults = () => {
      return results.elections.map((election) => {
        console.log(election);
        return (
          <ElectionCard election={election} />
        );
      });
    }

    printIt = () => {
      window.print();
    }

    scrollDown = () => {
      if (this.description.current) {
        this.description.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }

    render() {
      return (
        <div className="page-wrapper" id="page-8">
          <h1 className="title" id="page-8-title">Your recommendations are ready!</h1>
          <VideoScroll
            onLoad={(props) => setStyles(props.wrapperEl, props.videoEl, props.playbackRate)}
            playbackRate={1500}
          >
            <video
              tabIndex="0"
              autobuffer="autobuffer"
              preload="preload"
              style={{ width: '100%' }}
              id="video"
            >
              <source src={video} type="video/mp4" />
            </video>
          </VideoScroll>

          <div className="main-page-holder" id="double-height">
            <div className="page-starter">
              <div className="red-arrow" onClick={this.scrollDown} />
            </div>
          </div>
          <div className="page-recommendations">
            <div className="main-page-holder">
              <h1 id="page-9-title">Here are your recommendations!</h1>
              <p className="subtitle" id="final-description">We generated the following recommendations based on matches with your personality profile.
                Click any of the recommendations to see more!
              </p>

              <div className="final-cards-holder" ref={this.description}>
                {this.finalResults()}
              </div>
              <div className="button-holder">
                <button type="button" id="print" className="button-white" onClick={this.printIt}>Print results</button>
                {/* <button type="button" className="button-red">Email my results</button> */}
                <NavLink to="/">
                  <button className="button-red" id="print" type="button">Start over</button>
                </NavLink>
              </div>

            </div>
          </div>
        </div>
      );
    }
}

function mapStateToProps(reduxState) {
  return {
    results: reduxState.results,
  };
}

export default connect(mapStateToProps, null)(FinalResults);
