import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (_req: Request, res: Response) => {
  res.send("Server is running!");
});

// Define the Email Data Interface
interface EmailRequest {
  email: string;
}

// Email Sending Route
app.post("/api/send", async (req: Request, res: Response) => {
  const { email }: EmailRequest = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  console.log("Received email:", email);

  // Transporter Configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const userMailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "User Verified",
    html: "<p>User has been verified successfully</p>",
  };

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Admin Verification",
    html: "<p>Your verification has been successfully processed</p>",
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, message: "Failed to send emails" });
  }
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));