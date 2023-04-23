// script for citation

var configAll = {
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
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
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
    plugins: {
      legend: {
        labels: {
          color: "#eeeeee",
        },
      },
    },
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
          text: "Number of Citations",
          color: "#aaaaaa",
        },
      },
      x: {
        grid: {
          color: "#262626",
        },
        title: {
          display: true,
          text: "Year",
          color: "#aaaaaa",
        },
      },
    },
  },
};

var configGScholar = {
  type: "bar",
  data: {
    labels: [
      "Citations",
      "h-index",
      "i10-index",
    ],
    datasets: [
      {
        label: "Google Scholar Citations",
        data: [271, 9, 8],
        backgroundColor: "rgba(255, 0, 79, 0.3)",
        borderColor: "rgba(255, 0, 79, 1)",
        borderWidth: 2,
        hoverBorderWidth: 5,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#eeeeee",
        },
      },
    },
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
          text: "Number of Citation",
          color: "#aaaaaa",
        },
      },
      x: {
        grid: {
          color: "#262626",
        },
        title: {
          display: true,
          text: "Type of Citations",
          color: "#aaaaaa",
        },
        ticks: {
          color: '#eeeeee'
        }
      },
    },
  },
};

var configScopus = {
  type: "bar",
  data: {
    labels: ["Citations", "h-index", "Documents"],
    datasets: [
      {
        label: "Scopus Citations and Documents",
        data: [121, 5, 33],
        backgroundColor: "rgba(255, 0, 79, 0.3)",
        borderColor: "rgba(255, 0, 79, 1)",
        borderWidth: 2,
        hoverBorderWidth: 5,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#eeeeee",
        },
      },
    },
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
          text: "Number of Citation",
          color: "#aaaaaa",
        },
      },
      x: {
        grid: {
          color: "#262626",
        },
        title: {
          display: true,
          text: "Type of Citations",
          color: "#aaaaaa",
        },
        ticks: {
          color: "#eeeeee",
        },
      },
    },
  },
};

// initialization
var citations_chart = null;
var canvasElement = document.getElementById("citations").getContext("2d");

//default
let chartType = document.getElementById('selector').value;
if (citations_chart != null) {
  citations_chart.destroy();
} 
citations_chart = new Chart(canvasElement, configAll);

document.getElementById('selector').addEventListener('change', ()=>{
  chartType = document.getElementById('selector').value;
  if (chartType==='all'){
    if (citations_chart != null) {
      citations_chart.destroy();
    }
    citations_chart = new Chart(canvasElement, configAll);
  } else if (chartType==='scholar'){
    if (citations_chart != null) {
      citations_chart.destroy();
    }
    citations_chart = new Chart(canvasElement, configGScholar);
  } else if (chartType==='scopus'){
    if (citations_chart != null) {
      citations_chart.destroy();
    }
    citations_chart = new Chart(canvasElement, configScopus);
  }
});