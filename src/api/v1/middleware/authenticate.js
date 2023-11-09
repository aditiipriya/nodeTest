"use strict";
const mongoose = require("mongoose");
const jwt = require("../utils/jwt");
const customException = require("../utils/customException");

const autntctTkn = function (req, res, next) {
    try{
        let acsToken = req.get('accessToken');
        if(acsToken){
            let userObj = jwt.authenticateToken(acsToken);
            if(userObj){
                req.user = userObj;
                next()
            }     
        }
        // else {
        //     throw customException.unauthorizeAccess();
        // }
        // return next(customException.unauthorizeAccess())
        // next(customException.unauthorizeAccess())
    }
    catch(err) {
        next(err)
    }
}

module.exports = {
    autntctTkn,
};

