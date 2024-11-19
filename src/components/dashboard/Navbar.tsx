"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = ({ sidebarIsOpen, setSidebarIsOpen }: any) => {
  const [openMore, setOpenMore] = useState(false);

  return (
    <nav className="bg-white fixed lg:w-[calc(100%_-_16rem)] h-16 z-10 top-0 start-0 w-full lg:start-64 border-b border-gray-200">
      <div className="flex justify-end max-lg:justify-between items-center px-4 h-16">
        <button
          className="lg:hidden"
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
            ></path>
          </svg>
        </button>
        <div className="flex items-center gap-x-4">
          <h2>Hanif Aliffudin</h2>

          <button type="button" onClick={() => setOpenMore(!openMore)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
              ></path>
            </svg>
          </button>
          <div className="relative">
            {openMore && (
              <div className="absolute bg-white top-10 right-4 shadow-xl p-4 w-fit text-nowrap flex flex-col gap-y-2 text-sm">
                <Link href="/" className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 21q-.825 0-1.412-.587T3 19v-4h2v4h14V5H5v4H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5z"
                    ></path>
                  </svg>
                  Keluar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
