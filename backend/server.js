import "dotenv/config";
import express from "express";
import connectDB from "./config/db/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 6000;

app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);

await connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})