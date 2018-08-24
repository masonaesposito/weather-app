import React from "react";
import { getWeather, updateCity } from "./cityActions";
import { updateWeatherInfo } from "../CityInformation/cityInformationActions";
import { addNewSearchItem } from "../SearchHistory/searchHistoryActions";

var padding = { paddingBottom: "15px" };

export default class City extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCityToggle = this.handleCityToggle.bind(this);
  }
  handleClick(event) {
    const { dispatch, selectedCity } = this.props;
    dispatch(getWeather(selectedCity));
    dispatch(addNewSearchItem(selectedCity));
  }
  handleInputChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }
  handleCityToggle(event) {
    const { dispatch } = this.props;
    dispatch(getWeather(event.target.value));
    dispatch(addNewSearchItem(event.target.value));
  }
  render() {
    const selectedCity = this.props.selectedCity;
    return (
      <div>
        <div className="text-center">
          <button
            onClick={this.handleCityToggle}
            value="San Diego"
            className="btn btn-secondary"
            style={{ color: "Blue", backgroundColor: "lightGreen", marginRight: "20px", marginBottom: "10px" }}
          >
            San Diego
          </button>
          <button
            onClick={this.handleCityToggle}
            value="Sydney"
            className="btn btn-secondary"
            style={{ color: "Blue", backgroundColor: "lightGreen", marginRight: "20px", marginLeft: "20px", marginBottom: "10px" }}
          >
            Sydney
          </button>
          <button
            onClick={this.handleCityToggle}
            value="Beijing"
            className="btn btn-secondary"
            style={{ color: "Blue", backgroundColor: "lightGreen", marginRight: "20px", marginLeft: "20px", marginBottom: "10px" }}

          >
            Beijing
          </button>
          <button
            onClick={this.handleCityToggle}
            value="Johannesburg"
            className="btn btn-secondary"
            style={{ color: "Blue", backgroundColor: "lightGreen", marginRight: "20px", marginLeft: "20px", marginBottom: "10px" }}

          >
            Johannesburg
          </button>
          <button
            onClick={this.handleCityToggle}
            value="Juno"
            className="btn btn-secondary"
            style={{ color: "blue", backgroundColor: "lightGreen", marginRight: "20px", marginLeft: "20px", marginBottom: "10px" }}
          >
            Juno
          </button>
        </div>
        <div style={padding} className="input-group">
          <input
            id="city"
            onChange={this.handleInputChange}
            value={selectedCity}
            type="text"
            className="form-control"
            placeholder="Enter a City"
            style={{ textAlign: "center" }}
          />
          <span className="input-group-btn">
            <button onClick={this.handleClick} className="btn btn-secondary" style={{ backgroundColor: "pink", color: "black" }}>
              Get Weather
            </button>
          </span>
        </div>
      </div>
    );
  }
}