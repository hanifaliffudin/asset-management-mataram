"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MultiLevelMenu from "@/components/dashboard/MultiLevelMenu";
import { useEffect } from "react";

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }: any) => {
  const pathname = usePathname();

  useEffect(() => {
    setSidebarIsOpen(false);
  }, [pathname]);

  return (
    <aside
      className={`fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full ${
        sidebarIsOpen ? "translate-x-0" : ""
      } lg:translate-x-0 bg-white`}
    >
      <div className="h-full overflow-y-auto border-r">
        <div className="flex justify-center items-center border-b h-16">
          <img
            className="w-auto max-h-14"
            src="https://bkpsdm.mataramkota.go.id/assets/img/kota_mataram.png"
            alt="logo"
          />
        </div>
        <ul className="p-2 flex flex-col gap-y-2">
          <li>
            <Link
              href="/home"
              className={`flex gap-4 items-center p-2 ${
                pathname === "/home" ? "bg-blue-500 rounded-lg text-white" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <MultiLevelMenu
            pathname={pathname}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792l-6.223-16.89l1.877-.692l6.223 16.89z"
                ></path>
              </svg>
            }
            listSubMenu={[
              { title: "Aset Bergerak", url: "/asset-management/bergerak" },
              {
                title: "Aset Tak Bergerak",
                url: "/asset-management/tak-bergerak",
              },
            ]}
            title="Asset Management"
            baseUrl="asset-management"
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
