/* eslint-disable @typescript-eslint/no-explicit-any */
import environmentData from "../environment-constants";
import {
  OTPParams,
  SignInFormData,
  SignUpFormData,
} from "../interfaces/global.interface";

class ActivityTrackerAPI {
  endpoints: { [key: string]: string };
  url: string;

  constructor() {
    this.endpoints = {
      get_otp: "/get_login_session",
      user_sign_up: "/sign_up",
      sign_in: "/sign_in",
    };
    this.url = `${environmentData.url}`;
  }

  getOTPResponse = async (bodyParams: OTPParams): Promise<any> => {
    return new Promise((res, rej) => {
      fetch(`${this.url}${this.endpoints.get_otp}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyParams),
      })
        .then(async (response) => {
          if (!response?.ok) {
            const errorData = await response.json();
            rej(new Error(errorData?.message || "Request to get otp failed"));
          }
          const data = await response.json();
          res(data);
        })
        .catch((e) => {
          rej(new Error(e.message || "Network error on get otp call"));
        });
    });
  };

  loginUser = (bodyParams: SignInFormData): Promise<any> => {
    const token = sessionStorage.getItem("token");
    return new Promise((res, rej) => {
      fetch(`${this.url}${this.endpoints.sign_in}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(bodyParams),
      })
        .then(async (response) => {
          if (!response?.ok) {
            const errorData = await response.json();
            rej(new Error(errorData?.message || "Request to Sign In Failed"));
          }
          const data = await response.json();
          res(data);
        })
        .catch((e) => {
          rej(new Error(e.message || "Newtork error on Sign In call"));
        });
    });
  };

  signUpUser = async (bodyParams: SignUpFormData): Promise<any> => {
    return new Promise((res, rej) => {
      fetch(`${this.url}${this.endpoints.user_sign_up}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyParams),
      })
        .then(async (response) => {
          if (!response?.ok) {
            const errorData = await response.json();
            rej(new Error(errorData?.message || "Request to get otp failed"));
          }
          const data = await response.json();
          res(data);
        })
        .catch((e) => {
          rej(new Error(e.message || "Network error on get otp call"));
        });
    });
  };
}

export default new ActivityTrackerAPI();
