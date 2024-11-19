"use client";

import Map from "@/components/map/Map";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const getDetail = async () => {
    setIsLoading(true);
    const response = await fetch("/api/assets?id=" + id);

    if (response.ok) {
      const dataFecth = await response.json();
      setData(dataFecth.data);
    } else {
      alert("Something went wrong!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  if (isLoading) return <div>Loading...</div>;

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
      <h1 className="text-xl mb-4 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        {data.assetCategory}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
        <table className="border-separate [border-spacing:0.5rem] max-h-64">
          <tbody className="text-left">
            <tr>
              <th>Nama Unit</th>
              <td>: {data.unitName}</td>
            </tr>
            <tr>
              <th>Nama Aset</th>
              <td>: {data.assetName}</td>
            </tr>
            <tr>
              <th>Kode Aset</th>
              <td>: {data.assetCode}</td>
            </tr>
            {data.assetCategory == "Aset Bergerak" && (
              <>
                <tr>
                  <th>Nopol</th>
                  {/* @ts-ignore */}
                  <td>: {data.policeNumber}</td>
                </tr>
                <tr>
                  <th>Merk</th>
                  {/* @ts-ignore */}
                  <td>: {data.brand}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  {/* @ts-ignore */}
                  <td>: {data.type}</td>
                </tr>
                <tr>
                  <th>cc</th>
                  {/* @ts-ignore */}
                  <td>: {data.cc}</td>
                </tr>
                <tr>
                  <th>Tahun Perolehan</th>
                  {/* @ts-ignore */}
                  <td>: {data.yearOfAcquisition}</td>
                </tr>
                <tr>
                  <th>No. Rangka</th>
                  {/* @ts-ignore */}
                  <td>: {data.chassisNumber}</td>
                </tr>
                <tr>
                  <th>No. Mesin</th>
                  {/* @ts-ignore */}
                  <td>: {data.engineNumber}</td>
                </tr>
                <tr>
                  <th>No. BPKB</th>
                  {/* @ts-ignore */}
                  <td>: {data.bpkbNumber}</td>
                </tr>
                <tr>
                  <th>Harga Perolehan</th>
                  {/* @ts-ignore */}
                  <td>: {data.acquisitionPrice}</td>
                </tr>
                <tr>
                  <th>Est.Harga saat ini</th>
                  {/* @ts-ignore */}
                  <td>: {data.currentEstimatedPrice}</td>
                </tr>
              </>
            )}
            {data.assetCategory == "Aset Tak Bergerak" && (
              <>
                <tr>
                  <th>ID Pemda</th>
                  {/* @ts-ignore */}
                  <td>: {data.pemdaId}</td>
                </tr>
                <tr>
                  <th>Tipe Bangunan</th>
                  {/* @ts-ignore */}
                  <td>: {data.buildingType}</td>
                </tr>
                <tr>
                  <th>Luas Bangunan</th>
                  {/* @ts-ignore */}
                  <td>: {data.buildingArea}</td>
                </tr>
                <tr>
                  <th>Luas Tanah</th>
                  {/* @ts-ignore */}
                  <td>: {data.landArea}</td>
                </tr>
                <tr>
                  <th>Tahun Perolehan</th>
                  {/* @ts-ignore */}
                  <td>: {data.yearOfAcquisition}</td>
                </tr>
                <tr>
                  <th>Harga Perolehan</th>
                  {/* @ts-ignore */}
                  <td>: {data.acquisitionPrice}</td>
                </tr>
                <tr>
                  <th>Est.Harga saat ini</th>
                  {/* @ts-ignore */}
                  <td>: {data.currentEstimatedPrice}</td>
                </tr>
                <tr>
                  <th>Status Sertifikat</th>
                  {/* @ts-ignore */}
                  <td>: {data.certificateStatus}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>

        <div className="col-span-2 max-h-screen">
          <img
            className={`w-auto object-cover rounded ${
              data.assetCategory == "Aset Bergerak" ? "h-full" : "max-h-56"
            }`}
            src={
              data.assetCategory == "Aset Bergerak"
                ? "/assets/innova.png"
                : "/assets/rumah-dinas.png"
            }
            alt="innova"
          />

          {data.assetCategory == "Aset Tak Bergerak" && (
            <>
              <div className="my-2">Alamat: Jalan Musi I no.5 Maratam</div>

              <Map certificateStatus={data.certificateStatus} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
