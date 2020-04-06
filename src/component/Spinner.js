import React from 'react';
import {Text,View,StyleSheet,ActivityIndicator} from 'react-native';

const Spinner=({size})=>{
    return (
        <View style={styles.IndicatorStyle}>
          <ActivityIndicator size={size || 'large'}/>
        </View>
    )    
}

const styles=StyleSheet.create({
    IndicatorStyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Spinner;