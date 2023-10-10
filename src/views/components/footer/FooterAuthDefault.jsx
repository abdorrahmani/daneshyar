/*eslint-disable*/
import React from "react";
export default function Footer() {
  return (
    <div className="z-[5] mx-auto bg-gray-900 flex w-full max-w-screen-sm flex-col items-center justify-between px-[20px] p-10 lg:max-w-[100%] lg:flex-row  xl:w-full xl:pb-6">
      <p className="mb-6 text-center text-sm text-gray-200 md:text-base lg:mb-0" dir="ltr">
        ©{1900 + new Date().getYear()} DaneshYar. All Rights Reserved.
      </p>
      <ul className="flex flex-wrap items-center sm:flex-nowrap">
        <li className="ml-12">
          <a
            target="blank"
            href="/"
            className="text-sm text-gray-600 hover:text-gray-600 md:text-base lg:text-white lg:hover:text-white"
          >
            پشتیبانی
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="/"
            className="text-sm text-gray-600 hover:text-gray-600 md:text-base lg:text-white lg:hover:text-white"
          >
            صفحه اصلی
          </a>
        </li>
      </ul>
    </div>
  );
}
