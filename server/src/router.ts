import express from "express";
import repos from "./repos/repocontroller";
 
 const router = express.Router();
 
 // Route en API REST Verb HTTP + uri (/api/repos/12)
 // GET, POST, PUT, PATCH DELETE
 // http://localhost:5001/server
 router.get("/", (req, res) => {
   res.status(200).send("Tout est OK");
 });
 router.use("/repos", repos);
 export default router;