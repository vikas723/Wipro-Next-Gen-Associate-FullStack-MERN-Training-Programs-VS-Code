const express=require("express");
const router = express.Router();
const {Instructor,Course,Student, sequelize} =require("../models");

router.post("/instructors", async(req,res)=>{
   const instructor= await Instructor.create({name:req.body.name});
   res.status(201).json(instructor);
});

router.post("/courses", async(req,res)=>{
   const course= await Course.create(req.body); //Links it to an instructor using instructorId (foreign key). //req.body takes for all attributes in courses like title and price in courses
   res.status(201).json(course);
});

router.post("/students", async(req,res)=>{
   const student= await Student.create({name:req.body.name,email:req.body.email}); //Links it to an instructor using instructorId (foreign key).
   res.status(201).json(student);
});

router.post("/enroll", async(req, res) => {
    const t = sequelize.transaction(); // adding the transaction method
    try{
    const student = await Student.findByPk(req.body.studentId,{transaction : t})
    const course = await Course.findByPk(req.body.courseId,{transaction : t});
    if(!student || !course)
    {
        throw new Error("Invalid student id or course id");
        
    }
    await student.addCourse(course, {transaction:t})
    await t.commit(); // committing the transaction
    res.json({message :"Enrollment done"})}
    catch(err){
        await t.rollback(); //rolling back the transaction
        res.json({message:err.message})
    }
})


router.get("/instructors",async(req,res)=>{
    const instructor=await Instructor.findAll();
    res.status(200).json(instructor);
    
})
router.get("/courses",async(req,res)=>{
    const course=await Course.findAll({include : Student});
    res.status(200).json(course);
    
})


// router.get("/students",async(req,res)=>{
//     const student=await Student.findAll();
//     res.status(200).json(student);
    
// })

router.get("/instructorsdetails",async(req,res)=>{
    const instructorDetails=await Instructor.findAll({include:Course});
    res.status(200).json(instructorDetails);
    
})

module.exports=router;
