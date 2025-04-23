import { useState } from "react";
import "./App.css";
import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import BouncyLogo from "./pages/BouncyLogo";
import SignUpPage from "./pages/SignUpPage";
import OtpPage from "./pages/OtpPage";
import contexts from "./context/common_context";
import HomePage from "./pages/HomePage";
import StreakTracker from "./pages/StreakTracker";
import AppLayout from "./components/AppLayout";
import NoMatchContent from "./pages/NoMatchContent";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState({ email: "", token: "" });
  const [isSessionActive, setIsSessionActive] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <contexts.SessionActiveContext.Provider
          value={{ isSessionActive, setIsSessionActive }}
        >
          <contexts.UserContext.Provider value={{ ...user, setUser }}>
            <Routes>
              <Route path="/" element={<SignInPage />}>
                <Route index element={<BouncyLogo />} />
              </Route>
              <Route path="sign-up" element={<SignUpPage />} />
              <Route path="otp-page" element={<OtpPage />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                  <Route path="home" element={<HomePage />} />
                  <Route path="streak-tracker" element={<StreakTracker />} />
                </Route>
              </Route>
              <Route path="*" element={<NoMatchContent />} />
            </Routes>
          </contexts.UserContext.Provider>
        </contexts.SessionActiveContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
