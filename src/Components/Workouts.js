import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Workouts() {
    const [workouts, setWorkouts] = useState([])

    const hook = () => {
        console.log("Effect");
        axios
            .get('http://localhost:3001/workouts')
            .then(response => {
                console.log('promise fulfilled')
            setWorkouts(response.data)
        })
    }
  
  useEffect(hook, [])
    return (
        <div>
            Workouts
        </div>
    )
}
