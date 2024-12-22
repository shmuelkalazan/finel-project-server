import express from "express";
// import { seedTerorEvents } from "../utils/enterSid";
// import { seedcontroller } from "../controllers/analysisController";

const router = express.Router();
// router.get("/seed", seedcontroller);
router.get("/deadliest-attack-types", ()=>{});
router.get("/highest-casualty-regions" , ()=>{});
// router.get("/incident-trends/5",  ()=>{seedTerorEvents()});
router.get("/incident-trends/10",  ()=>{});
router.get("/incident-trends/:yyyy",  ()=>{});
router.get("/incident-trends/:yyyy/:yyyy",  ()=>{});


export default router;