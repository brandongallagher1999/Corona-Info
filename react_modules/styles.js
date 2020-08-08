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
    dataRow : {
        fontWeight : "bold",
        fontSize : "20px",
        width: "10px",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    tinyLogo: {
        width: 100,
        height: 50,
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