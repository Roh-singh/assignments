const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();


// let courses = [];
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    
    
    const admin = new Admin({
        username:username,
        password:password
    })
    await admin.save();
    res.status(200).json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const createCourse = new Course({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        image:req.body.imageLink,
        published:true
    })
    
   await createCourse.save();

    res.json({
        'message':'Course created successfully',
        'courseId': createCourse['_id']
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   let courses = await Course.find();
   res.json(courses);
});

module.exports = router;