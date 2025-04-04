import { ReactElement, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SignInFormData } from "../interfaces/global.interface";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Install react-icons if needed
import { Outlet } from "react-router-dom";

export default function SignInPage(): ReactElement {
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<SignInFormData>({
    mode: "all",
  });

  const { handleSubmit, register , formState:{errors}} = methods;

  const handleGetOtpSubmit = () => {
    console.log("I got clicked");
  };

  return (
    <div className="sign-in-page-whole-container">
      <div className="sign-in-form">
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
            <button type="submit">Get OTP</button>
          </form>
        </FormProvider>
      </div>
      <Outlet />
    </div>
  );
}
