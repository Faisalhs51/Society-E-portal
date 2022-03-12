const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaints");
const { body, validationResult } = require("express-validator");
const fetchadmin = require("../middleware/fetchAdmin");
const fetchuser = require("../middleware/fetchuser");

router.get("/getcomplaints", fetchadmin, async (req, res) => {
  try {
    const complaint = await Complaint.find();
    res.json(complaint);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/createcomplaint",
  fetchuser,
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body(
      "complaintDesc",
      "Description must be atleast 5 characters long"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { name, email, complaintDesc } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const complaint = new Complaint({
      name,
      email,
      complaintDesc,
    });

    try {
      const c = await complaint.save();
      res.json(c);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.delete("/deletecomplaint/:id", fetchadmin, async (req, res) => {
  try {
      console.log("here")
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).send("Not Found");
    }

    const c = await complaint.delete();
    res.json({ Success: "Complaint has been deleted", complaint: c });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
