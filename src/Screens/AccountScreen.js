import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import {MaterialIcons} from '@expo/vector-icons';

const AccountScreen=()=>{
    return (
        <View style={styles.Container}>
            <Text style={{fontSize:50,marginTop:15}}>Account Screen</Text>
            <TouchableOpacity style={styles.ButtonStyle} 
            onPress={()=>firebase.auth().signOut()}>
            <Text style={{color:'blue'}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )

}

AccountScreen.navigationOptions=({
    title:"Profile",
    tabBarIcon:<MaterialIcons name="account-circle" size={30}/>
})

const styles=StyleSheet.create({
    Container:{
        flex:1,
    },
    ButtonStyle:{
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        marginTop:60,
        marginLeft:10,
        marginRight:10,
        borderColor:'blue',
        borderRadius:7
    }

})

export default AccountScreen;
