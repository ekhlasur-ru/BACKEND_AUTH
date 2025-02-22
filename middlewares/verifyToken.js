import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({
          status: false,
          message: "Access Denied. Token missing, please login again.",
        });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded?._id && decoded?.email) {
      req.user = decoded;
      next();
    } else {
      res
        .status(401)
        .json({ status: false, message: "Invalid Token, please login again." });
    }
  } catch (error) {
    console.error("Token verification error:", error);
    if (error instanceof jwt.TokenExpiredError) {
      res
        .status(401)
        .json({ status: false, message: "Token expired, please login again." });
    } else if (error instanceof jwt.JsonWebTokenError) {
      res
        .status(401)
        .json({ status: false, message: "Invalid Token, please login again." });
    } else {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
};
