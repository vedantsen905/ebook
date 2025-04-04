import express from "express";
import bookrouter from "./routes/book.route.js";
import cors from "cors"


const app = express()

app.use(cors())


//routers declaration 

app.use("/api/v1/book/", bookrouter)

// http://localhost:8000/api/v1/book

export {app}
