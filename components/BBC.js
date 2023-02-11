import React from 'react';
import {useState,useEffect} from 'react';
import{View,StyleSheet,Text,ScrollView} from 'react-native';
import axios from 'axios';
import Template  from './Template'



export default function World(){

const[newsArray,setNewsArray]=useState([]);
useEffect(()=>{
    const url="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=892a6535a50e4321a237b8389d75cc78";
    axios.get(url).then(response=>{
        setNewsArray(response.data.articles);
         //console.warn(newsArray[6]);
    })
},[])


    return(
        <View>
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