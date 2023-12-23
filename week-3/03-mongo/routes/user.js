const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    
    const userexist = await User.findOne({username:username,password:password});
    if (userexist) {
        res.status(400).send('User already exist');
    };
    const user = new User({
        username:username,
        password:password
    })
    await user.save();
    
    
    res.status(200).json({ message: 'User created successfully' });
});


router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        
        const username = req.headers.username;
        const password = req.headers.password;
    
        let userexist =await User.findOne({username:username,password:password});
        if (userexist) {
            const courses = await Course.find();
            res.json(courses)
        } 
    } catch (error) {
        res.send("You are not an user")
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        // Implement course purchase logic
        const courseid = req.params.courseId;
        const courseexist = await Course.findOne({ _id: courseid });

        if (!courseexist) {
            return res.status(404).json({ 'message': 'Course not found' });
        }

        let user = User.findOneAndUpdate(
            { _id: req.user._id },
            { $push: { purchasedCourse: courseexist } },
            { new: true }
        )
        res.json({ 'message': 'Course purchased successfully' });
    } catch (error) {
        console.error('Error in /courses/:courseId route:', error);
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
});


router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    try {
        let user = await User.findone(
            {
                _id:req.user._id
            }
        )
        if(!user){
            return res.json({
                "message": "User not found"
            })
        }

        let purchasedCourse = user.purchasedCourse;
        res.json({
            "purchasedCourses":purchasedCourse
        })
    } catch (error) {
        res.json({
            "message": "Something bad happened"
        })
    }
});
module.exports = router;