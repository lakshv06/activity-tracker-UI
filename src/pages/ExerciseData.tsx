/* eslint-disable @typescript-eslint/no-explicit-any */
function ExerciseData(props:any){
    const {exercise} = props;
    return(
        <div>
            {exercise.exercise_name} - {exercise.status}
        </div>
    )
}

export default ExerciseData;