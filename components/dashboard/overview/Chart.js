import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: true,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          display: true,
        },
      },
    ],
  },
  title: {
    position: "top",
    display: true,
    text: "Leistungsbericht",
    font: 26,
  },
  ticks:{
    font: 26
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 26,
        },
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Gesamtaufrufe",
      data: [56, 45, 48, 52, 40, 44, 28],
      borderColor: "#FBB900",
      fill: false,
    },
    {
      label: "Profil Aufrufe",
      data: [26, 45, 38, 22, 58, 29, 37],
      borderColor: "#555555",
      fill: false,
      hidden: true,
    },
    {
      label: "Eingehende Anrufe",
      data: [32, 35, 49, 53, 38, 29, 37],
      borderColor: "#FF00DD",
      fill: false,
      hidden: true,
    },
    {
      label: "Verkaufte Fahrzeuge",
      data: [42, 65, 39, 23, 48, 39, 47],
      borderColor: "#00CBFF",
      fill: false,
    },
    {
      label: "Eingehene Anfragen",
      data: [22, 35, 59, 33, 58, 29, 47],
      borderColor: "#0067B8",
      fill: false,
    },
    {
      label: "Verifizierte Verkäufe",
      data: [54, 33, 42, 54, 57, 49, 47],
      borderColor: "#00CE00",
      fill: false,
      hidden: true,
    },
  ],
};

export default function Chart() {
  return <Line options={options} data={data} />;
}
