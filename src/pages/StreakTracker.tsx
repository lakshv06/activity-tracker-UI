import { useContext } from "react";
import contexts from "../context/common_context";
import Calendar from "./Calendar";

function StreakTracker() {
  const curr_streak = Number(sessionStorage.getItem("curr_streak")) || 0;
  const max_streak = Number(sessionStorage.getItem("max_streak")) || 0;

  const UserActivityData = useContext(
    contexts.UserActivityContext
  ).userActivities;

  let todaysPending = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(UserActivityData).forEach(([key, value]) => {
    value.exercises.forEach((item) => {
      if (item.status !== "Done") todaysPending++;
    });
  });

  return (
    <div id="streak-tracker-container">
      <p id="streak-tracker-heading">🔥 Streak Tracker</p>
      <div>
        Current Streak :{" "}
        <span>
          {curr_streak} Day{curr_streak > 1 ? "s" : ""}
        </span>
      </div>
      <div>
        Max Streak :{" "}
        <span>
          {max_streak} Day{max_streak > 1 ? "s" : ""}
        </span>
      </div>
      <div>
        Up for Today :{" "}
        <span>
          {todaysPending} {todaysPending > 1 ? "Activities" : "Activity"}
        </span>
      </div>

      <div>
        <Calendar />
      </div>
    </div>
  );
}

export default StreakTracker;
