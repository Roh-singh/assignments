const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const username = req.headers.username;
        const password = req.headers.password;
        const adminexist =await Admin.findOne({username:username,password:password});
        if (adminexist) {
            next();
            
        } else {
            res.status(401).send('Unauthorised user')
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = adminMiddleware;