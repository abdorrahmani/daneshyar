import {useState} from "react";
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom';
import Dropdown from "./dropdown/index.jsx";
import AxiosClient from "../axios-client.js";
import {useStateContext} from "../Contex/ContextProvider.jsx";
const navigation = [
    { name: 'صفحه اصلی', to: '/' },
    { name: 'درباره ما', to: '/about' },
]
 function Navbar(){
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
     const {token,user} = useStateContext();
    const handleLogout = async () => {
             try {
                 // Make an API request to log the user out
                 await AxiosClient.post(`/logout`);

                 // Remove the access token from local storage
                 localStorage.removeItem('ACCESS_TOKEN');

                 // Redirect to the login page or update the UI
                 window.location.href = "/";
             } catch (error) {
                 console.error('Logout failed:', error);
             }
    }

    return(
        <>
            <nav className="flex items-center justify-between p-2 lg:px-8 bg-navy-900" aria-label="Global" dir="ltr">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5 flex items-center">
                        <img
                                className="h-20 w-20"
                                src="logo"
                                alt=""
                            />
                        <div className="text-xl font-bold logo-font  ">دانشیار</div>

                    </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-100">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                        {
                            token ?
                                (
                                    <>
                                        <Dropdown
                                            button={
                                                <span
                                                    className="h-10 w-10 p-2 text-xs cursor-pointer rounded-full bg-orange-500"
                                                    alt={user.email}
                                                >پروفایل</span>
                                            }
                                            children={
                                                <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                                                    <div className="p-4">
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                                {user.name}
                                                            </p>{" "}
                                                        </div>
                                                    </div>
                                                    <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

                                                    <div className="flex flex-col p-4">
                                                        <a
                                                            href="/dashboard"
                                                            className="text-sm text-gray-800 mb-5 hover:text-gray-400 dark:text-white hover:dark:text-white"
                                                        >
                                                            پنل کاربری
                                                        </a>
                                                        {user.type == 'admin' ?
                                                            ( <a
                                                                href="/admin/dashboard"
                                                                className="text-sm text-gray-800 mb-3 hover:text-gray-400 dark:text-white hover:dark:text-white"
                                                            >
                                                                ادمین پنل
                                                            </a>):''

                                                        }


                                                        <a
                                                            onClick={handleLogout}
                                                            className="mt-3 text-sm cursor-pointer font-medium text-red-500 hover:text-red-500"
                                                        >
                                                            خروج از حساب کاربری
                                                        </a>
                                                    </div>
                                                </div>
                                            }
                                            classNames={"py-2 top-8 right-[50px] w-max"}
                                        />

                                    </>

                                ):(


                                    <>
                                        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-100 ">
                                            ورود
                                        </Link>
                                    </>

                                )
                        }

                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5 flex items-center">
                                <img
                                    className="h-20 w-20"
                                    src="logo"
                                    alt=""
                                />
                                <div className="text-xl font-bold logo-font  ">دانشیار</div>

                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 space-x-2 py-6 grid grid-cols-1 text-right">
                                    {navigation.map((item) => (
                                        <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 text-right">
                                    {
                                        token ?
                                            (
                                                <>
                                                    <Dropdown
                                                        button={
                                                            <span
                                                                className="h-10 w-10 p-2 text-xs cursor-pointer rounded-full bg-orange-500"
                                                                alt={user.email}
                                                            >پروفایل</span>
                                                        }
                                                        children={
                                                            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                                                                <div className="p-4">
                                                                    <div className="flex items-center gap-2">
                                                                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                                            {user.name}
                                                                        </p>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

                                                                <div className="flex flex-col p-4">
                                                                    <a
                                                                        href="/dashboard"
                                                                        className="text-sm text-gray-800 mb-5 hover:text-gray-400 dark:text-white hover:dark:text-white"
                                                                    >
                                                                        پنل کاربری
                                                                    </a>
                                                                    {user.type == 'admin' ?
                                                                        ( <a
                                                                            href="/admin/dashboard"
                                                                            className="text-sm text-gray-800 mb-3 hover:text-gray-400 dark:text-white hover:dark:text-white"
                                                                        >
                                                                            ادمین پنل
                                                                        </a>):''

                                                                    }


                                                                    <a
                                                                        onClick={handleLogout}
                                                                        className="mt-3 text-sm cursor-pointer font-medium text-red-500 hover:text-red-500"
                                                                    >
                                                                        خروج از حساب کاربری
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        }
                                                        classNames={"py-2 top-8 max-sm:!right-[50px] w-max"}
                                                    />

                                                </>

                                            ):(


                                                <>
                                                    <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 ">
                                                        ورود
                                                    </Link>
                                                </>

                                            )
                                    }

                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>


        </>
    )
}
export default Navbar