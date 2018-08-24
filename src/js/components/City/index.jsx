import { connect } from "react-redux";
import City from "./City";

function mapStoreToProps(store) {
  return {
    displayedCity: store.city.displayedCity,
    selectedCity: store.city.selectedCity,
    temperature: store.city.temperature,
    pressure: store.city.pressure,
    humidity: store.city.humidity,
    lowTemp: store.city.lowTemp,
    highTemp: store.city.highTemp,
    windSpeed: store.city.windSpeed,
    icon: store.city.icon,
    lat: store.city.lat,
    lon: store.city.lon
  };
}

export default connect(mapStoreToProps)(City);