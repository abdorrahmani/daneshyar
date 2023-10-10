import InputField from "../components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "../components/checkbox";
import Auth from "../layouts/AuthLayout.jsx";
import {useState} from "react";
import {Helmet} from "react-helmet";
import {Link, Navigate} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../Contex/ContextProvider.jsx";


export default function SignIn() {
  const [formData, setFormData , token] = useState({ email: '', password: ''});
  const {setUser,setToken} = useStateContext();
  const [error, setError] = useState('');

  if (token){
    return <Navigate to='/'/>
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      email: formData.email
    };
    axiosClient.post('/login' ,dataToSend,{
      headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,

    }).then((response)=>{

      setToken(response.data.access_token);
      window.location.href = "/";

    }).catch((error) => {
      console.error(error.response.data.message);
    });


  }

  return (
      <Auth>
        <Helmet>
          <title>دانشیار-ورود</title>
        </Helmet>
        <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          {/* Sign in section */}
          <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] mr-20 z-20">
            <h4 className="mb-2 text-4xl font-bold text-navy-700 dark:text-white">
              دانشیار-ورود
            </h4>

            <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
              <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                ورود به حساب کاربری با Google
              </h5>
            </div>
            <div className="mb-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
              <p className="text-base text-gray-600 dark:text-white"> یا </p>
              <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
            </div>
            <form onSubmit={handleSubmit}>

              {/* Email */}
              <InputField
                  variant="auth"
                  extra="mb-3"
                  label="ایمیل*"
                  placeholder="mail@simmmple.com"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  type="email"
              />

              {/* Password */}
              <InputField
                  variant="auth"
                  extra="mb-3"
                  label="رمزعبور*"
                  placeholder="Min. 8 characters"
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
              />
              {/* Checkbox */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center">
                  <Checkbox />
                  <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                    فراموشم نکن!
                  </p>
                </div>
                <a
                    className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                    href=" "
                >
                  رمز عبورم را فراموش کردم؟
                </a>
              </div>
              <button type="submit" className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                ورود به حساب کاربری
              </button>
            </form>

            {error && <p className="text-red-600">{error}</p>}
            <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            آیا حساب کاربری ندارید؟
          </span>
              <Link
                  to="/register"
                  className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                ایجاد حساب
              </Link>
            </div>
          </div>
        </div>

      </Auth>
  );
}
