import { ExerciseDataProps } from "../interfaces/global.interface";
import ExerciseData from "./ExerciseData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ActiveActivityExercise (props: any){

    const {name, tagline, exercises} = props.activity_data;
    const activity_key = props.activity_key;

    // console.log("activity key: ", activity_key);

    return(
        <div className="exercises-div">
            <div className="exercise-div-name">{name}</div>
            <div className="exercise-div-tagline">{tagline}</div>
            {exercises.map((item: ExerciseDataProps, index: number)=>(
                <div key = {index} className="exercises-child-div">
                    <ExerciseData exercise = {item} activity_key = {activity_key}/>
                </div>
            ))}
        </div>
    )
}

export default ActiveActivityExercise;