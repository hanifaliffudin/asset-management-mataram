const Navbar = () => {
  return (
    <nav className="bg-white fixed sm:w-[calc(100%_-_16rem)] h-16 z-10 top-0 start-0 w-full sm:start-64 border-b border-gray-200">
      <div className="flex justify-end items-center pr-4 gap-x-4 h-16">
        <h2>Hanif Aliffudin</h2>

        <button type="button">
          {/* <MdMoreVert /> */}
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
          {/* {openMore && (
            <div className="absolute bg-white top-10 right-4 shadow-xl p-4 w-fit text-nowrap flex flex-col gap-y-2 text-sm">
              <Link href="/" className="flex items-center gap-x-2">
                <MdEdit />
                Ubah password
              </Link>
              <Link href="/" className="flex items-center gap-x-2">
                <MdExitToApp />
                Keluar
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
