const express = require("express");
const resident = require("../model/resident.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const residents = await resident.find();
    res.status(200).json(residents);
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
});

router.post("/post", async (req, res) => {
  try {
    const newResident = new resident(req.body);
    await newResident.save();
    res.status(201).json(newResident);
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
