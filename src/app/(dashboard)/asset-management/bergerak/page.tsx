"use client";

import Table from "@/components/dashboard/Table";
import { bergerakOptions } from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const BergerakPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [id, setId] = useState("");

  const getListAssets = async () => {
    setIsLoading(true);

    const response = await fetch(
      "/api/assets" +
        `?assetCategory=Aset Bergerak${type ? "&assetType=" + type : ""}${
          id ? "&id=" + id : ""
        }`
    );

    if (response.ok) {
      const data = await response.json();
      setData(data.data);
    } else {
      alert("Something went wrong!");
    }

    setIsLoading(false);
  };

  const resetForm = () => {
    setType("");
    setId("");
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    getListAssets();
  };

  useEffect(() => {
    getListAssets();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Aset Bergerak
        </h1>
        <Link
          href="/asset-management/add"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Add New
        </Link>
      </div>

      <form
        className="flex gap-4 items-end mb-4"
        method="get"
        onSubmit={(e) => handleSearch(e)}
      >
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Jenis Aset
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="" disabled>
              Select...
            </option>
            {bergerakOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="id"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {type == "Kendaraan Bermotor" ? "Nomor Polisi" : "ID Pemda"}
          </label>
          <input
            type="text"
            id="id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white h-[42px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Search
        </button>

        {type && id && (
          <button
            type="button"
            className="text-red-500 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={() => resetForm()}
          >
            Reset
          </button>
        )}
      </form>

      <Table isLoading={isLoading} data={data} />
    </div>
  );
};

export default BergerakPage;
