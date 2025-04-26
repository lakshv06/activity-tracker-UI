import {createContext} from "react";
import { SessionActiveContextData, UserActivityContextData, UserContextData } from "../interfaces/global.interface";

const UserContext = createContext<UserContextData>({email: "", token: "", setUser:()=>{}});

const SessionActiveContext = createContext<SessionActiveContextData>({isSessionActive : false, setIsSessionActive: ()=>{}});

const UserActivityContext = createContext<UserActivityContextData>({userActivities: {}, setUserActivities : ()=>{}})

const contexts = {UserContext, SessionActiveContext, UserActivityContext};

export default contexts;

