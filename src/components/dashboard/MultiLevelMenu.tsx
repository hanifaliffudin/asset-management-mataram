"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface SubMenu {
  title: string;
  url: string;
}

interface MultiLevelMenuProps {
  pathname: string;
  icon: any;
  title: string;
  listSubMenu: SubMenu[];
  baseUrl: string;
}

const MultiLevelMenu = ({
  pathname,
  icon,
  title,
  listSubMenu,
  baseUrl,
}: MultiLevelMenuProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    pathname.includes(baseUrl) ? setOpen(true) : setOpen(false);
  }, [pathname]);

  return (
    <li>
      <div
        className="flex p-2 justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-4 items-center">
          {icon}
          {title}
        </div>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
            ></path>
          </svg>
        )}
      </div>
      {open && (
        <ul className="flex flex-col">
          {listSubMenu.map((subMenu, index) => (
            <li
              className={`ml-8 p-2 ${
                pathname == subMenu.url
                  ? "bg-blue-500 rounded-lg text-white"
                  : ""
              }`}
              key={index}
            >
              <Link href={subMenu.url}>{subMenu.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MultiLevelMenu;
