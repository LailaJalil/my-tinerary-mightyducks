import React from 'react'
import { useParams } from 'react-router-dom'
import Cards from './Cards'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'


export default function Detail() {
   const { id }= useParams()
   let [activity,setActivity] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/itineraries?citiId=${id}`)
        .then(res => setActivity(res.data.response))
        .catch(error=> console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(activity);

  return (

<>
       { activity.map((activity)=>(
      <Cards name={activity.name} image={activity.photo[0]} id={activity._id} category= "Description" continente={activity.description} ></Cards>    
       ))
       }
    </>
)}