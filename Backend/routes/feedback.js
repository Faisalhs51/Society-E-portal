const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const { body, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/createFeed",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("subject", "Enter a valid subject"),
    body("description", "Enter a valid description"),
  ],
  async(req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, subject, description } = req.body;

      const feedback = new Feedback({
        name,
        email,
        subject,
        description,
      });

      const f = await feedback.save();

      res.json(f);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
