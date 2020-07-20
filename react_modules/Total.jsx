import { Text, View} from 'react-native';
import React, {Component} from 'react';

const covidApi = require("../api_modules/covidapi");
import styles from "./styles";

export default class Total extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            totalCases : "0"
        };
    }

    componentDidMount()
    {
        (
            async ()=> {
                await covidApi.getTotalCases()
                .then((data)=> {
                    this.setState({totalCases : data});
                });
            }
        )();
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style= {styles.titleStyle}>
                    COVID-19 Cases{"\n"}
                </Text>
                <Text style={styles.numberStyle}>
                    {this.state.totalCases}
                </Text>
            </View>
        );
    }
}