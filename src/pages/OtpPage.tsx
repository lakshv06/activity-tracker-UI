import { ReactElement, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AllActivityData, SignInFormData } from '../interfaces/global.interface';
import { useNavigate } from "react-router-dom";
import contexts from "../context/common_context";
import ActivityTrackerAPI from "../../src/at-apiservices/apiServices"

function OtpPage(): ReactElement {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const UserContext = useContext(contexts.UserContext);
  const SessionActiveContext = useContext(contexts.SessionActiveContext);
  const UserActivityContext = useContext(contexts.UserActivityContext);

  const navigate = useNavigate();

  const methods = useForm<SignInFormData>({
    mode: "all",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

    //TODO: Create an API call to fetch this data for a user

  const activities : AllActivityData  = {
    Activity1 :{
        name: "Facial Fat Reduction Plan",
        tagline: "Follow these exercises for a toned and slimmer face 🤟",
        exercises:[
            {
                exercise_name: "Cheek Puff Exercise",
                status: "Start"
            },
            {
                exercise_name: "Balloon Blowing",
                status: "Active"
            },
            {
                exercise_name: "Jawline Lift (Chin Lift)",
                status: "Done"
            }
        ]   
    },
    Activity2 :{
        name: "Skin Toning Plan",
        tagline: "Follow these exercises for a Clear and better skin 🤟",
        exercises:[
            {
                exercise_name: "Sauna",
                status: "Start"
            },
            {
                exercise_name: "Swimming",
                status: "Active"
            },
            {
                exercise_name: "Ice Massage",
                status: "Done"
            }
        ]   
    }
}

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignInSubmit = async (event: any) => {
    setIsLoading(true);
    console.log("Form data after filling otp: ", event);
    const signInResponse = await ActivityTrackerAPI.loginUser(event);
    console.log("Sign In Response: ", signInResponse);
    if(signInResponse?.message === "Login successful!"){
        setIsLoading(false);
        SessionActiveContext.setIsSessionActive(true);
        UserActivityContext.setUserActivities(activities);
        sessionStorage.setItem("curr_streak", signInResponse?.streak_data.curr_streak);
        sessionStorage.setItem("max_streak", signInResponse?.streak_data.max_streak);
        navigate("/home");
    } else{
        console.log("Error on login: ", signInResponse);
        setIsLoading(false);
        sessionStorage.clear();
    }
  };

  return (
    <div>
      <div className="sign-in-page-whole-container">
        <div className="sign-in-form">
          <p id="signin-heading">Sign In to track your Activity</p>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleSignInSubmit)}>
            <label htmlFor="name-id" id="name-label-id">
                Name:
              </label>
              <input
                id="name-id"
                placeholder="Enter you Name..."
                type="text"
                disabled
                value={sessionStorage.getItem("name")||""}
              />
              <label htmlFor="email-id" id="email-label-id">
                Email:
              </label>
              <input
                id="email-id"
                placeholder="Enter you email..."
                type="email"
                disabled
                value={UserContext.email}
                {...register("email", {
                  required: "Email field cannot be empty",
                })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
              <label htmlFor="email-id" id="email-label-id">
                OTP:
              </label>
              <input
                id="otp-id"
                placeholder="Enter you OTP..."
                type="number"
                {...register("otp", {
                  required: "OTP field cannot be empty",
                })}
              />
              {errors.otp && (
                <span className="error-message">{errors.otp.message}</span>
              )}
              <label htmlFor="email-id" id="email-label-id">
                Password:
              </label>
              <input
                id="password-id"
                placeholder="Enter you password..."
                type="password"
                {...register("password", {
                  required: "Password field cannot be empty",
                })}
              />
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
              <button type="submit" disabled={isLoading}>{isLoading ? "Loading..." :"Sign In Baby"}</button>
            </form>
          </FormProvider>
          <p id="signin-form-link">
            Not a user yet?{" "}
            <span onClick={handleSignUpClick}>Sign up instead</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
