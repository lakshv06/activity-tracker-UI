/* eslint-disable @typescript-eslint/no-explicit-any */

import { useReducer } from "react";
import { Action, State } from "../interfaces/global.interface";
import "../css/calendar.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();

const initialState: State = {
  date: today.getDate(),
  month: today.getMonth(),
  year: today.getFullYear(),
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "PREV_MONTH":
      if (state.month === 0) {
        return { ...state, month: 11, year: state.year - 1 };
      }
      return { ...state, month: state.month - 1 };
    case "NEXT_MONTH":
      if (state.month === 11) {
        return { ...state, month: 0, year: state.year + 1 };
      }
      return { ...state, month: state.month + 1 };
    case "SET_TODAY":
      return {
        date: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
      };
    default:
      return state;
  }
}

export default function Calendar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { month, year } = state;

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
    const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

    const calendarDates = [];

    // Add dates from previous month (inactive)
    for (let i = firstDayOfMonth; i > 0; i--) {
      calendarDates.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateOfPrevMonth - i + 1}
        </li>
      );
    }

    // Add dates of current month
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
          ? "active"
          : "";

      calendarDates.push(
        <li key={`curr-${i}`} className={isToday}>
          {i}
        </li>
      );
    }

    // Add dates for next month (inactive)
    for (let i = lastDayOfMonth; i < 6; i++) {
      calendarDates.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayOfMonth + 1}
        </li>
      );
    }

    return calendarDates;
  };

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <p className="calendar-current-date">
          {months[month]} {year}
        </p>
        <div className="calendar-navigation">
          <span
            id="calendar-prev"
            className="material-symbols-rounded"
            onClick={() => dispatch({ type: "PREV_MONTH" })}
          >
            chevron_left
          </span>
          <span
            id="calendar-next"
            className="material-symbols-rounded"
            onClick={() => dispatch({ type: "NEXT_MONTH" })}
          >
            chevron_right
          </span>
        </div>
      </header>

      <div className="calendar-body">
        <ul className="calendar-weekdays">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="calendar-dates">{generateCalendar()}</ul>
      </div>
    </div>
  );
}
