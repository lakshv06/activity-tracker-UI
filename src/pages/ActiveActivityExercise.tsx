import { ExerciseDataProps, SpecificActivityData } from "../interfaces/global.interface";
import ExerciseData from "./ExerciseData";

function ActiveActivityExercise (props: SpecificActivityData){

    const {name, tagline, exercises} = props

    return(
        <div>
            <div>{name}</div>
            <div>{tagline}</div>
            {exercises.map((item: ExerciseDataProps, index: number)=>(
                <div key = {index}>
                    <ExerciseData exercise = {item}/>
                </div>
            ))}
        </div>
    )
}

export default ActiveActivityExercise;