import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";

type AsetType = {
  categoryAset: string;
  typeAset: string;
  unitName: string;
  assetName: string;
  assetCode: string;
};

interface AsetBergerakType extends AsetType {
  policeNumber: string;
  brand: string;
  type: string;
  cc: number;
  yearOfAcquisition: number;
  chassisNumber: string;
  engineNumber: string;
  bpkbNumber: string;
  acquisitionPrice: number;
  currentEstimatedPrice: number;
}

interface AsetTakBergerakType extends AsetType {
  pemdaId: string;
  buildingType: string;
  buildingArea: number;
  landArea: number;
  yearOfAcquisition: number;
  acquisitionPrice: number;
  currentEstimatedPrice: number;
  certificateStatus: string;
}

const defaultData: (AsetBergerakType | AsetTakBergerakType)[] = [
  {
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
  },
  {
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
    acquisitionPrice: 300000000,
    currentEstimatedPrice: 720000000,
    certificateStatus: "Sudah",
  },
  {
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
    acquisitionPrice: 300000000,
    currentEstimatedPrice: 720000000,
    certificateStatus: "Belum & tidak sengketa",
  },
  {
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
    acquisitionPrice: 300000000,
    currentEstimatedPrice: 720000000,
    certificateStatus: "Belum Jelas",
  },
];

const columnHelper = createColumnHelper<
  AsetBergerakType | AsetTakBergerakType
>();

const columns = [
  columnHelper.accessor("unitName", {
    header: "Nama Unit",
  }),
  columnHelper.accessor("assetName", {
    header: "Nama Aset",
  }),
  columnHelper.accessor("assetCode", {
    header: "Kode Aset",
  }),
  columnHelper.display({
    id: "actions",
    cell: (props) => {
      console.log(props.row.index);
      return (
        <div className="flex flex-wrap gap-2">
          <Link
            href={"/detail/" + props.row.index}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            View
          </Link>
          <button
            type="button"
            className="focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-400 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Edit
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Delete
          </button>
        </div>
      );
    },
  }),
];

const Table = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th scope="col" className="px-6 py-3" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className="bg-white border-b" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="px-6 py-4 w-0" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default Table;
