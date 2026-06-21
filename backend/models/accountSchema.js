import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    websiteName: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Accounts = mongoose.model("account", accountSchema);
export default Accounts;