/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ActiveActivityExercise from "./ActiveActivityExercise";
import { AllActivityData, SpecificActivityData } from "../interfaces/global.interface";

function HomePage (){

    const [activeActivity, setActiveActivity] = useState <SpecificActivityData> ();

    const name = sessionStorage.getItem("name");

    const activities : AllActivityData = {
        Activity1 :{
            name: "Facial Fat Reduction Plan",
            tagline: "Follow these exercises for a toned and slimmer face 🤟",
            exercises:[
                {
                    exercise_name: "Cheek Puff Exercise",
                    status: "Start"
                },
                {
                    exercise_name: "Balloon Blowing",
                    status: "In Progress"
                },
                {
                    exercise_name: "Jawline Lift (Chin Lift)",
                    status: "Done"
                }
            ]   
        },
        Activity2 :{
            name: "Skin Toning Plan",
            tagline: "Follow these exercises for a Clear and better skin 🤟",
            exercises:[
                {
                    exercise_name: "Sauna",
                    status: "Start"
                },
                {
                    exercise_name: "Swimming",
                    status: "In Progress"
                },
                {
                    exercise_name: "Ice Massage",
                    status: "Done"
                }
            ]   
        }
    }

    const setActivity = (value : SpecificActivityData)=>{
        setActiveActivity(value);
    }

    const closeActiveActivity = () =>{
        setActiveActivity({name: "", tagline: "", exercises:[]});
    }

    return (
        <div id="homepage-container">
           <h1> Welcome to Activity tracker, {name}</h1>
           <h3>Select your desired track plan from below👇</h3>
           {Object.entries(activities).map(([key, value], index)=>(
            <div key = {index} className="homepage-activities-row">
                <div onClick = {()=>{setActivity(value)}}><strong>{key} - {value.name}</strong></div>
                <button className="close-activity-button" onClick={()=>closeActiveActivity()}>Close Activity</button>
            </div>
           ))}
           {activeActivity?.name && <ActiveActivityExercise {...activeActivity}/>}
        </div>
    )
}

export default HomePage;