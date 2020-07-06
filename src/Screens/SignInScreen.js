import React, { useContext, useEffect ,useState} from 'react';
import {Text,View, TouchableOpacity,StyleSheet,FlatList,ImageBackground} from 'react-native';
import Header from '../component/Header';
import {Feather} from '@expo/vector-icons';
import { Context } from '../context/BlogContext';
import Grid from 'react-native-grid-component';
import list from '../Json/db.json';

const SignInScreen=({navigation})=>{
    const[listing,setlisting]=useState(list);
    const[items,setitems]=useState([]);
    //console.log("****************************");
    //console.log(items);
    //console.log("****************************");
    

    const updatecount=(data)=>{
        //console.log(addAmount)
        
        setlisting([...listing].map(object=>
            {
                if(object.id===data.id){
                    return {
                        ...object,
                        stock:object.stock-1
                    }
                }
                else return object
            }))

        updatecart(data)
    }

    const updatecart=(data)=>{
        //console.log(data)
        var c=0;
        setitems([...items].map(object=>
            {
                if(object.id===data.id){
                    c=1;
                    return {
                        ...object,
                        stock:object.stock-1,
                        quantity:object.quantity+1
                    }

                }
                else return object;
            }))

        if(c!=1){
        setitems([...items,data])
        }
    }

     const renderItems = (data) => (
        <View style={[{ backgroundColor: 'white' }, styles.item]}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={styles.TextStyle}>{listing[data.id].name}</Text>
        <Text style={{fontSize:20}}>{data.price}/-</Text>
        </View>
        <ImageBackground source={{uri:data.uri}} 
        style={{height:100}}/>
        
        {listing[data.id].stock<=0 ?
            <View style={{flexDirection:"row",alignItems:"center"}}>
             <Text style={{color:"black",margin:5}}>No items left</Text></View>:
            
            <View style={{flexDirection:"row",alignItems:"center"}}>

            <TouchableOpacity onPress={()=>
                updatecount(data)
               
            }>
             <Text style={styles.button}>Add Item</Text>
            </TouchableOpacity>
            <Text>{listing[data.id].stock} items left</Text>
            </View>}
        </View>
      );

      const renderPlaceholder = () => <View style={styles.item} />

      const go_cart=()=>{
          navigation.navigate('Billing',{items});
      }

    var symbolplus=<Feather name="plus" size={40}/>
    return(
        <View style={{flex:1}}>
        <Header 
            headerText="Available Items" 
            task={go_cart}
        />
        <Grid
            style={styles.list}
            renderItem={renderItems}
            keyExtractor={item=>item.id}
            renderPlaceholder={renderPlaceholder}
            data={list}
            numColumns={2}
        />
        </View>
    )
}

SignInScreen.navigationOptions={
    headerShown:false
}

const styles=StyleSheet.create({
    item: {
        flex: 1,
        height: 160,
        margin: 2,
        borderRadius:5
      },
    list: {
        flex: 1
      },
    button:{
        alignItems:"flex-end",
        marginLeft:5,
        borderWidth:0.8,
        height:25,
        padding:2,
        paddingLeft:8,
        width:80,
        backgroundColor:'#ebae34',
        marginRight:5,
        borderRadius:8,
        elevation:10,
        marginTop:5

    },
    TextStyle:{
        fontSize:20
    }
})

export default SignInScreen;