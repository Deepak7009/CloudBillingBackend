const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      let user = await User.findOne({ email, name });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
  
      user = new User({
        name,
        email,
        password,
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
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
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
        res.status(200).json({
          message: "Login successful",
          token,
      });
      console.log("Token:",token)

      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getUserDetails = async (req, res) => {
  try {
      const userId = req.params.userId;

      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
  } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
}


//const updatename = async (req, res) => {
//  try {
//    const { name } = req.user;
//    const user = await Login.findOne({ name });
//    if (!user) {
//      return res.status(404).json({ error: "User not found" });
//    }
//    const { _id: userId } = user;

//    const newname = req.body.name;
//    const updatingUser = await Login.findByIdAndUpdate(
//      userId,
//      { name: newname },
//      { new: true }
//    );
//    if (!updatingUser) {
//      return res.status(404).json({ error: "User not found" });
//    }

//    res.status(200).json({ message: "name updated successfully" });
//  } catch (error) {
//    console.error(error);
//    res.status(500).json({ error: "Internal server error" });
//  }
//};

module.exports = { registerUser, loginUser, getUserDetails };
