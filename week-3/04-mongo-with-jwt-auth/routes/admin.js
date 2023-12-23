const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require('jsonwebtoken');
const z = require('zod');

const jwtPassword = '123456';

const adminnameSchema = z.string();
const adminpassSchema = z.string().min(6).max(20);
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let validadminname = adminnameSchema.safeParse(req.headers.username);
    let  validadminpass = adminpassSchema.safeParse(req.headers.password);
    if (!validadminname.success || !validadminpass.success) {
        res.status(500).json({"message":"Invalid Cradentials"})
    }
    const admin =  new Admin({
        username:validadminname.data,
        password:validadminpass.data
    })
    await admin.save();

    res.status(200).json({"message":"Admin created successfully"})

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    try {
        
        const admin = await Admin.findOne(
            {
                username:req.headers.username,
                password:req.headers.password
            });
        if (admin) {
            let token = jwt.sign(
                {
                    username:admin.username,
                    password:admin.password
                },jwtPassword);
            res.status(200).json({"token":token})
            
        }
        res.status(400).json({"message":"Admin not found"})
    } catch (error) {
        res.status(404).json({"message":"Something went wrong"})
    }



});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {

      const {title,description,price,image} = req.body;
      if (!title || !description || !price || !image) {
        res.status(500).json(
            {
                "message":"required messages missing"
            }
            );
        return;
      }
        let newcourse = new Course({
           title:req.body.title,
           description:req.body.description,
           price:req.body.price,
           image:req.body.image,
           published:true
        })
        await newcourse.save();
        res.status(200).json({"message":"Course created successfully","courseid":newcourse["_id"]})
    } catch (error) {
        res.status(404).json({
            "message":"Something bad happen"
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
try {
    
    let courses =await Course.find();
    res.status(200).json({
        "courses":courses
    })
} catch (error) {
    res.status(400).json({
        "message":null
    })
}
});

module.exports = router;