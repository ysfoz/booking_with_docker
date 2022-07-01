import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  });
  try {
    const user = await newUser.save();
    res.status(200).json("User has been created successfully");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!!!"));
    const isPaswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPaswordCorrect)
      return next(createError(400, "Wrong password or username!!!"));
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherInfo } = user._doc;
    res.cookie("access_token", token, { httpOnly: true });
    res.status(200).json({ ...otherInfo });
  } catch (error) {
    next(error);
  }
};
