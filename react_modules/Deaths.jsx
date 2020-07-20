import { StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

const covidApi = require("../api_modules/covidapi");

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
                    Deaths{"\n"}
                </Text>
                <Text style={styles.numberStyle}>
                    {this.state.deaths}
                </Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    titleStyle : {
      fontSize : "50px",
    },
  
    numberStyle : {
        fontWeight : "bold",
        color : "grey",
        fontSize : "50px",
        margin : "-50px",
        position : "relative",
        top : "150%"
    },
  
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
  