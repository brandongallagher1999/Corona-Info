import { StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

const covidApi = require("../api_modules/covidapi");

export default class Total extends Component
{

    render()
    {
        return (
            <Text style= {styles.titleStyle}>
                COVID-19 Cases{"\n"}
                <Text style = {styles.numberStyle}>
                    {covidApi.getTotalCases()}
                </Text>
          </Text>
        );
    }
}