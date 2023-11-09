
const Exception = require("./exceptionModel");
const constants = require("./constant");

module.exports = {
    intrnlSrvrErr:  (err) => {
        return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    unauthorizeAccess:  (err) => {
        return new Exception(2, constants.MESSAGES.UNAUTHORIZED_ACCESS_EXCEPTION, err)
    },
    ALREADY_REGISTERED:  () => {
        return new Exception(3, constants.MESSAGES.ALREADY_REGISTERED )
    },
    INVALID_EMAIL:  ()  => {
        return new Exception(4, constants.MESSAGES.INVALID_EMAIL)
    },
    getCustomErrorException:  (errMsg, error)  => {
        return new Exception(5, errMsg, error)
    },
    EMAIL_NOT_REGISTERED:  () =>  {
        return new Exception(6, constants.MESSAGES.EMAIL_NOT_REGISTERED);
    },
    INCORRECT_PASSWORD:  () =>  {
        return new Exception(7, constants.MESSAGES.INCORRECT_PASSWORD);
    },
    SESSION_EXPIRED: () =>  {
        return new Exception(8, constants.MESSAGES.SESSION_EXPIRED);
    },    
    USER_NOT_FOUND : () =>  {
        return new Exception(9, constants.MESSAGES.USER_NOT_FOUND);
    },
    INACTIVE_USER: () => {
        return new Exception(10, constants.MESSAGES.INACTIVE_USER)
    },
    ARTICLE_NOT_FOUND:() => {
        return new Exception(11, constants.MESSAGES.ARTICLE_NOT_FOUND)
    }
};
