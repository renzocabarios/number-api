import { Router } from "express";
import { increment, decrement, getValue } from "./sample.controller.js";

const router = Router();
router.route("/").get(getValue);
router.route("/increment").post(increment);
router.route("/decrement").post(decrement);

export default router;
