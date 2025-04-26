import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NoMatchContent() {

    const countdownInitialValue = 5; // in seconds
    const [seconds, setSeconds] = useState(countdownInitialValue);
    const navigate = useNavigate();

    const clearSession = ()=>{
      sessionStorage.clear();
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds(prev=>prev-1);
        }, 1000);

        const redirectTimer = setTimeout(()=>{
            navigate("/");
        }, countdownInitialValue*1000)

        return()=>{
            clearInterval(timer);
            clearTimeout(redirectTimer);
            clearSession();
        }

    }, [navigate])

  return (
    <div id = "no-match-page-container">
      <h1>404 - Page Not Found</h1>
      <p>Looks like you got a little lost 😅</p>
      <p>
        Redirecting to home in <strong>{seconds}</strong> seconds...
      </p>
    </div>
  );
}

export default NoMatchContent;
