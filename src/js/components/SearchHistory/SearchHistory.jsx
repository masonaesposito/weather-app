import React from "react";

var noMargin = { marginBottom: "0px" };
var tableRows = { backgroundColor: "#7B838B" };

export default class SearchHistory extends React.Component {
  render() {
    const items = this.props.searchItems;
    return (
      <div style={{ width: "100%"}} className="card border-secondary mb-3">
        <div className="card-header" style={{backgroundColor: "lightBlue"}}>
          Search History
        </div>
        <div style={{ width: "100%" }} className="card-body">
          <table className="table table-sm table-hover table-striped">
            <thead>
              <tr>
                <th>City</th>
                <th style={{ width: 120 }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {items
                .map(item => {
                  return (
                    <tr key={item.timestamp}>
                      <td>{item.city}</td>
                      <td>
                        <p style={noMargin}>{item.date}</p>
                        <p style={noMargin}>{item.time}</p>
                      </td>
                    </tr>
                  );
                })
                .reverse()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}