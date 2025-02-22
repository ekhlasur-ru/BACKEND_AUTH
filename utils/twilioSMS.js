// import twilio from "twilio";

// const accountSid = "AC4c5631897af8d42848844269906d2625";
// const authToken = "fbc25ef4e8910f71288d73ac95a13853";
// const client = twilio(accountSid, authToken);

// export const sendVerificationCode = async (phoneNumber, resetToken) => {
//   //   const code = Math.floor(100000 + Math.random() * 900000);

//   try {
//     await client.verify
//       .services("VAb97892730c3967bb59707698a15ec499")
//       .verifications.create({
//         to: phoneNumber,
//         channel: "whatsapp",
//         code: resetToken,
//       });

//     return { message: "Verification code sent successfully!", resetToken };
//   } catch (error) {
//     throw new Error("Error sending verification code", error);
//   }
// };
