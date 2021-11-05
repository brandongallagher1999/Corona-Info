import React, { Component } from "react";
import { DataTable } from "react-native-paper";
const covidApi = require("../api_modules/covidapi");
import styles from "./styles";
import covidapi from "../api_modules/covidapi";

import CountryRow from "./CountryRow";

export default class CountryTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.setRows();
  }

  async setRows() {
    let data = await covidApi.getCountryData();
    this.setState({ data: data });
    this.state.data.map((i) => console.log(i));
    //console.log();
  }
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Country</DataTable.Title>
          <DataTable.Title>Total Cases</DataTable.Title>
          <DataTable.Title>New Cases</DataTable.Title>
          <DataTable.Title>Total Deaths</DataTable.Title>
          <DataTable.Title>New Deaths</DataTable.Title>
          <DataTable.Title>Total Recovered</DataTable.Title>
          <DataTable.Title>Active Cases</DataTable.Title>
          <DataTable.Title>Critical Cases</DataTable.Title>
          <DataTable.Title>Flag</DataTable.Title>
        </DataTable.Header>

        {this.state.data.map((i) => {
          return (
            <CountryRow
              key={i.country}
              country={i.country}
              cases={i.cases}
              todayCases={i.todayCases}
              deaths={i.deaths}
              todayDeaths={i.todayDeaths}
              recovered={i.recovered}
              active={i.active}
              critical={i.critical}
              flag={i.countryInfo.flag}
            ></CountryRow>
          );
        })}
      </DataTable>
    );
  }
}
