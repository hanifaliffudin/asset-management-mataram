"use client";

import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";

const HomePage = () => {
  const dataLine = {
    labels: [
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        label: "Trend Jumlah Pembelian",
        data: [65, 59, 80, 81, 56, 60, 50, 39, 45, 60, 58, 70],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const dataDoughnut = {
    labels: ["Sepeda Motor", "Station Wagon", "Kendaraan Dinas Bermotor"],
    datasets: [
      {
        label: "Jumlah Kendaraan",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const pluginsDoughnut = [
    {
      id: "dataDoughnut",
      beforeDraw: function (chart: any) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 120).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const dummyDataTable = [
    {
      merk: "Kapal Motor Penumpang",
      kondisi: "Rusak Berat",
      jumlah: 1,
      harga: 1644,
    },
    {
      merk: "Hino 300/Dutro 130 MD / Dutro 130 MD",
      kondisi: "Rusak Berat",
      jumlah: 2,
      harga: 708,
    },
    {
      merk: "Mitsubishi / Pajero",
      kondisi: "Rusak Berat",
      jumlah: 1,
      harga: 541,
    },
    {
      merk: "Microbus / FE71BCMT",
      kondisi: "Rusak Berat",
      jumlah: 1,
      harga: 522,
    },
    {
      merk: "Microbus / FE71BCMT",
      kondisi: "Rusak Berat",
      jumlah: 1,
      harga: 522,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 border p-2 rounded-lg">
          <div className="flex gap-2 h-32">
            <img
              className="w-auto h-full"
              src="https://bkpsdm.mataramkota.go.id/assets/img/kota_mataram.png"
              alt="logo"
            />
            <div className="grid grid-cols-3 gap-2 text-nowrap">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Jumlah Total Kendaraan</h3>
                <div className="font-bold text-3xl flex justify-center items-center h-full">
                  1,531
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Jumlah Kendaraan Rusak</h3>
                <div className="font-bold text-3xl flex justify-center items-center h-full">
                  310
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Total Nilai dalam Jutaan Rupiah</h3>
                <div className="font-bold text-3xl flex justify-center items-center h-full">
                  124,560
                </div>
              </div>
            </div>
          </div>
          <Line data={dataLine} />
        </div>

        <div className="col-span-1 border p-2 rounded-lg">
          <h2 className="font-bold text-lg mb-8">
            Jumlah Kendaraan per Tipe Kendaraan
          </h2>
          <Doughnut data={dataDoughnut} plugins={pluginsDoughnut} />
        </div>

        <div className="relative overflow-x-auto col-span-2 border p-2 rounded-lg">
          <h2 className="font-bold text-lg mb-2">
            Kendaraan Dalam Kondisi Rusak dengan Harga diatas 300 Juta
          </h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Merk
                </th>
                <th scope="col" className="px-6 py-3">
                  Kondisi
                </th>
                <th scope="col" className="px-6 py-3">
                  Jumlah
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga Dalam Juta
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyDataTable.map((data) => (
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.merk}
                  </th>
                  <td className="px-6 py-4">{data.kondisi}</td>
                  <td className="px-6 py-4">{data.jumlah}</td>
                  <td className="px-6 py-4">{data.harga}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
