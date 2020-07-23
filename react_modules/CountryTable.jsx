
import React, {Component} from 'react';
import {DataTable} from "react-native-paper";
const covidApi = require("../api_modules/covidapi");
import styles from "./styles";


export default class CountryTable extends Component
{
    render()
    {
        return(
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Country</DataTable.Title>
                    <DataTable.Title>Total Cases</DataTable.Title>
                    <DataTable.Title>New Cases</DataTable.Title>
                    <DataTable.Title>Total Deaths</DataTable.Title>
                    <DataTable.Title>New Deaths</DataTable.Title>
                    <DataTable.Title>Total Recovered</DataTable.Title>
                    <DataTable.Title>Active Cases</DataTable.Title>
                    <DataTable.Title>Total Deaths</DataTable.Title>
                    <DataTable.Title>Critical Cases</DataTable.Title>
                </DataTable.Header>
            </DataTable>
        );
    }
}