import ratelimit from "express-rate-limit";

const loginLimit = ratelimit({
    windowMs: 15 * 60 * 1000, // 15min
    max: 5,
    message: "Too many login attempts"
})

export default loginLimit;