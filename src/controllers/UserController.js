const express = require("express");
const router = express.Router();

const {bodyHasEmail, bodyHasPassword, emailIsValid} = require("../middleware/UserMiddleware");

router.post("/signup", 
    //check for email
    bodyHasEmail,
    //check if email is valid
    emailIsValid,
    //check for password
    bodyHasPassword,
    
    (request, response) => {
        
        // assume if we reached this point
        // middleware did not throw errors

        response.json({message:"Sign up success!"});

    // if (request.body.email 
    //     &&
    //     request.body.email.includes("@") 
    //     &&
    //     request.body.password){
    //     response.json({message:"Sign up success!"});
    // } else {
    //     response.status(400).json({message:"Sign up failure!"});
    // }
});

module.exports = router;