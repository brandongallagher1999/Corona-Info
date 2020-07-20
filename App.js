import React, {Component} from 'react';
import { ScrollView} from "react-native";
import Deaths from "./react_modules/Deaths";
//import styles from "./react_modules/styles";
import Total from "./react_modules/Total";
import Recovered from "./react_modules/Recovered";
const covidApi = require("./api_modules/covidapi");


export default class App extends Component {

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
      <ScrollView>
        <Total></Total>
        <Deaths></Deaths>
        <Recovered></Recovered>
      </ScrollView>
      
    );
  }
  
}