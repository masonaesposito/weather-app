import React from "react";
import City from "./components/City";
import CityInformation from "./components/CityInformation";
import SearchHistory from "./components/SearchHistory";

export default class App extends React.Component {
  render() {
    return (
      <div className="container" style={{backgroundColor: "blue"}}>
        <div style={{ backgroundColor: "lightGreen" }} className="jumbotron">
          <h1 style={{ color: "blue" }} className="display-3 text-center">
            Redux Weather App
          </h1>
          <h2 style={{ color: "white" }} className="text-center">
            Flip flops or Rainboots?
          </h2>
        </div>
        <City />
        <div className="row">
          <div className="col-12 col-md-6 mb-4 d-flex align-items-stretch">
            <CityInformation />
          </div>
          <div className="col-12 col-md-6 mb-4 d-flex align-items-stretch">
            {<SearchHistory />}
          </div>
        </div>
      </div>
    );
  }
}