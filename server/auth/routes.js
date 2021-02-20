import User from "./model.js";
import express from "express";
import bcrypt, { hash } from "bcrypt";
const router = express.Router();

router.post("/signup/", async (req, res) => {
  const { password, username, email } = req.body;
  try {
    if (await User.findOne({ username }))
      return res.status(409).send("This username already taken!");
    if (await User.findOne({ email }))
      return res.status(409).send("This email already used!");
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(password, salt);
    const user = new User({ username, email, password: hashedPass });
    const result = await user.save();
    res.send(result);
  } catch (err) {
    res.status(409).send("Couldn't create user");
  }
});

router.post("/signin/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("Please check your username!");
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.status(404).send("Please check your password again!");
    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.status(409).send("Couldn't sign in");
  }
});

export default router;
