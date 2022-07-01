import express from "express";

import authRouter from "./auth.js";
import hotelRouter from "./hotels.js";
import roomRouter from "./rooms.js";
import userRouter from "./users.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/room", roomRouter);
router.use("/hotel", hotelRouter);

export default router;
