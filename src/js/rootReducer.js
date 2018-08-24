import { combineReducers } from "redux";
import CityReducer from "./components/City/cityReducer";
import CityInformationReducer from "./components/CityInformation/cityInformationReducer";
import SearchHistoryReducer from "./components/SearchHistory/searchHistoryReducer";

const rootReducer = combineReducers({
  city: CityReducer,
  cityInformation: CityInformationReducer,
  searchHistory: SearchHistoryReducer
});

export default rootReducer;