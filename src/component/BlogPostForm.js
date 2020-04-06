import React, { useState, useContext } from 'react';
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm=({navigation,onSubmit,initialValues})=>{

    const [title,setTitle]=useState(initialValues.title);
    const [content,setContent]=useState(initialValues.content);

    return(
        <View style={styles.Outer}>
        <View style={styles.Inner}>
          <Text style={styles.TextStyle}>Enter Title:</Text>
          <TextInput
           value={title}
           onChangeText={(newTitle)=>setTitle(newTitle)}
           placeholder="Your new Title..." 
           fontSize={20}
           paddingTop={5}/>

          <Text style={styles.TextStyle}>Enter Content:</Text>
          <TextInput 
           value={content}
           onChangeText={(newContent)=>setContent(newContent)}
           placeholder="Write some Information..."
           fontSize={20} 
           paddingTop={10}/>
        </View>
            <TouchableOpacity style={styles.ButtonStyle} onPress={()=>onSubmit(title,content)}>
            <Text style={{fontSize:20}}>Save Blog</Text>
            </TouchableOpacity>
        </View>
    )

}

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
}

const styles=StyleSheet.create({
    Outer:{
        borderColor:'red',
        flex:1
    },
    Inner:{
        justifyContent:'center',
        marginTop:100,
        marginLeft:10,
        borderWidth:0.3,
        marginRight:10
    },
    TextStyle:{
        fontSize:20,
        paddingTop:15
    },
    ButtonStyle:{
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'blue',
        borderRadius:7
    }

})

export default BlogPostForm;
