const express = require("express");
const router = express.Router();
const Resident = require("../models/Resident");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchadmin = require("../middleware/fetchAdmin");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "CodxTeam";

//Resident details
router.get("/", async (req, res) => {
  try {
    const resident = await Resident.find().select("-password");
    res.json(resident);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Resident signUp
router.post(
  "/addmember",
  fetchadmin,
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("phone", "Enter a valid phone number").isNumeric(),
    body("wing", "Enter a valid wing").isLength({ min: 1 }),
    body("rNo", "Enter a valid room number").isNumeric(),
    body("roomModel", "Enter a valid room type").isNumeric(),
    body("password", "Enter a valid password").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let resident = await Resident.findOne({
        email: req.body.email,
      });
      if (resident) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(13);
      const securePass = await bcrypt.hash(req.body.password, salt);

      let billing = 2000;
      if (req.body.roomModel == 2) {
        billing = 3000;
      } else if (req.body.roomModel == 3) {
        billing = 3500;
      }

      resident = await Resident.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        wing: req.body.wing,
        rNo: req.body.rNo,
        roomModel: req.body.roomModel,
        password: securePass,
        maintenance: billing,
      });
      res.json(resident);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Resident login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let resident = await Resident.findOne({ email });
      if (!resident) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, resident.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      const data = {
        user: {
          id: resident.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await Resident.findById(userId).select("maintenance");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const resident = await Resident.findById(req.params.id);
//     res.json(resident);
//   } catch (err) {
//     res.send("Error " + err);
//   }
// });

// router.post("/addResident", async (req, res) => {
//   const resident = new Resident({
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//     password: req.body.password,
//   });

//   try {
//     const r = await resident.save();
//     res.json(r);
//   } catch (err) {
//     res.send("Error " + err);
//   }
// });

// router.delete("/:address", async (req, res) => {
//   try {
//     const resident = await Resident.findOne({ address: req.params.address });
//     const r = await resident.delete();
//     res.json(r);
//   } catch (err) {
//     res.send("Error " + err);
//   }
// });

//Delete the member
router.delete("/deletemember/:id", async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let resident = await Resident.findById(req.params.id);
    if (!resident) {
      return res.status(404).send("Not Found");
    }

    resident = await Resident.findByIdAndDelete(req.params.id);
    res.json({ Success: "Resident has been deleted", resident: resident });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
