// script for citation
var citations_chart = null;

var canvasElement = document.getElementById("citations").getContext("2d");

var config = {
  type: "bar",
  data: {
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
    ],
    datasets: [
      {
        label: "Google Scholar Citations",
        data: [1, 11, 13, 7, 28, 10, 29, 18, 36, 93, 20],
        backgroundColor: [
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
          "rgba(255, 0, 79, 0.3)",
        ],
        borderColor: [
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
          "rgba(255, 0, 79, 1)",
        ],
        borderWidth: 2,
        hoverBorderWidth: 5,
      },
      {
        label: "Scopus Citations",
        data: [0, 0, 0, 5, 5, 2, 5, 4, 20, 62, 18],
        backgroundColor: [
          "rgba(255, 255, 79, 0.3)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 2,
        hoverBorderWidth: 5,
      },
      {
        label: "Scopus Documents",
        data: [0, 0, 2, 4, 1, 0, 5, 7, 3, 7, 4],
        backgroundColor: [
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
          "rgba(80, 80, 80, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.8)",
        ],
        borderWidth: 2,
        hoverBorderWidth: 5,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    animation: {
        duration: 1000,
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#262626",
        },
        ticks: {
          stepSize: 25,
        },
        title: {
            display: true,
            text: 'Number of Citations',
            color: '#808080'
        },
      },
      x: {
        grid: {
          color: "#262626",
        },
        title: {
          display: true,
          text: "Year",
          color: '#808080'
        },
      },
    },
  },
};

if (citations_chart != null) {
  citations_chart.destroy();
}

citations_chart = new Chart(canvasElement, config);
