import winston from "winston";
import expressWinston from "express-winston";
export const logger = winston.createLogger({
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

// Middleware to log HTTP requests
export const requestLogger = expressWinston.logger({
  winstonInstance: logger,
  statusLevels: true, // Log levels based on response status code
});

// Middleware to log HTTP errors
export const errorLogger = expressWinston.errorLogger({
  winstonInstance: logger,
});
