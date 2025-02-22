import dotenv from "dotenv";
import connectDB from "./database/db.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
// import compression from "compression";
import noticeRoute from "./controllers/Notice.js";
import auth from "./routes/Auth.js";
import sendMail from "./utils/contactEmail.js";
import responseTime from "response-time";
// import vhost from "vhost";
import favicon from "serve-favicon";
// import nodemailer from "nodemailer";
import path from "path";
import chalk from "chalk";
import winston from "winston";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: "./.env",
}); // Load .env file
const app = express(); // server init as app
connectDB(); //database Connection
app.set("view engine", "ejs"); // ejs setup

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public directory

// middlewares
app.use(responseTime());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); //show api hit terminal

// app.use(
//   compression({
//     level: 9, //0-9 level
//     threshold: 100 * 1024, //100kb min
//     filter: (req, res) => {
//       if (req.headers["x-no-compression"]) {
//         return false;
//       }
//       return compression.filter(req, res);
//     },
//   })
// );

app.use(
  cors({
    origin: process.env.CORS_ORIGIN.split(","),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

//routes declaration For REST API
app.use("/api/notice", noticeRoute);
app.use("/api/auth", auth);
// app.use("/api/contact", contactEmail);

//ejs backend route
app.get("/ejs", (req, res) => {
  res.render("index.ejs");
});

//APP LISTENER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    chalk.bgWhiteBright.italic.bold.redBright(
      `\n !!! Express Server Running On PORT: ${PORT}`
    )
  );
});

//express backend route
app.get("/data", (req, res) => {
  const data = "ekhlasur ".repeat(10);
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/json", (req, res) => {
  res.json({ name: "ekhlasur rahman", email: "miekhlas@gmail.com" });
});
app.get("/jsonp", (req, res) => {
  res.jsonp({ name: "ekhlasur rahman", email: "miekhlas@gmail.com" });
});
app.get("/status", (req, res) => {
  res.status(404).send("Not Found");
});
app.get("/sendstatus", (req, res) => {
  res.sendStatus(404);
});
app.get("/end", (req, res) => {
  res.end();
});
app.get("/redirect", (req, res) => {
  res.redirect("/");
});
app.get("/sendfile", (req, res) => {
  res.sendFile("./public/index.html");
});
app.get("/download", (req, res) => {
  res.download("./public/index.html");
});
app.get("/downloadpdf", (req, res) => {
  res.download("./public/index.html", "filensme.pdf");
});
app.get("/type", (req, res) => {
  res.type("application/json");
});
app.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("This response was delayed by 5 seconds");
  }, 8000);
});
app.get("/sloww", (_, res) => {
  setTimeout(() => {
    res.send("This response was delayed by 3 seconds");
  }, 3000);
});

//contact form
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await sendMail(name, email, subject, message);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).send("Error sending email");
  }
});

//winston Setup
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.label({ label: "mi-Backend" }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

app.get("/log", (req, res) => {
  res.send("Hello World!");
  logger.info("Ekhlalsur Rahman");
  // logger.warn('Ekhlalsur Rahman'); // Uncomment if needed
});
