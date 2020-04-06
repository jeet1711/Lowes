import React, { useContext, useEffect } from 'react';
import {Text,View, TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import Header from '../component/Header';
import {Feather} from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const SignInScreen=({navigation})=>{
    const {state:{blogPost},deleteBlogPost,getBlogPosts}=useContext(Context);

    useEffect(()=>{
        getBlogPosts();

       const listener= navigation.addListener('didFocus',()=>{
            getBlogPosts();
        })

        return ()=>{
            listener.remove();
        }
    },[])

    var symbolplus=<Feather name="plus" size={40}/>
    var symbolmenu=<Feather name="menu" size={40}/>
    return(
        <View style={styles.OuterContainer}>
            <Header headerText="My Blogs"
             symbolplus={symbolplus}
             symbolmenu={symbolmenu}
             onSubmit={()=>navigation.navigate('AddBlog')} />

            <FlatList
             data={blogPost}
             keyExtractor={blogPosts=>blogPosts.title}
             renderItem={({item})=>{
                 return (
                     <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                     <View style={styles.ListContainerStyle}>
                       <Text style={{fontSize:30}}>{item.title}-{item.id}</Text>
                       <TouchableOpacity style={styles.IconStyle} onPress={()=>deleteBlogPost(item.id)}>
                       <Feather name="trash-2" size={30} />
                       </TouchableOpacity>
                     </View>
                     </TouchableOpacity>
                 )
             }}/>
        </View>
    )
}

SignInScreen.navigationOptions={
    headerShown:false
}

const styles=StyleSheet.create({
    OuterContainer:{
        flex:1
    },
    ListContainerStyle:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        borderTopWidth:1,
        borderColor:'gray'
    },
    IconStyle:{
        paddingTop:5
    
    }
})

export default SignInScreen;