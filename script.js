var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 8) || 1500;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


//code for contributions_chart
var canvasElement = document.getElementById("contributions_chart");
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
};

var contributions_chart = new Chart(canvasElement, config)