const hamburger = document.querySelector(".hamburger-parent");
const hamburerLines = document.querySelectorAll(".hamburger-line");
const sidebar = document.querySelector(".sidebar");
const dimmer = document.querySelector("#dimmer");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("out");
  dimmer.classList.toggle("dimmed");
  //   switchX();
  hamburger.classList.toggle("out");

  setTimeout(function () {
    hamburger.classList.toggle("X");
  }, 240);
});

var firebaseConfig = {
  apiKey: "AIzaSyDuXB-o324LrfZWbVCqgnbPnXCLEp9699Y",
  authDomain: "coding-train-walkthrough.firebaseapp.com",
  databaseURL: "https://coding-train-walkthrough.firebaseio.com",
  projectId: "coding-train-walkthrough",
  storageBucket: "coding-train-walkthrough.appspot.com",
  messagingSenderId: "121616804778",
  appId: "1:121616804778:web:ebbdaeedd0462b81bad9d3",
  measurementId: "G-EJRBZTYN7B",
};

firebase.initializeApp(firebaseConfig);

console.log(firebase);

var database = firebase.database();
var ref = database.ref("scores");

var data = {
  name: "Sean",
  score: 43,
};

ref.push(data);
