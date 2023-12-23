const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const z = require('zod');

const jwtPassword = '1234567';

const usernameSchema = z.string();
const userpassSchema = z.string().min(6).max(20);
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {

        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(404).json({
                "message": "Missing required fields"
            })
        }
        let validusername = usernameSchema.safeParse(req.body.username);
        let validuserpass = userpassSchema.safeParse(req.body.password);

        if (!validusername.success || !validuserpass.success) {
            return res.status(404).json({
                "message": "Inputs not valid"
            })
        }
        let user = new User({
            username: validusername.data,
            password: validuserpass.data
        })
        await user.save();

        res.json({
            "message": "User created successfully"
        })

    } catch (error) {
        res.json({
            "message": "Something bad happened"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        let user = await User.findOne({
            username: req.headers.username,
            password: req.headers.password
        })
        if (!user) {
            return res.json({
                "message": "User not found"
            })
        }
        let token = jwt.sign(
            {
                username: user.username
            },jwtPassword
        );
        res.json({
            "token": token
        })
    } catch (error) {
        res.json({
            "message": "Something bad happened"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        let token = req.headers.authorization.replace("Bearer", "");
        let isverified = jwt.verify(token, jwtPassword);
        if (!isverified) {
            return res.json({
                "message": "Invlaid JWT"
            })
        }
        let courses = await Course.find();
        res.json({
            "courses": courses
        })

    } catch (error) {
        res.json({
            "message": "Something bad happened"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        let courseid = req.params.courseId;
        const course = await Course.findOne({
            _id: courseid
        })

        if (!course) {
            return res.json({
                "message": "Course not found"
            })
        }
        let user = User.findOneAndUpdate(
            { _id: req.user._id },
            { $push: { purchasedCourse: course } },
            { new: true }
        )

        res.json({
            "message":"Course purchased successfully"
        })



    } catch (error) {
        res.json({
            "message": "Something bad happened"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
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

module.exports = router