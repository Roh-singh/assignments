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
        const user = req.user;

        if (!courseexist) {
            return res.status(404).json({ 'message': 'Course not found' });
        }

        user.purchasedCourse.push(courseexist);
        await user.save();

        res.json({ 'message': 'Course purchased successfully' });
    } catch (error) {
        console.error('Error in /courses/:courseId route:', error);
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
});


router.get('/purchasedCourses', userMiddleware, (req, res) => {
    try {
        // Implement fetching purchased courses logic
        const user = req.user;

        // Assuming purchasedCourse is an array of courses associated with the user
        const purchasedCourses = user.purchasedCourse;

        res.json({ purchasedCourses });
    } catch (error) {
        console.error('Error fetching purchased courses:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = router;