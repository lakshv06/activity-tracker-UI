import { ReactElement, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SignInFormData } from "../interfaces/global.interface";
import { Outlet, useNavigate } from "react-router-dom";
import ActivityTrackerAPI from "../../src/at-apiservices/apiServices"
import contexts from "../context/common_context";

export default function SignInPage(): ReactElement {

  const methods = useForm<SignInFormData>({
    mode: "all",
  });

  const UserContext = useContext(contexts.UserContext)

  const navigate = useNavigate();

  const { handleSubmit, register , formState:{errors}} = methods;

  const handleGetOtpSubmit = async (event: SignInFormData) => {
    console.log("I got clicked");
    console.log(event);
    // use axios libraries later
    const getOtpResponse = await ActivityTrackerAPI.getOTPResponse(event);
    console.log(getOtpResponse);
    if(getOtpResponse?.message=== "OTP sent to email"){
        UserContext.setUser({email: event.email, token: getOtpResponse?.token_response});
        sessionStorage.setItem("email", event.email);
        sessionStorage.setItem("token", getOtpResponse?.token_response);
        navigate("/otp-page");
    } else{
        //clear the form and show dial
    }
  };

  const handleSignUpClick = () =>{
    console.log("clickedeasf");
    navigate("/sign-up")
    
  }

  return (
    <div className="sign-in-page-whole-container">
      <div className="sign-in-form">
        <p id = "signin-heading">Sign In to track your Activity</p>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleGetOtpSubmit)}>
            <label htmlFor="email-id" id="email-label-id">
                Email: 
            </label>
            <input
              id="email-id"
              placeholder="Enter you email..."
              type="email"
              {...register("email", {
                required: "Email field cannot be empty",
              })}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
            <button type="submit">Get OTP</button>
          </form>
        </FormProvider>
        <p id="signin-form-link">Not a user yet? <span onClick={handleSignUpClick}>Sign up instead</span></p>
      </div>
      <Outlet />
    </div>
  );
}
