import {createContext} from "react";
import { UserContextData } from "../interfaces/global.interface";

const UserContext = createContext<UserContextData>({email: "", token: "", setUser:()=>{}});

const contexts = {UserContext};

export default contexts;

