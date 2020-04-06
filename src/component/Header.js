import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import BlogPostForm from './BlogPostForm';


const Header=({headerText,symbolplus,symbolmenu,onSubmit})=>{
    return (
        <View style={styles.ViewStyle}>
            <View>
                <TouchableOpacity>
                    {symbolmenu}
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:120}}>
                <Text style={styles.TextStyle}>{headerText}</Text>
            </View>
            <View style={{borderColor:'red',flex:1,alignItems:'flex-end'}}>
                <TouchableOpacity onPress={()=>onSubmit()}>
                    {symbolplus}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    TextStyle:{
        fontSize:30
    },
    ViewStyle:{
        height:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F8F8F8',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        flexDirection:"row",
    }
})

export default Header;