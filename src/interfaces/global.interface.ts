import ExerciseDataProps from '../pages/ExerciseData';
export interface SignInFormData{
    email: string,
    password: string,
    otp: number
}

export interface OTPParams{
    email: string,
}

export interface SignUpFormData{
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface UserContextData{
    email: string;
    token: string;
    setUser : (user:{email: string, token: string})=>void
}

export interface SessionActiveContextData{
    isSessionActive : boolean;
    setIsSessionActive: (active: boolean) => void;
}

export interface UserActivityContextData{
    userActivities : AllActivityData ;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUserActivities : (activity: any)=>void;
}

export type NavHeaderComponentsData = {
    [key: string] : {[key: string] : string};
}

export interface ExerciseDataProps{
    exercise_name : string;
    status: string;
}

export interface SpecificActivityData {
    name: string;
    tagline: string;
    exercises: Array<ExerciseDataProps>
}

export interface AllActivityData{
    [key: string] : SpecificActivityData;
}