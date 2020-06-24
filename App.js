import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {Avatar} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.default}>
      <Text>TEST 123</Text>
      <View style ={ styles.box }>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({

  default : {

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
