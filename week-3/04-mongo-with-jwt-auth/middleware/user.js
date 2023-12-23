const jwt = require('jsonwebtoken');

const jwtPassword = '1234567';

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        let isverified = jwt.verify(token,jwtPassword);
        if (isverified) {
            next();
            res.status(200).json({"message":"You are verified"})
        }
        res.status(401).json({"message":"Invalid token"})
       } catch (error) {
        res.status(500).json({"message":"Internal Server Error" + error})
       }
    
}

module.exports = userMiddleware;