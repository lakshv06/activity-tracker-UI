import { ReactElement, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SignUpFormData } from "../interfaces/global.interface";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Install react-icons if needed
import { useNavigate } from "react-router-dom";
import ActivityTrackerAPI from "../at-apiservices/apiServices"

function SignUpPage () : ReactElement{

  const [showPassword, setShowPassword] = useState(false);

    const methods = useForm<SignUpFormData>({
        mode: "all"
    })

    const navigate = useNavigate();
    
    const {handleSubmit, register, formState: {errors}} = methods;

    const handleSignInClick = () =>{
        navigate("/");
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleSignUpSubmit = async (event: any) =>{
        console.log(event);
        const getOtpResponse = await ActivityTrackerAPI.signUpUser(event);
        console.log(getOtpResponse);
    }

    return (
        <div>
            <div className="sign-in-page-whole-container">
      <div className="sign-in-form">
        <p id = "signin-heading">Sign Up to get started</p>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSignUpSubmit)}>
          <label htmlFor="name-id" id="name-label-id">
                Name: 
            </label>
            <input
              id="name-id"
              placeholder="Enter you Name..."
              type="text"
              {...register("name", {
                required: "Name field cannot be empty",
              })}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
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
            <div className="password-input-container">
              <label htmlFor="password-id" id="password-label-id">
                Password: 
              </label>
              <div className="password-input-wrapper">
                <input
                  id="password-id"
                  placeholder="Enters Password..."
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password field cannot be empty",
                  })}
                />
                {errors.password &&<span className="error-message">{errors.password.message}</span>}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="confirm-password-input-container">
              <label htmlFor="password-id" id="password-label-id">
                Confirm Password: 
              </label>
              <div className="confirm-password-input-wrapper">
                <input
                  id="cofirm-password-id"
                  placeholder="Enter Password Again..."
                  type={showPassword ? "text" : "password"}
                  {...register("confirm_password", {
                    required: "Confirm Password field cannot be empty",
                  })}
                />
                {errors.confirm_password &&<span className="error-message">{errors.confirm_password.message}</span>}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </FormProvider>
        <p id="signin-form-link">Already a user?<span onClick={handleSignInClick}>Go to Sign In Page</span></p>
      </div>
    </div>
        </div>
    )
}
export default SignUpPage;