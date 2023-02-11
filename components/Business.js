import React from 'react';
import {useState,useEffect} from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import axios from 'axios';
import Template from './Template';

export default function Entertainment(){

const[newsArray1,setNewsArray1]=useState([]);
const[newsArray2,setNewsArray2]=useState([]);
const[newsArray3,setNewsArray3]=useState([]);

useEffect(()=>{
 const url_1="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=892a6535a50e4321a237b8389d75cc78";
  axios.get(url_1).then((response)=>{
      setNewsArray1(response.data.articles);})

 const url_2="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=892a6535a50e4321a237b8389d75cc78";
  axios.get(url_2).then((response)=>{
      setNewsArray2(response.data.articles);})

 
 const url_3="https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=892a6535a50e4321a237b8389d75cc78";
  axios.get(url_3).then((response)=>{
      setNewsArray3(response.data.articles);})
  
  
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

{
                  newsArray3.map(i=>{
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