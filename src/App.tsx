// import { useState } from 'react'
import "./App.css";
import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import BouncyLogo from "./pages/BouncyLogo";
import SignUpPage from "./pages/SignUpPage";
import OtpPage from "./pages/OtpPage";
import contexts from "./context/common_context";
import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = useState({ email: "", token: "" });
  return (
    <div>
      <BrowserRouter>
        <contexts.UserContext.Provider
          value={{...user, setUser}}
        >
          <Routes>
            <Route path="/" element={<SignInPage />}>
              <Route index element={<BouncyLogo />} />
            </Route>
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="otp-page" element={<OtpPage />} />
            <Route path = "home" element={<HomePage/>}/>
          </Routes>
        </contexts.UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
