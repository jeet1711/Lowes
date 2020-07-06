import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import BlogPostForm from './BlogPostForm';
import {MaterialIcons} from '@expo/vector-icons';


const Header=({headerText,task})=>{
    return (
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>{headerText}</Text>
                <TouchableOpacity style={{marginRight:5}} onPress={()=>{
                    task()
                }}>
                    <MaterialIcons name="shopping-cart" size={35}/>
                </TouchableOpacity>
            </View>
    )
}

const styles=StyleSheet.create({
    TextStyle:{
        fontSize:30,
        marginLeft:100
    },
    ViewStyle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:20,
        borderBottomWidth:2
    }
})

export default Header;