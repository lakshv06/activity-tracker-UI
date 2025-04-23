import {createContext} from "react";
import { SessionActiveContextData, UserContextData } from "../interfaces/global.interface";

const UserContext = createContext<UserContextData>({email: "", token: "", setUser:()=>{}});

const SessionActiveContext = createContext<SessionActiveContextData>({isSessionActive : false, setIsSessionActive: ()=>{}});

const contexts = {UserContext, SessionActiveContext};

export default contexts;

