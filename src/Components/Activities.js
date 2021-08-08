import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Activites() {
    const [activities, setActivites] = useState([])
    const baseURL = process.env.BASEURL;

    const hook = () => {
        // console.log("Effect");
        axios
            .get(baseURL + '/api/activities')
            .then(response => {
                console.log(response.data)
            setActivites(response.data)
        })
    }
  
  useEffect(hook, [])
    return (
        <div>
            Activities
        </div>
    )
}
