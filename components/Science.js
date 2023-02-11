import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import Template from './Template'

export default function Science({navigation}){

const[newsArray1,setNewsArray1]=useState([]);
const[newsArray2,setNewsArray2]=useState([]);



useEffect(()=>{
    
    const url_1="https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=892a6535a50e4321a237b8389d75cc78";
    axios.get(url_1).then(response=>{
        setNewsArray1(response.data.articles);
    })

    const url_2="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=892a6535a50e4321a237b8389d75cc78";
    axios.get(url_2).then(response=>{
        setNewsArray2(response.data.articles);
    })

},[])

 return(
     <View>
          <ScrollView style={{backgroundColor:'black'}}>
              {
                  newsArray1.map(i=>{
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

                {
                  newsArray2.map(i=>{
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