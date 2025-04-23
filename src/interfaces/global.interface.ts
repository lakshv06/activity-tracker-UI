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