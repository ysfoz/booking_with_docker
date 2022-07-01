import express from "express";

import {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} from "../controllers/user.js";

import { verifyToken, verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/**
 * !CREATE
 * @method post
 * @route api/user
 * @description
 * @access private
 */

router.post("/", createUser);

/**
 * !UPDATE
 * @method put
 * @route api/user:id
 * @description
 * @access private
 */

router.put("/:id", verifyToken, verifyUser, updateUser);

/**
 * !DELETE
 * @method delete
 * @route api/user:id
 * @description
 * @access private
 */

router.delete("/:id", verifyToken, verifyUser, deleteUser);

/**
 * !GET ONE
 * @method get
 * @route api/user:id
 * @description
 * @access public
 */
router.get("/:id", verifyToken, verifyUser, getUser);

/**
 * !GET ALL
 * @method get
 * @route /api/user
 * @description
 * @access public
 */

router.get("/", verifyToken, verifyAdmin, getUsers);

export default router;
