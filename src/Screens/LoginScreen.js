import React, { useState, useContext } from 'react';
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {Entypo,AntDesign} from '@expo/vector-icons' 
import firebase from 'firebase';
import { Context } from '../context/BlogContext';

const LoginScreen=({navigation})=>{

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {state,
           editError,
           clearErrorMessage}=useContext(Context);

    const Render=()=>{
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(onLoginSuccess())
      .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(onLoginSuccess())
        .catch((err)=>{
          {onLoginFail(err.message)}
        })
      })
    }

    const onLoginFail=(err)=>{
      editError(err);
      setEmail('');
      setPassword('');
    }

    const onLoginSuccess=()=>{
      clearErrorMessage();
      setPassword('');
      setEmail('');
    }

    

    return (

      <View style={styles.OuterContainer}>
        <View style={styles.InnerContainer}>
          <Text style={styles.TextStyle}>User Login</Text>
          <Entypo name="login" size={90} style={styles.IconStyle}/>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            placeholder="Username"
            style={styles.TextInputStyle}
            onChangeText={newUser=>setEmail(newUser)}
          />
          <TextInput
            secureTextEntry
            value={password}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Password"
            style={styles.TextInputStyle}
            onChangeText={newPass=>setPassword(newPass)}
          />
          {state.error ? <Text style={styles.errorStyle}>{state.error}</Text>:null}

          <TouchableOpacity style={{marginTop:20}} onPress={()=>Render()}>
            <AntDesign name="login" size={50} style={styles.SignIconStyle}/>
            <Text style={styles.SignInTextStyle}>Sign In</Text> 
          </TouchableOpacity>
          
        </View>

      </View>
      
    )
}

LoginScreen.navigationOptions={
  headerShown:false
}

const styles=StyleSheet.create({
  TextStyle:{
    fontSize:40,
    fontWeight:"700",
    alignSelf:"center"
  },
  IconStyle:{
    alignSelf:"center",
    marginTop:15,
    marginRight:20
  },
  InnerContainer:{
    marginTop:100,
    height:500
  },
  OuterContainer:{
    backgroundColor:"skyblue",
    flex:1
  },
  TextInputStyle:{
    fontSize:15,
    borderWidth:4,
    borderRadius:7,
    margin:10,
    paddingLeft:14,
    height:60,
    marginLeft:40,
    marginRight:40,
    backgroundColor:"white"
  },

  SignInTextStyle:{
    fontSize:25,
    fontWeight:"bold",
    alignSelf:"center"
  },

  SignIconStyle:{
    alignSelf:"center"
  },
  errorStyle:{
    fontSize:15,
    color:'red',
    alignSelf:"center"
  }

})

LoginScreen.navigationOptions={
  headerShown:false
}


export default LoginScreen;
