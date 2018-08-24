import { types } from "./searchHistoryActions";

const defaultState = {
  searchItems: []
};

export default function SearchHistoryReducer(state = defaultState, action) {
  const { type, payload } = action;
  var timestamp = Date.now();
  var d = new Date(timestamp);
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getFullYear();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var date = month + "/" + day + "/" + year;
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  var time = hr + ":" + min + ":" + sec;

  switch (type) {
    case types.ADD_NEW_SEARCH_ITEM: {
      if (state.searchItems.length > 3) {
        return {
          searchItems: [
            ...state.searchItems.splice(
              state.searchItems.length - 3,
              state.searchItems.length
            ),
            {
              city: payload.city,
              timestamp: timestamp,
              time: time,
              date: date
            }
          ]
        };
      } else {
        return {
          searchItems: [
            ...state.searchItems,
            {
              city: payload.city,
              timestamp: timestamp,
              time: time,
              date: date
            }
          ]
        };
      }
    }
    default: {
      return state;
    }
  }
}