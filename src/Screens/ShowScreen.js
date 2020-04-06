import React, { useContext } from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
    const {state}=useContext(Context);

    const blog=state.blogPost.find((blogpost)=>blogpost.id==navigation.getParam('id'));

    return (
        <View>
            <Text style={{fontSize:20}}>{blog.title}</Text>
            <Text style={{fontSize:20}}>{blog.content}</Text>
        </View>
    )
}

const styles=StyleSheet.create({

})

ShowScreen.navigationOptions=({navigation})=>{
    return {
        headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
        <EvilIcons name='pencil' size={35}/>
        </TouchableOpacity>
    }
}

export default ShowScreen;