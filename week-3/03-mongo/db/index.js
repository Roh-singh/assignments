const mongoose = require('mongoose');
// const { string, boolean } = require('zod');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rohit9306895:HTUZqFe7qEnM0Ezk@cluster0.cdhsfvl.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    purchasedCourse:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'Course'
    }
]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    
    title:String,
    description:String,
    price:Number,
    image:String,
    published:Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}