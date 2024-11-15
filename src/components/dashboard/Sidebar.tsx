import Image from "next/image";
import Link from "next/link";
// import MultiLevelMenu from "@/components/dashboard/MultiLevelMenu";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white">
      <div className="h-full overflow-y-auto border-r">
        <div className="flex justify-center items-center border-b h-16">
          <img
            className="w-auto max-h-14"
            src="https://bkpsdm.mataramkota.go.id/assets/img/kota_mataram.png"
            alt="logo"
          />
        </div>
        <ul className="p-3 flex flex-col gap-y-3">
          <li>
            <Link href="/home" className="flex gap-4 items-center">
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
          {/* <MultiLevelMenu
            icon="/assets/manajemen-user.svg"
            listSubMenu={[
              { title: "Daftar Pengguna", url: "/user-management/users" },
              { title: "Reset Akun Pengguna", url: "/reset-password" },
            ]}
            title="Manajemen Pengguna"
          /> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
