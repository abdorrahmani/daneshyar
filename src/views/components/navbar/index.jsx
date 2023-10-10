import Dropdown from "../dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline
} from "react-icons/io";
import {useStateContext} from "../../Contex/ContextProvider.jsx";
import AxiosClient from "../../axios-client.js";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);
  const {user} = useStateContext();


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

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:text-gray-400 dark:text-white dark:hover:text-white"
            href=" "
          >
            صفحه
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:text-gray-400 dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">

          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  اعلانات
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  خواندن همه
                </p>
              </div>

              <div className="mb-2 aspect-video w-full rounded-lg">
                <p className="text-center mt-20 text-black dark:text-white">هیچ اعلانی وجود ندارد</p>
              </div>


            </div>
          }
          classNames={"py-2 top-4 -right-[230px] md:-right-[440px] w-max"}
        />

        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src=""
              alt=""
            />
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
                    onClick={handleLogout}
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  خروج از حساب کاربری
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 max-sm:!right-[-200px] -right-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
