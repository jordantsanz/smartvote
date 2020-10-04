/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import { setAddress } from '../actions';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      terms: [],
      googleMapsReady: false,
    };
  }

  componentDidMount() {
    this.loadGoogleMaps(() => {
      // Work to do after the library loads.
      this.setState({ googleMapsReady: true });
    });
  }

  componentWillUnmount() {
    // unload script when needed to avoid multiple google scripts loaded warning
    this.unloadGoogleMaps();
  }

loadGoogleMaps = (callback) => {
  const existingScript = document.getElementById('googlePlacesScript');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC-hLGCLH9_wYA5ZyLKNrG-57VT6rRkb5A&libraries=places';
    script.id = 'googleMaps';
    document.body.appendChild(script);
    // action to do after a script is loaded in our case setState
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};

unloadGoogleMaps = () => {
  const googlePlacesScript = document.getElementById('googlePlacesScript');
  if (googlePlacesScript) {
    googlePlacesScript.remove();
  }
};

  handleChange = (address) => {
    this.setState({ address });
  }

  handleSelect = (address, placeID, suggestion) => {
    this.setState({ address });
    console.log(suggestion);
    this.setState({ terms: suggestion.terms });
  }

    findLocation = () => {
      const obj = {
        address: this.state.address,
        terms: this.state.terms,
      };
      this.props.setAddress(obj);
    }

    render() {
      if (this.state.googleMapsReady) {
        return (
          <div className="page-wrapper" id="page-3">
            <div className="main-page-holder" id="page-3-wrapper">
              <h1 className="title" id="page-3-title">Enter your address.</h1>
              <div className="input-button-wrapper">
                <PlacesAutocomplete
                  value={this.state.address}
                  onChange={this.handleChange}
                  onSelect={this.handleSelect}
                  searchOptions={{
                    types: ['geocode'],
                    componentRestrictions: { country: 'us' },
                  }}
                >
                  {({
                    getInputProps, suggestions, getSuggestionItemProps, loading,
                  }) => (
                    <div className="input-autocomplete-wrapper">
                      <input
                        {...getInputProps({
                          placeholder: 'Search Places ...',
                          className: 'input',
                          id: 'input-address',
                          type: 'text',
                        })}
                      />
                      <NavLink to="/address">
                        <button type="button" className="button" id="button-rounded" onClick={this.findLocation}>Continue</button>
                      </NavLink>
                      <div className="autocomplete-dropdown-container">
                        {loading && <div className="suggestion-item">Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? 'suggestion-item-active'
                            : 'suggestion-item';
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="loading">Loading...</div>
        );
      }
    }
}

function mapStateToProps(reduxState) {
  return {
    location: reduxState.location,
  };
}

export default connect(mapStateToProps, { setAddress })(AddressInput);
