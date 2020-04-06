import React, { useContext } from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import BlogPostForm from '../component/BlogPostForm';
import { Context } from '../context/BlogContext';

const AddBlogScreen=({navigation})=>{
    const {addBlogPost}=useContext(Context)
    return (
        <BlogPostForm navigation={navigation}
        onSubmit={(title,content)=>{
            addBlogPost(title,content,()=>navigation.pop())
        }} />
    )
}

const styles=StyleSheet.create({

})

export default AddBlogScreen;