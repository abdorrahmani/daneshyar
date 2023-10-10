/* eslint-disable */
import { HiX } from "react-icons/hi";

const Sidebar = ({ open, onClose }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>
      <div className="flex justify-center">
        <img src="logo" className="h-14 w-24" alt=""/>
      </div>

      <div className={`mx-[56px] mt-[10px] flex items-center`}>

        <div className="mt-1 ml-1 h-2.5 font-poppins text-6xl logo-font font-bold uppercase">
          دانشیار
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        {

          document.URL.includes("admin") ? (
              <>
                <a href="/admin/dashboard">
                  <div className="relative mb-3 flex hover:cursor-pointer">
                    <li className="my-[3px] flex cursor-pointer items-center px-8">
                    <span
                        className="font-bold text-brand-500 dark:text-white">
                        <svg stroke="currentColor" fill="currentColor"
                             strokeWidth="0" viewBox="0 0 24 24"
                             className="h-6 w-6" height="1em"
                             width="1em"
                             xmlns="http://www.w3.org/2000/svg"><path
                            fill="none" d="M0 0h24v24H0z">

                        </path><path
                            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                    </span><p
                        className="leading-1 ml-4 flex font-bold text-navy-700 dark:text-white">داشبورد</p>
                    </li>
                    <div className="absolute right top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400"></div>
                  </div>
                </a>


              </>
              ):(
              <a href="/dashboard">
                <div className="relative mb-3 flex hover:cursor-pointer">
                  <li className="my-[3px] flex cursor-pointer items-center px-8">
                    <span
                        className="font-bold text-brand-500 dark:text-white">
                        <svg stroke="currentColor" fill="currentColor"
                             stroke-width="0" viewBox="0 0 24 24"
                             className="h-6 w-6" height="1em"
                             width="1em"
                             xmlns="http://www.w3.org/2000/svg"><path
                            fill="none" d="M0 0h24v24H0z">

                        </path><path
                            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                    </span><p
                      className="leading-1 ml-4 flex font-bold text-navy-700 dark:text-white">داشبورد</p>
                  </li>
                  <div className="absolute right top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400"></div>
                </div>
              </a>
          )

        }

      </ul>


      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
