import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async (to, subject, body) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

// // Example usage
// sendMail(
//   "ekhlasurrahman42@gmail.com",
//   "Send Form Nodemailer",
//   "<body><h2>Hi, I am sending email from nodemailer</h2> <h1>Welcome To Backend Node js Server</h1></body>"
// );
