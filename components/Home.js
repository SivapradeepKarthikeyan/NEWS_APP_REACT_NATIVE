import React from 'react';
import {useState,useEffect} from 'react';
import{View,StyleSheet,Text,TextInput,ScrollView,Button} from 'react-native';
import axios from 'axios';
import Template from './Template'



export default function Home(){

const[input,setInput]=useState('');
const[newsArray,setNewsArray]=useState([]);

useEffect(()=>{
     let url="https://newsapi.org/v2/everything?q=general&apiKey=892a6535a50e4321a237b8389d75cc78";
    //  axios.get(url).then(response=>{
    //     setNewsArray(response.data.articles);
       
    // })
},[])

function fun_setInput(input){
    setInput(input)
}

function getNews(){
    setNewsArray([])
    let url="https://newsapi.org/v2/everything?q="+`${input}`+"&apiKey=892a6535a50e4321a237b8389d75cc78";
    axios.get(url).then(response=>{
        setNewsArray(response.data.articles);
       
    })
}


 return(
        <View>
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-around',marginTop:25}}>
                    <TextInput placeholder="ex:bitcoin"  onChangeText={fun_setInput}
                    style={styles.input}/>
                    <Button onPress={()=>{getNews()}} title="SEARCH"
                    style={styles.button_Search}/>
            </View>

             <ScrollView style={{backgroundColor:'black'}}>
           {
               newsArray.map(i=>{
                   return(
                   <Template key={i.title}
                             title={i.title}
                             urlToImage={i.urlToImage}
                             description={i.description}
                             author={i.author}
                             publishedAt={i.publishedAt}
                             source={i.source.name}
                             url={i.url}
                             
                   />
                   )
               })
           }
           </ScrollView>
            
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        borderWidth:1.7,
        borderColor:'white',
        color:"black",
        borderRadius:1,
        width:"70%",
        marginLeft:1,
        padding:5

    },
    button_Search:{
        color:'black',
        alignSelf:'center',
        marginLeft:5
    }
})