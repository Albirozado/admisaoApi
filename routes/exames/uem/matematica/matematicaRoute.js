import express from "express";
import {matematicaExaUEM, getmatematicaExamesById} from "./matematica.js"

const router = express.Router();

router.get("/", matematicaExaUEM);
router.get("/:id", getmatematicaExamesById);

export default router;
