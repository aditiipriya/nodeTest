const STATUS_CODE = {
    ERROR: 400,
    SUCCESS: 200,
};

const MESSAGES = {
    KEY_CANT_EMPTY: "{{key}} cannot be empty",
    INTERNAL_SERVER_ERROR: "Please try after some time.",
    INVALID_EMAIL: "Please fill valid email address.",
    VALIDATION_ERROR: "Validation error.",
    UNAUTHORIZED_ACCESS_EXCEPTION: "Unauthorized access.",
    ALREADY_REGISTERED: "Email already registered !!",
    EMAIL_NOT_REGISTERED: "Email not registered !!",
    INCORRECT_PASSWORD: "Incorrect Password !!",
    SESSION_EXPIRED: "Accesstoken Expired !!",
    USER_NOT_FOUND: "Id not found ",
    INACTIVE_USER: "Your account is inactive",
    ARTICLE_NOT_FOUND:"Article not found",
};

module.exports = Object.freeze({
    STATUS_CODE: STATUS_CODE,
    MESSAGES: MESSAGES,
});
