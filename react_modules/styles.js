import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleStyle : {
      fontSize : "50px",
      position : "relative",
    },

    main : {
        position : "relative",
        top: "10%"
    },
  
    numberStyle : {
        fontWeight : "bold",
        color : "grey",
        fontSize : "50px",
        margin : "-50px",
        position : "relative",
        top : "45px"
    },
  
    container: {
        flex: 1,
        paddingBottom : "125px",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

  
export default styles;