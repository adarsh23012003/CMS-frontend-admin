import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../Axios/cookieConfig";

function AuthenticLogin({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getCookie("token");
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
