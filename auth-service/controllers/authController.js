const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../db/users");

const SECRET = process.env.JWT_SECRET;

// REGISTER
exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    username,
    password: hashedPassword
  });

  res.send("User registered successfully");
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send("Invalid password");

  const token = jwt.sign(
    { id: user.id, username },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

// PROFILE (protected)
exports.profile = (req, res) => {
  res.send("Protected route data (later middleware add karenge)");
};
