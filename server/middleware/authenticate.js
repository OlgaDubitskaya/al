const jwt = require("jsonwebtoken")

exports.authenticate = (req, res, next) => {
    try {
        const { token } = req.cookies
        const userId = jwt.verify(token, process.env.JWT_SECRET)
        if (!userId) {
            throw new Error("Unauthorized");
        }
        req.userId = userId
        next()
    } catch (err) {
        return res.status(401).json({
            error: {
                title: "Unauthorized",
                detail: "Authentication credentials invalid",
                errorMessage: err.message
            }
        })
    }
}