import React, {Component} from 'react';
import {DataTable} from "react-native-paper";
import {Text, Image} from "react-native";
import styles from "./styles";
export default class CountryRow extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <DataTable.Row>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.country}</Text> </DataTable.Cell>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.cases}</Text> </DataTable.Cell>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.todayCases}</Text> </DataTable.Cell>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.deaths}</Text></DataTable.Cell>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.todayDeaths}</Text></DataTable.Cell>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.recovered}</Text> </DataTable.Cell>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.active}</Text> </DataTable.Cell>
                <DataTable.Cell> <Text style={styles.dataRow}>{this.props.critical}</Text></DataTable.Cell>
                <DataTable.Cell>
                    <Image style={styles.tinyLogo} source={this.props.flag}></Image>
                </DataTable.Cell>
            </DataTable.Row>
        )
    }
}