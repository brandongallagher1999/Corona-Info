import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Deaths from "./react_modules/Deaths";

import Total from "./react_modules/Total";

const covidApi = require("./api_modules/covidapi");

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      total : "0"
    };
  }

  async display()
  {
    let data = await covidApi.getAllData();
    console.log(data);
    return JSON.parse(data);
  }

  componentDidMount()
  {

  }
  render()
  {
    return(
      <View>
        <Total></Total>
        
        
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({

  main : {

  },

  titleStyle : {
    fontSize : "50px",
  },

  numberStyle : {
    margin : "-50px",
    position : "relative",
    left : "50%"
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width : "100px",
    height : "100px",
    borderColor : "red",
    borderWidth: "10px"
  }
});
