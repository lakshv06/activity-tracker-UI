/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import ActiveActivityExercise from "./ActiveActivityExercise";
import { AllActivityData, SpecificActivityData } from "../interfaces/global.interface";
import contexts from "../context/common_context";

function HomePage (){

    const [activeActivity, setActiveActivity] = useState <Array<SpecificActivityData>> ([]);
    const [openButtons, setOpenButtons] = useState<Array<number>>([]);

    const name = sessionStorage.getItem("name");

    // TODO: change to const after proper integration
    const { userActivities, setUserActivities } = useContext(contexts.UserActivityContext);


    //TODO: remove this after proper integration
     useEffect(()=>{
        const dummyActivities = {
            Activity1: {
              name: "Facial Fat Reduction Plan",
              tagline: "Follow these exercises for a toned and slimmer face 🤟",
              exercises: [
                { exercise_name: "Cheek Puff Exercise", status: "Start" },
                { exercise_name: "Balloon Blowing", status: "Active" },
                { exercise_name: "Jawline Lift (Chin Lift)", status: "Done" }
              ]
            },
            Activity2: {
              name: "Skin Toning Plan",
              tagline: "Follow these exercises for a clear and better skin 🤟",
              exercises: [
                { exercise_name: "Sauna", status: "Start" },
                { exercise_name: "Swimming", status: "Active" },
                { exercise_name: "Ice Massage", status: "Done" }
              ]
            }
          };
        setUserActivities(dummyActivities);
     }, [setUserActivities])

    //TODO: Create an API call to fetch this data for a user

    const activities : AllActivityData = userActivities;

    const setActivity = (key: string, value : SpecificActivityData, index: number)=>{
        console.log(key);
        console.log(value);
        setActiveActivity(prev=>
            [...prev, value]
        );
        setOpenButtons(prev => [...prev, index]);
    }

    const closeActiveActivity = (key: string, index: number) =>{
        console.log("Activity data at click of close: ", activeActivity);
        const newActivityData = activeActivity.filter((item)=> item.name!==activities[key].name );
        setActiveActivity(newActivityData);

        const newOpenButtons = openButtons.filter((item)=> item!==index);
        setOpenButtons(newOpenButtons);
    }

    const isButtonOpen = (index: number) : boolean =>{
        let res = false;
        openButtons.forEach((item)=>{
            if(item===index){
                res = true;
            }
        })
        return res;
    }

    return (
        <div id="homepage-container">
           <h1> Welcome to Activity tracker, {name}</h1>
           <h3>Select your desired track plan from below👇</h3>
           {Object.entries(activities).map(([key, value], index)=>(
            <div key = {index} >
                <div className="homepage-activities-row">
                    <div onClick = {()=>{setActivity(key, value, index)}}><strong>{key} - {value.name}</strong></div>
                    <button className="close-activity-button" disabled = {!isButtonOpen(index)} onClick={()=>closeActiveActivity(key, index)}>Close Activity</button>
                </div>
                
                {isButtonOpen(index) && <ActiveActivityExercise activity_data = {value} activity_key = {key} />}
            </div>
           ))}
           {/* {activeActivity.length!==0 && activeActivity.map((item)=>(<ActiveActivityExercise {...item}/>))} */}
        </div>
    )
}

export default HomePage;