import express from "express";

import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotel.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/**
 * !CREATE
 * @method post
 * @route api/hotel
 * @description
 * @access private
 */

router.post("/", verifyToken, verifyAdmin, createHotel);

/**
 * !UPDATE
 * @method put
 * @route api/hotel:id
 * @description
 * @access private
 */

router.put("/:id", verifyToken, verifyAdmin, updateHotel);

/**
 * !DELETE
 * @method delete
 * @route api/hotel:id
 * @description
 * @access private
 */

router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

/**
 * !GET ONE
 * @method get
 * @route api/hotel/find/:id
 * @description
 * @access public
 */
router.get("/find/:id", getHotel);

/**
 * !GET ALL
 * @method get
 * @route /api/hotel
 * @description
 * @access public
 */

router.get("/", getHotels);
/**
 * !GET Count hotels by name
 * @method get
 * @route /api/hotel/countbycity?cities=....
 * @description
 * @access public
 */

router.get("/countbycity", countByCity);

/**
 * !GET Count hotels by type
 * @method get
 * @route /api/hotel/countbytype
 * @description
 * @access public
 */
router.get("/countbytype", countByType);

/**
 * !GET Rooms
 * @method get
 * @route /api/hotel/room/:hotelid
 * @description
 * @access public
 */

router.get("/room/:id", getHotelRooms);

export default router;
