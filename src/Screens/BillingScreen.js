import React,{useState,useEffect, useCallback, useContext} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,FlatList} from 'react-native';
import firebase from 'firebase';
import {MaterialIcons} from '@expo/vector-icons';
import Card from '../component/Card';
import CardSection from '../component/CardSection';
import {Context} from '../context/BlogContext';
import Spinner from '../component/Spinner';

var amount=0;

const BillingScreen=({navigation})=>{
    var c;
    
    const[bill,setbill]=useState(0);
    const orders=navigation.getParam('items')
    {orders.length===0?c=0:c=1}

    useEffect(()=>{
        amount=0;
        orders.map(ob=>{
            amount=amount+ob.price*ob.quantity
            console.log(amount);
            setbill(amount);
        })
        console.log(bill);
    },[])
 
    
    //console.log(orders);

    return (
        <View>
        <View style={{flexDirection:"row",justifyContent:"space-around",borderBottomWidth:2}}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Items</Text>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Quantity</Text>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Price</Text>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Amount</Text>
        </View>
        <View>
            <FlatList
            data={orders}
            keyExtractor={(value)=>value.id.toString()}
            renderItem={({item})=>{
                return (
                    <Card>
                    <Text style={{marginLeft:10,fontSize:15,marginTop:8}}>{item.name}</Text>
                    <Text>Location:L{item.location[0]}S{item.location[1]}C{item.location[2]}</Text>
                    <View style={{paddingBottom:10}}>
                        <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:-30}}>
                            <Text></Text>
                            <Text style={{marginLeft:10,fontSize:15}}> {item.quantity}</Text>
                            <Text style={{marginLeft:10,fontSize:15}}> {item.price}</Text>
                            <Text style={{marginLeft:10,fontSize:15}}> {item.quantity*item.price}</Text>
                        </View>
                    </View>
                    </Card>
                )
            }}
            />
        {c==1?<Text style={{fontWeight:"bold",fontSize:22,marginLeft:150,marginTop:10}}>Total Amount: {bill}</Text>:
        <Text style={{fontWeight:"bold",fontSize:22,marginTop:10}}>Please buy something:)</Text>}
        </View>
        </View>
    )

}

BillingScreen.navigationOptions=({
    title:"Cart",
    tabBarIcon:<MaterialIcons name="shopping-cart" size={30}/>
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

export default BillingScreen;
