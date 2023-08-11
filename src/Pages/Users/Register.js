import React from "react";
import { useState } from "react";
import { instance } from "../../Axios/axiosConfig";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    gender: "",
    password: "",
  });
  function handelSubmit() {
    instance
      .post("/register", formData)
      .then(function (response) {
        // console.log(response.data);
        if (response.data) {
          setFormData({
            name: "",
            email: "",
            mobileNumber: "",
            gender: "",
            password: "",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <section className='bg-gray-50 '>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <h1 className='flex items-center mb-6 text-2xl font-semibold text-gray-900'>
            Register
          </h1>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                Create and account
              </h1>
              <for className='space-y-4 md:space-y-6'>
                {/* **name** */}
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Enter Your Name'
                    required=''
                    onChange={(e) => {
                      formData.name = e.target.value;
                    }}
                  />
                </div>
                {/* ***email**** */}
                <div>
                  <label
                    htmlFor='Email'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Your Email
                  </label>
                  <input
                    type='email'
                    onChange={(e) => {
                      formData.email = e.target.value;
                    }}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                  />
                </div>
                {/* ****phone number*** */}
                <div>
                  <label
                    htmlFor='phone number'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      formData.mobileNumber = e.target.value;
                    }}
                    placeholder='xxx-xxx-9854'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                  />
                </div>
                {/* **password**** */}
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
                {/* ***gender**** */}
                <div className='flex'>
                  <h1 className='flex items-center mr-4'>Gender</h1>
                  <div className='flex items-center mr-4'>
                    <input
                      id='male'
                      type='radio'
                      value={formData.male}
                      name='gender'
                      onClick={() =>
                        setFormData({ ...formData, gender: "Male" })
                      }
                      className='w-4 h-4 bg-gray-100 border-black   dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                      htmlFor='male'
                      className='ml-2 text-sm font-medium text-black'
                    >
                      Male
                    </label>
                  </div>
                  <div className='flex items-center mr-4'>
                    <input
                      id='female'
                      type='radio'
                      value={formData.female}
                      name='gender'
                      onClick={() =>
                        setFormData({ ...formData, gender: "Female" })
                      }
                      className='w-4 h-4   dark:ring-offset-gray-800  bg-black dark:border-gray-600'
                    />
                    <label
                      htmlFor='female'
                      className='ml-2 text-sm font-medium text-black'
                    >
                      Female
                    </label>
                  </div>
                </div>
                {/* ***submit button** */}
                <button
                  onClick={() => {
                    if (
                      formData.name ||
                      formData.email ||
                      formData.mobileNumber ||
                      formData.password ||
                      formData.gender
                    ) {
                      handelSubmit();
                    }
                  }}
                  className='w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-500'
                >
                  Create an account
                </button>
                <p className='text-sm font-light text-gray-700'>
                  Already have an account?
                  <span
                    onClick={() => navigate("/login")}
                    className='font-medium text-primary-600 hover:underline dark:text-red-500 cursor-pointer'
                  >
                    Login here
                  </span>
                </p>
              </for>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
