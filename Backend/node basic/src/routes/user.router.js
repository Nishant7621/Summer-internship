const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.create({
            username,
            email,
            password
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;