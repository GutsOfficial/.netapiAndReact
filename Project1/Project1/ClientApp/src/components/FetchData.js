import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.title;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.id}>
                        <td>{forecast.title}</td>
                        <td>{forecast.description}</td>
                        <td>{forecast.price}</td>
                        <td>{forecast.discountPercentage}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      const dataArray = await Object.values(data)
      console.log(data, 313213)
      console.log(dataArray, 9999999)

      this.setState({ forecasts: dataArray[0], loading: false });
  }
}
