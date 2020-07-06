import React from 'react';
import {View,StyleSheet} from 'react-native';

const CardSection=(props)=>{
    return(
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles=StyleSheet.create({
    containerStyle:{
        borderBottomWidth:0.1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'gray',
        position:'relative',
        borderWidth:0.5,
        elevation:2
    }
});

export default CardSection;