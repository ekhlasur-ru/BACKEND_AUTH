import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Token missing, please login again" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded && decoded._id && decoded.email) {
      req.user = decoded;
      next();
    } else {
      return res
        .status(401)
        .json({ message: "Invalid Token, please login again" });
    }
  } catch (error) {
    console.error(error);

    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json({ message: "Invalid Token, please login again" });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
