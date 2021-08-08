import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Activites() {
    const [activities, setActivites] = useState([])

    const hook = () => {
        // console.log("Effect");
        axios
            .get('https://sheltered-basin-86221.herokuapp.com/api/activities')
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
