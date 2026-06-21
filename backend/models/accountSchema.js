import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
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