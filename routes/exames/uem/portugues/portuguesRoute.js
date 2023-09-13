import express from "express";
import {PortuguesExaUEM, getPortuguesExamesById} from "./portugues.js"

const router = express.Router();

router.get("/", PortuguesExaUEM);
router.get("/:id", getPortuguesExamesById);

export default router;
