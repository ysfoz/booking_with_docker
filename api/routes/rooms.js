import express from "express";

import {
  createRoom,
  deleteRoom,
  updateRoom,
  getRoom,
  getRooms,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/**
 * !CREATE
 * @method post
 * @route api/room/:hotelid
 * @description
 * @access private
 */

router.post("/:id", verifyToken, verifyAdmin, createRoom);

/**
 * !UPDATE
 * @method put
 * @route api/room/:id
 * @description
 * @access private
 */

router.put("/:id", verifyToken, verifyAdmin, updateRoom);

/**
 * !DELETE
 * @method delete
 * @route api/room/:id
 * @description
 * @access private
 */

router.delete("/:id/:hotelid", verifyToken, verifyAdmin, deleteRoom);

/**
 * !GET ONE
 * @method get
 * @route api/room/:id/:hotelid
 * @description
 * @access public
 */
router.get("/:id", getRoom);

/**
 * !GET ALL
 * @method get
 * @route /api/room/:id
 * @description
 * @access public
 */

router.get("/", getRooms);

/**
 * !UPDATE
 * @method put
 * @route api/room/availableity/:id
 * @description
 * @access private
 */

router.put("/availability/:id", updateRoomAvailability);

export default router;
