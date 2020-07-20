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
            recovered : "0"
        };
    }

    componentDidMount()
    {
        (
            async ()=> {
                await covidApi.getTotalRecovered()
                .then((data)=> {
                    this.setState({recovered : data});
                });
            }
        )();
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style= {styles.titleStyle}>
                    Recovered{"\n"}
                </Text>
                <Text style={styles.numberStyle}>
                    {this.state.recovered}
                </Text>
            </View>
        );
    }
}