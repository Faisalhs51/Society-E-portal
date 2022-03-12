const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51JlbVpSChO663qU8sitEBxyPN8gQX4Bdh3fA1EIdDo0nA4VJLNhCzTEGTtO7eoo1Z3UNWeEh0iVA1RJiViCDuSJg00nz7jLAKY"
);
const { v4: uuidv4 } = require("uuid");
var nodemailer = require("nodemailer");
const Resident = require("../models/Resident");
const fetchuser = require('../middleware/fetchuser');

const send = async (receivers, p) => {
  const content = `<h1>Nana Patil Pride</h1>
<h3>Please pay your maintenance for this month: &#8377;${p}</h3>`;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "faisalcom6119027@gmail.com",
      pass: "faisal786",
    },
  });

  var mailOptions = {
    from: "faisalcom6119027@gmail.com",
    to: receivers + ",faisalhs2002@gmail.com",
    subject: "Nana Patil Pride | Maintenance reminder",
    text: "Please do the payment of your society maintenence of this month",
    html: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log("Message sent");
};

router.post("/payment", fetchuser, async (req, res) => {
  const { token, amount } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: amount * 100,
        customer: customer.id,
        currency: "inr",
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    res.json("Payment Done successfully.");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/sendMail", async (req, res) => {
  let a = [];
  try {
    const One = await Resident.find({ roomModel: 1 }).select("email");
    const Two = await Resident.find({ roomModel: 2 }).select("email");
    const Three = await Resident.find({ roomModel: 3 }).select("email");

    for (let j of One) {
      a.push(j.email);
    }
    if (a) {
      send(a.join(), 2000);
    }
    a = [];

    for (let j of Two) {
      a.push(j.email);
    }
    if (a) {
      send(a.join, 3000);
    }
    a = [];

    for (let j of Three) {
      a.push(j.email);
    }
    if (a) {
      send(a.join, 3500);
    }
    a = [];
    res.json("Message sented successfully.");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
