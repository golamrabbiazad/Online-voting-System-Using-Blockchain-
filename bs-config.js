const ejs = require("ejs");
const path = require("path");
const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.use(express.static("public"));

app.use(express.static("src"));
// app.use('/css',express.static(__dirname + 'src/css'))

// fetching table

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// web-portion --------------------------------->
app.use(
  session({
    secret: "your-vote-counts",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 300, secure: true },
  })
);

var FirstPage = require("./routes/first_page");
var registrationRouter = require("./routes/registration-route");
var loginRouter = require("./routes/login-route");
var dashboardRouter = require("./routes/dashboard-route");
var logoutRouter = require("./routes/logout-route");
var RegisterRouter = require("./routes/main");
var AdminLogin = require("./routes/admin_login");
var Tableview = require("./routes/table_view");

app.use("/", registrationRouter);
app.use("/", loginRouter);
app.use("/", dashboardRouter);
app.use("/", logoutRouter);
app.use("/", RegisterRouter);
// app.use('/',FirstPage);
app.use("/", AdminLogin);
app.use("/", Tableview);
// web-portion --------------------------------->

app.get("/vote_area", function (req, res) {
  res.sendFile(__dirname + "/src/vote_area.html");
});

app.get("/candidateDetails", function (req, res) {
  res.sendFile(__dirname + "/src/adminCandidateDetails.html");
});

app.get("/userInfo", function (req, res) {
  res.sendFile(__dirname + "/src/userInfo.html");
});

app.get("/result", function (req, res) {
  res.sendFile(__dirname + "/src/result.html");
});

app.get("/addCandidate", function (req, res) {
  res.sendFile(__dirname + "/src/adminAddCandidate.html");
});

app.get("/changePhase", function (req, res) {
  res.sendFile(__dirname + "/src/adminChangePhase.html");
});

app.get("/voting", function (req, res) {
  res.sendFile(__dirname + "/src/voting.html");
});

app.get("/hello", function (req, res) {
  res.send("hello");
});

module.exports = {
  server: {
    baseDir: ["./src", "./build/contracts"],
    routes: {
      "/node_modules": "node_modules",
    },
    middleware: {
      1: app,
    },
  },
  port: 3000,
};
