import user from "../models/user.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  const { firstname, lastname, username, email, password, confirmpassword } =
    req.body;
  try {
    const existingUser = await user.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already Exits" });
    if (password != confirmpassword)
      res.status(200).json({ message: "password dont match" });
    const fullname = firstname + " " + lastname;
    const newuser = new user({ email, password, fullname: fullname, username });
    await newuser.save();
    res.json({ message: "success" });
  } catch (error) {
    console.log("Error in register " + error);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const valid = await user.findOne({ email });
    if (!valid) res.status(200).json({ message: "User dont exist" });
    const validPassword = await bcrypt.compare(password, valid.password);
    if (!validPassword)
      res.status(400).json({ message: "Invalid Credentials" });

    const token = await valid.generateAuthToken();
    res.cookie("userToken", token, {
      expires: new Date(Date.now() + 9000000),
    });
    await valid.save();
    res.status(200).json({ result: valid, token: token, status: 200 });
  } catch (error) {
    console.log(error);
  }
};
