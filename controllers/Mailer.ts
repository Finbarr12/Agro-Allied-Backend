import { Request, Response } from "express";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export const TransMail = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport(
      smtpTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "okwolig60@gmail.com",
          pass: "mamamatthew69",
        },
      })
    );
    const mailOptions = {
      from: email,
      to: "okwolig60@gmail.com",
      subject: "New email from your website",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } catch (error) {
    res.status(200).json({
      message: "An error occured",
      data: error,
    });
  }
};
