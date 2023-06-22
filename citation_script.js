// script for citation
var configAll = {
  type: "bar",
  data: {
    // Year
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

        // Google Scholar Citations
        label: "Google Scholar Citations",
        data: [1, 11, 13, 7, 28, 10, 29, 18, 36, 101, 46],
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

        // Scopus Citations
        label: "Scopus Citations",
        
        // Data for Scopus Citations
        data: [0, 0, 0, 5, 5, 2, 5, 4, 20, 63, 32],
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
        // Data for Scopus Documents
        label: "Scopus Documents",
        data: [0, 0, 2, 4, 1, 0, 5, 7, 3, 6, 8],
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
    
    // Google Scholar Citation Data
    datasets: [
      {
        label: "Google Scholar Citations",
        data: [302, 9, 9],
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
          stepSize: 50,
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

    // Google Scholar Citation and Documents Data
    datasets: [
      {
        label: "Scopus Citations and Documents",
        data: [136, 5, 36],
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

// initialization of chart
var citations_chart = null;
var canvasElement = document.getElementById("citations").getContext("2d");

//default for chart load
let chartType = document.getElementById('selector').value;
if (citations_chart != null) {
  citations_chart.destroy();
} 
citations_chart = new Chart(canvasElement, configAll);


// chart selector
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