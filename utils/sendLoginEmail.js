import nodemailer from "nodemailer";
import dotenv from "dotenv";
// import { USER_SUCCESSFUL_LOGIN_TEMPLATE } from "../utils/EmailTemplate.js";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendLoginEmail = async (email, name, securityLink, loginLocation, deviceName, ipAddress) => {
  const now = new Date();
  const loginDate = now.toLocaleDateString();
  const loginTime = now.toLocaleTimeString();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "A New Device Login with Your Email",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Successful Login Notification</title>
        <style>
            body {
                background-color: #f3f4f6;
                font-family: 'Helvetica Neue', Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #fff;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: #10b981;
                padding: 20px;
                text-align: center;
                color: #fff;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
                color: #4b5563;
            }
            .content p {
                margin: 15px 0;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                background: #e53e3e;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
                text-align: center;
            }
            .footer {
                padding: 10px 20px;
                text-align: center;
                font-size: 12px;
                color: #6b7280;
                background: #f9fafb;
                border-top: 1px solid #e2e8f0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Successful Login Notification</h1>
            </div>
            <div class="content">
                <p>Hello ${name},</p>
                <p>We noticed that you have successfully logged into your account. If this was you, great! If you did not log in recently, please secure your account immediately.</p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${securityLink}" class="button">Secure Your Account</a>
                </div>
                <p>For your reference, the login took place on:</p>
                <p><strong>Date:</strong> ${loginDate}</p>
                <p><strong>Time:</strong> ${loginTime}</p>
                <p><strong>Location:</strong> ${loginLocation}</p>
                <p><strong>Device Name:</strong> ${deviceName}</p>
                <p><strong>IP Address:</strong> ${ipAddress}</p>
            </div>
            <div class="footer">
                <p>© ${new Date().getFullYear()} TailwindTap. All Rights Reserved.</p>
                <p>This is an automated message; please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Login Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};
