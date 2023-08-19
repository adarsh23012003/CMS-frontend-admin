import React, { useEffect } from "react";
import { instance, setFormToken, setToken } from "../../Axios/axiosConfig";
import { useState } from "react";
import { setCookieComponent } from "../../Axios/cookieConfig";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  // const cookies = new Cookies();
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captcha: "",
  });
  const [captcha, setCaptcha] = useState("");

  function handelSubmit() {
    instance
      .post("/login", formData)
      .then(function (response) {
        const jwtToken = response.data.token;
        // console.log(response.data.token);
        if (jwtToken) {
          setFormData({
            email: "",
            password: "",
          });
          navigate("/");
        }
        // setCookie("token", jwtToken, { expires });
        setCookie("token", jwtToken, { maxAge: 3600 });
        setToken(jwtToken);
        setFormToken(jwtToken);
        // setCookieComponent("token", jwtToken, 1 / 24);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    const getCaptchaCode = async () => {
      instance
        .get("/captcha")
        .then(function (response) {
          console.log(response.data.captcha);
          setCaptcha(response.data.captcha);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getCaptchaCode();
  }, []);

  return (
    <div>
      <section>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <h1 className='flex items-center mb-6 text-2xl font-semibold text-gray-900'>
            Login
          </h1>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1
                title='Hello, world!'
                className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '
              >
                Sign in to your account
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                onSubmit={(e) => {
                  e.preventDefault();
                  if (formData.email || formData.password) {
                    handelSubmit();
                  }
                }}
              >
                {/* ********* Email ************** */}
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    onChange={(e) => {
                      formData.email = e.target.value;
                    }}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                  />
                </div>
                {/* ********* Password ************** */}
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    onChange={(e) => {
                      formData.password = e.target.value;
                    }}
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                  />
                </div>
                {/* ********* Captcha ************** */}
                <div className='grid grid-cols-1 xm:grid-cols-2 gap-5'>
                  <div className='border p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 text-gray-900 sm:text-sm text-center rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full'>
                    {captcha}
                  </div>
                  <div className='w-full'>
                    <input
                      onChange={(e) => {
                        formData.captcha = e.target.value.trim();
                      }}
                      type='text'
                      required=''
                      placeholder='Enter captcha'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                  </div>
                </div>

                <button className='w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                  Login
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don’t have an account yet?
                  <span
                    onClick={() => {
                      navigate("/register");
                    }}
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500 text-red-400 cursor-pointer'
                  >
                    Register
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
