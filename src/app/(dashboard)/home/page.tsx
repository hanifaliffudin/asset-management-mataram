"use client";

import Table from "@/components/dashboard/Table";
import { useState } from "react";

const HomePage = () => {
  const bergerakOptions = [
    { label: "Kendaraan Bermotor", value: "bermotor" },
    { label: "Kendaraan Tak Bermotor", value: "tak bermotor" },
  ];

  const takBergerakOptions = [
    { label: "Rumah Dinas", value: "rumah dinas" },
    { label: "Tanah", value: "tanah" },
    { label: "Gedung", value: "gedung" },
  ];

  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");

  const resetForm = () => {
    setCategory("");
    setType("");
    setId("");
  };

  console.log(category + ", ", type + ", ", id);

  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Add New
        </button>
      </div>

      <form
        className="flex gap-4 items-end mb-4"
        method="get"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kategori Aset
          </label>
          <select
            id="category"
            value={category}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="bergerak">Aset Bergerak</option>
            <option value="tak bergerak">Aset Tak Bergerak</option>
          </select>
        </div>

        {category && (
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
              {category == "bergerak" ? (
                <>
                  {bergerakOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </>
              ) : (
                <>
                  {takBergerakOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
        )}

        {type && (
          <div>
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your id
            </label>
            <input
              type="text"
              id="id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        )}

        {id && (
          <button
            type="submit"
            className="text-white h-[42px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Search
          </button>
        )}

        {category && type && id && (
          <button
            type="button"
            className="text-red-500 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={() => resetForm()}
          >
            Reset
          </button>
        )}
      </form>

      <Table />
    </>
  );
};

export default HomePage;
