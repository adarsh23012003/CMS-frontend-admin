import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookieComponent } from "../Axios/cookieConfig";

function AuthenticLogin({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getCookieComponent("token");
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <>
      <div>
        <Component />
      </div>
    </>
  );
}

export default AuthenticLogin;
