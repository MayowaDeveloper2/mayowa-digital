const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "mayowadigitalservices@gmail.com", // Your Gmail address here
        pass: "mzqgaoynmrllyvxb", // Your Gmail password here
    },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/post", (req, res) => {
    console.log(req.body);

    const mailOptions = {
        from: req.body.email, // Use the user's input email here
        to: "mayowadigitals@gmail.com", // Your receiving email address here
        subject: req.body.subject,
        text: `From: ${req.body.email}\nSubject: ${req.body.subject}\n\n${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log("Email sent");
            res.json({ status: "success" });
        }
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server failed.");
    } else {
        console.log(`Listening at port ${PORT}`);
    }
});
