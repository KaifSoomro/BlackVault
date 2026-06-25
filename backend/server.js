import "dotenv/config";
import express from "express";
import connectDB from "./config/db/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import accountRouter from "./routes/accountRoutes.js";
import helmet from "helmet";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/accounts", accountRouter);

await connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})