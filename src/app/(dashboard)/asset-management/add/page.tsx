"use client";

import { bergerakOptions, takBergerakOptions } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const AddPage = () => {
  const router = useRouter();
  const [formObject, setFormObject] = useState<any>({
    assetCategory: "",
    assetType: "",
  });

  const handleSaveData = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formObject }),
    });

    if (response.ok) {
      alert("Data saved successfully!");
      router.push("/asset-management");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-x-1 text-red-500 mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1 1 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2"
          ></path>
        </svg>
        Back
      </button>

      <h1 className="text-xl mb-4 font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Add New Asset
      </h1>

      <form
        className="flex flex-col gap-3 mb-4 sm:w-1/3"
        method="post"
        onSubmit={(e) => handleSaveData(e)}
      >
        <div>
          <label
            htmlFor="assetCategory"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kategori Aset
          </label>
          <select
            id="assetCategory"
            value={formObject.assetCategory}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setFormObject({ ...formObject, assetCategory: e.target.value })
            }
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="Aset Bergerak">Aset Bergerak</option>
            <option value="Aset Tak Bergerak">Aset Tak Bergerak</option>
          </select>
        </div>

        {formObject.assetCategory && (
          <div>
            <label
              htmlFor="assetType"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Jenis Aset
            </label>
            <select
              id="assetType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formObject.assetType}
              onChange={(e) =>
                setFormObject({ ...formObject, assetType: e.target.value })
              }
            >
              <option value="" disabled>
                Select...
              </option>
              {formObject.assetCategory == "Aset Bergerak" ? (
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

        {formObject.assetType && (
          <>
            <div>
              <label
                htmlFor="unitName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Unit
              </label>
              <input
                type="text"
                id="unitName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) =>
                  setFormObject({ ...formObject, unitName: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="assetName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Aset
              </label>
              <input
                type="text"
                id="assetName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) =>
                  setFormObject({ ...formObject, assetName: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="assetCode"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Kode Aset
              </label>
              <input
                type="text"
                id="assetCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) =>
                  setFormObject({ ...formObject, assetCode: e.target.value })
                }
              />
            </div>

            {formObject.assetType === "Kendaraan Bermotor" ? "" : ""}

            <div>
              <label
                htmlFor={
                  formObject.assetType === "Kendaraan Bermotor"
                    ? "policeNumber"
                    : "pemdaId"
                }
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {formObject.assetType === "Kendaraan Bermotor"
                  ? "Nomor Polisi"
                  : "ID Pemda"}
              </label>
              <input
                type="text"
                id={
                  formObject.assetType === "Kendaraan Bermotor"
                    ? "policeNumber"
                    : "pemdaId"
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) => {
                  formObject.assetType === "Kendaraan Bermotor"
                    ? setFormObject({
                        ...formObject,
                        policeNumber: e.target.value,
                      })
                    : setFormObject({ ...formObject, pemdaId: e.target.value });
                }}
              />
            </div>

            {formObject.assetCategory == "Aset Bergerak" && (
              <>
                <div>
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Merk
                  </label>
                  <input
                    type="text"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({ ...formObject, brand: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    id="type"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({ ...formObject, type: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="cc"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    cc
                  </label>
                  <input
                    type="text"
                    id="cc"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({ ...formObject, cc: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="chassisNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No. Rangka
                  </label>
                  <input
                    type="text"
                    id="chassisNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({
                        ...formObject,
                        chassisNumber: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="engineNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No. Mesin
                  </label>
                  <input
                    type="text"
                    id="engineNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({
                        ...formObject,
                        engineNumber: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="bpkbNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No. BPKB
                  </label>
                  <input
                    type="text"
                    id="bpkbNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({
                        ...formObject,
                        bpkbNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </>
            )}

            {formObject.assetCategory == "Aset Tak Bergerak" && (
              <>
                <div>
                  <label
                    htmlFor="buildingType"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Tipe Bangunan
                  </label>
                  <input
                    type="text"
                    id="buildingType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({
                        ...formObject,
                        buildingType: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="buildingArea"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Luas Bangunan
                  </label>
                  <input
                    type="text"
                    id="buildingArea"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({
                        ...formObject,
                        buildingArea: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="landArea"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Luas Tanah
                  </label>
                  <input
                    type="text"
                    id="landArea"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({
                        ...formObject,
                        landArea: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="certificateStatus"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Status Sertifikat
                  </label>
                  <input
                    type="text"
                    id="certificateStatus"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(e) =>
                      setFormObject({
                        ...formObject,
                        certificateStatus: e.target.value,
                      })
                    }
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="yearOfAcquisition"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tahun Perolehan
              </label>
              <input
                type="text"
                id="yearOfAcquisition"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) =>
                  setFormObject({
                    ...formObject,
                    yearOfAcquisition: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label
                htmlFor="acquisitionPrice"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Harga Perolehan
              </label>
              <CurrencyInput
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="acquisitionPrice"
                name="acquisitionPrice"
                prefix="Rp"
                groupSeparator="."
                decimalSeparator=","
                onValueChange={(value) => {
                  setFormObject({
                    ...formObject,
                    acquisitionPrice: value,
                  });
                }}
              />
            </div>

            <div>
              <label
                htmlFor="currentEstimatedPrice"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Est.Harga saat ini
              </label>
              <CurrencyInput
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="acquisitionPrice"
                name="acquisitionPrice"
                prefix="Rp"
                groupSeparator="."
                decimalSeparator=","
                onValueChange={(value) => {
                  setFormObject({
                    ...formObject,
                    currentEstimatedPrice: value,
                  });
                }}
              />
            </div>

            <button
              type="submit"
              className="text-white h-[42px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </>
        )}

        <button
          type="button"
          className="text-red-500 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddPage;
