import React,{useEffect, useState} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import SignInScreen from './SignInScreen';
import Spinner from '../component/Spinner';

const ResolveScreen=({navigation})=>{

  //  console.log(navigation);

    useEffect(()=>{
        try{
            firebase.initializeApp({
                apiKey: "AIzaSyBGQCtixWwYV9qGd0nJr5vl6Iurhcsa_KM",
                authDomain: "blogingauth.firebaseapp.com",
                databaseURL: "https://blogingauth.firebaseio.com",
                projectId: "blogingauth",
                storageBucket: "blogingauth.appspot.com",
                messagingSenderId: "272837144708",
                appId: "1:272837144708:web:d2fa4d3da223ec243952d1",
                measurementId: "G-TPP8YH5HG0"
            });
        }catch(err){
            console.log(err.message)
        }
    },[])

    let firebaseAppDefined=false;

    setInterval(()=>{
        if(!firebaseAppDefined){
            if(firebase.app()){
                firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                        navigation.navigate('Sign')
                    }else{
                        navigation.navigate('Login')
                    }        
                })

                firebaseAppDefined=true
            }
        }
    },100)

     return (
         <Spinner size="large"/>
     )
}

ResolveScreen.navigationOptions={
    headerShown:false
}


export default ResolveScreen;

