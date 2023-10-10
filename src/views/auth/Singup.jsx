import {useState} from "react";
import Auth from "../layouts/AuthLayout.jsx";
import {Helmet} from "react-helmet";
import {FcGoogle} from "react-icons/fc";
import InputField from "../components/fields/InputField.jsx";
import {Link, Navigate} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../Contex/ContextProvider.jsx";



function SingUp() {
    const {setToken ,token} = useStateContext();
    const [error, setError] = useState('');


    if (token){
        return <Navigate to='/'/>
    }

    const [formData, setFormData] = useState({ name: '',student_id:'', tel:'' , email: '', password: '' ,c_password:''});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            name: formData.name
        };
        axiosClient.post(`/register`, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        }).then((response) => {
                setToken(response.data.access_token);
                window.location.href = "/";

                console.log(response.data.message);
            })
            .catch((error) => {
                setError(error.response.data.message)
            });

    }

    return (
        <Auth>
            <Helmet>
                <title>دانشیار-ایجاد حساب کاربری</title>
            </Helmet>
            <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                {/* Sign in section */}
                <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] mr-20 z-20">
                    <h4 className="mb-2 text-4xl font-bold text-navy-700 dark:text-white">
                        دانشیار-ایجاد حساب کاربری
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

                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="نام*"
                            placeholder="نام و نام خانوادگی"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            type="text"
                        />

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

                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="شماره دانشجویی*"
                            placeholder="شماره دانشجویی"
                            id="student_id"
                            name="student_id"
                            onChange={handleChange}
                            type="text"
                        />

                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="شماره تلفن*"
                            placeholder="09**"
                            id="tel"
                            name="tel"
                            onChange={handleChange}
                            type="tel"
                        />

                        {/* Password */}
                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="رمزعبور*"
                            placeholder="بیشتر از 8 کاراکتر"
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                        />

                        {/* Password */}
                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="رمزعبور*"
                            placeholder="رمزعبور را دوباره وارد کنید"
                            id="c_password"
                            name="c_password"
                            type="password"
                            onChange={handleChange}
                        />

                        <button type="submit" className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            ایجاد حساب کاربری
                        </button>
                    </form>

                    {error && <p className="text-red-600">{error}</p>}

                    <div className="mt-4">
                        <Link to="/login" className="text-sm font-medium text-navy-700 dark:text-gray-600">
                            آیا حساب کاربری دارید؟
                        </Link>
                    </div>
                </div>
            </div>

        </Auth>
    )

}
export default SingUp