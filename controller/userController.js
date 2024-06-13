const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const registerUser = async (req, res) => {
  const { name, owner, address, mobile, email, password, type } = req.body;

  if (!type) {
    return res.status(400).json({ msg: "Registration type is required." });
  }

  console.log("Request Body:", req.body); // Log the request body

  try {
    // Check if user already exists
    let user = await User.findOne({ $or: [{ mobile }, { email }] });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create new user
    user = new User({
      name,
      owner,
      address,
      mobile,
      email,
      password,
      type,
    });

    // Hash the password before saving the user
    user.password = await bcrypt.hash(password, 10);

    await user.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const loginUser = async (req, res) => {
  const { emailOrMobile, password } = req.body;

  try {
    // Check if user exists by email or mobile
    let user = await User.findOne({
      $or: [{ mobile: emailOrMobile }, { email: emailOrMobile }],
    });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Return JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token, registrationType: user.type });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { registerUser, loginUser };
