const { sign, verify } = require('jsonwebtoken');
const config  = require("../../../config").cfg;
const constants = require("../utils/constant");
const customException = require("../utils/customException");
const secretKey = config.jwtSecretKey;

module.exports = {
    createTokens: (user) => {
        const accessToken = sign(user, secretKey )
        return accessToken
    },
    authenticateToken: (accessToken) => {
        if(!accessToken){
            throw customException.UNAUTHORIZED_ACCESS_EXCEPTION
        }
        try{
            const userObj = verify(accessToken,secretKey )
            return userObj
        }
        catch(err){
            throw err
        }
    }

}