import { useNavigate } from 'react-router-dom';
import { NavHeaderComponentsData } from '../interfaces/global.interface';

function NavHeader (){

    const navigate = useNavigate();

    const navHeaderComponents : NavHeaderComponentsData= {
        Home : {name: "Home", link: "/home"},
        Streak_Tracker : {name: "Streak Tracker", link: "/streak-tracker"},
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navigateTo = (link:string) : any =>{
        console.log("Clicked on navigation header", link);
        navigate(link);
    }

    const LogOutUser = () =>{
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <div id = "nav-header-container">
            <div id = "interactive-icons">
                {Object.entries(navHeaderComponents).map(([key, value], index)=>(
                    <div key = {`${key}-${index}`}>
                        <button className = "nav-header-clickable-icon" onClick={()=>navigateTo(value.link)}>{value.name}</button>
                    </div>
                ))}
                <div><button id = "logout-button" onClick={()=>LogOutUser()}>Log Out</button></div>
            </div>
            
        </div>
    )
}

export default NavHeader