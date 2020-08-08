import React, {Component} from 'react';
import { ScrollView} from "react-native";
import Deaths from "./react_modules/Deaths";
//import styles from "./react_modules/styles";
import Total from "./react_modules/Total";
import Recovered from "./react_modules/Recovered";
const covidApi = require("./api_modules/covidapi");


import CountryTable from "./react_modules/CountryTable";


export default class App extends Component {

  async display()
  {
    //let data = await covidApi.getCountryData();
    //console.log(data);
  }

  componentDidMount()
  {
    this.display();
  }
  render()
  {
    return(
      <ScrollView>
        <Total></Total>
        <Deaths></Deaths>
        <Recovered></Recovered>
        <CountryTable></CountryTable>
      </ScrollView>
      
    );
  }
  
}