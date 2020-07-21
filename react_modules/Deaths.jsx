import { Text, View} from 'react-native';
import React, {Component} from 'react';

const covidApi = require("../api_modules/covidapi");
import styles from "./styles";

export default class Deaths extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            deaths : "0"
        };
    }

    componentDidMount()
    {
        (
            async ()=> {
                await covidApi.getTotalDeaths()
                .then((data)=> {
                    this.setState({deaths : data});
                });
            }
        )();
    }

    render()
    {
        return(
            <View style={styles.container}>
                <Text style= {styles.titleStyle}>
                    Deaths
                </Text>
                <Text style={styles.numberStyle}>
                    {this.state.deaths}
                </Text>
            </View>
        );
    }
    
}