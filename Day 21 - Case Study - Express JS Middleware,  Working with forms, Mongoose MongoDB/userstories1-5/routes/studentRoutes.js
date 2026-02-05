// import {Router} from "express";
// const router = Router();

// import validatestudent from "../middleware/validatestudent";

// router.post("/", validatestudent, (req, res) =>{
//     res.json({
//         success : true,
//         message: "Student data accepted",
//         data : req.body
//     });
// });

// router.get("/error", (req, res) =>{
//     throw new error("Unexpected failure");
// });
// export default router;

// const express = require("express");
// const router = express.Router();


// const validatestudent = require("../middleware/validatestudent");

// router.post("/add", validatestudent ,(req,res)=>{
//     res.json({
//         success : true,
//         message : " Student data accepted",
//         data : req.body
//     });
// });
// router.get("/error" , (req,res)=>{
//     throw new Error("Unexpected Failure")
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const validateStudent = require("../middleware/validatestudent");

router.post("/add", validateStudent, (req, res) => {
  res.json({
    success: true,
    message: "Student data accepted",
    data: req.body
  });
});

router.get("/error", (req, res) => {
  throw new Error("Unexpected Failure");
});

module.exports = router;
