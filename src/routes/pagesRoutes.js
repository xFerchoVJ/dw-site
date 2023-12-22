import { Router } from "express";
import { rootPage } from "../controllers/pagesController.js";
const router = Router();

router.get("/", rootPage);

export default router;
