import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/api/v1/hello", (_req, res) => {
    res.json({ message: "Hello world!" });
});

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server started on port ${process.env.BACKEND_PORT}`);
});