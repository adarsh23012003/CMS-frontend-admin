import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookieComponent } from "../../Axios/cookieConfig";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    const token = getCookieComponent("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);
  const handleLogout = () => {
    console.log("token delete");
    const deleteToken = deleteCookie("token");
    if (deleteToken) {
      window.location.reload();
      setIsLogin(false);
    }
  };

  return (
    <>
      <div>
        <nav className='p-3 bg-slate-200'>
          <ul className='flex justify-center items-center gap-5 font-semibold'>
            <li
              className='cursor-pointer'
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className='cursor-pointer'
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </li>
            <li
              className='cursor-pointer'
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </li>
            <li
              onClick={() => {
                if (isLogin) {
                  handleLogout();
                } else {
                  handleLogin();
                }
              }}
              className='px-3 py-1.5 rounded-md bg-green-300 hover:bg-green-400 hover:text-white cursor-pointer'
            >
              {isLogin ? "Logout" : "Login"}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
