import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import FormPage from "./FormPage";

const libraries = ["places"];
const googleMapsApiKey = "AIzaSyCEzFC-wacNtzmFP-LWP5d0GBQoWYV8Ox4"; // Replace with your API key

function App() {
  const [address, setAddress] = useState("");
  const searchBox = useRef(null);

  const onLoad = (ref) => {
    searchBox.current = ref;
  };

  const onPlacesChanged = () => {
    const places = searchBox.current.getPlaces();
    const place = places[0];
    if (place) {
      setAddress(place.formatted_address);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Enter a location"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </StandaloneSearchBox>
      </LoadScript>
      <div>
        <p>Selected Address: {address}</p>
      </div>
    </div>
  );
}

export default App;
