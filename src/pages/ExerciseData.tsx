import { useContext } from "react";
import contexts from "../context/common_context";
// import ActivityTrackerAPI from "../at-apiservices/apiServices"

/* eslint-disable @typescript-eslint/no-explicit-any */
function ExerciseData(props: any) {
  const exercise = props.exercise;

  const activity_key = props.activity_key;
  // console.log("activity key: ", activity_key);

  const UserActivityContext = useContext(contexts.UserActivityContext);

  const handleButtonClick = (exercise: any) => {
    console.log(exercise.status);
    console.log(UserActivityContext.userActivities);
    const nextStatus = (currentStatus: string) => {
      if (currentStatus === "Start") return "Active";
      if (currentStatus === "Active") return "Done";
      if (currentStatus === "Done") return "Start";
      return "Start"; // default fallback
    };
    UserActivityContext.setUserActivities((prev: any) => {
        const updatedExercises = prev[activity_key].exercises.map((item: any) => {
            if (item.exercise_name === exercise.exercise_name) {
              return { ...item, status: nextStatus(item.status) };
            }
            return item;
          });
      
          return {
            ...prev,
            [activity_key]: {
              ...prev[activity_key],
              exercises: updatedExercises,
            },
          };
    });
    
    //TODO: call api to update changes
    // const patchUserDataResponse = await ActivityTrackerAPI.updateUserActivityData(UserActivityContext.userActivities);
    
    //TODO: check response status and message, if its correct then show toaster success otherwise show toaster fail
  };

  return (
    <div className="sub-exercise-div">
      <span className={`sub-exercise-name text-${exercise.status}`}>
        {exercise.exercise_name}
      </span>
      <button
        className={`sub-exercise-status button-${exercise.status}`}
        onClick={() => handleButtonClick(exercise)}
      >
        {exercise.status === "Done" && "Completed"}
        {exercise.status === "Active" && "Active"}
        {exercise.status === "Start" && "Start"}
      </button>
    </div>
  );
}

export default ExerciseData;
