"use client";

import { useRouter } from "next/navigation";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const router = useRouter();

  const dataAsetBergerak = {
    categoryAset: "Aset Bergerak",
    typeAset: "Kendaraan Bermotor",
    unitName: "Satpol PP",
    assetName: "Station Wagon",
    assetCode: "1234567",
    // --------------------
    policeNumber: "89012345",
    brand: "Toyota Kijang",
    type: "Innova G",
    cc: 2000,
    yearOfAcquisition: 2014,
    chassisNumber: "MHFXW4268520",
    engineNumber: "ITR6158965",
    bpkbNumber: "6747426",
    acquisitionPrice: 200000000,
    currentEstimatedPrice: 120000000,
  };

  const dataAsetTakBegerak = {
    categoryAset: "Aset Tak Bergerak",
    typeAset: "Rumah Dinas",
    unitName: "Sekretariat DPRD",
    assetName: "Rumah Dinas",
    assetCode: "1234567",
    // --------------------
    pemdaId: "123456",
    buildingType: "Rumah",
    buildingArea: 350,
    landArea: 2000,
    yearOfAcquisition: 2014,
    acquisitionPrice: "MHFXW4268520",
    currentEstimatedPrice: "ITR6158965",
    certificateStatus: "6747426",
  };

  const data = id == "0" ? dataAsetBergerak : dataAsetTakBegerak;

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
      <div className="grid grid-cols-3">
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
            {id === "0" && (
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
            {id === "1" && (
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
              id == "0" ? "h-full" : "max-h-64"
            }`}
            src={id === "0" ? "/assets/innova.png" : "/assets/rumah-dinas.png"}
            alt="innova"
          />

          {id === "1" && (
            <>
              <div className="my-2">Alamat: Jalan Musi I no.5 Maratam</div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.3867190764981!2d116.09578456836869!3d-8.592577606705804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf29009def0b%3A0xd148af67fb86be61!2sRumah%20Dinas!5e0!3m2!1sid!2sid!4v1731591848814!5m2!1sid!2sid"
                width="425"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
