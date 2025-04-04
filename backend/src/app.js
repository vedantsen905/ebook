import express from "express";
import bookrouter from "./routes/book.route.js";


const app = express()


//routers declaration 

app.use("/api/v1/book/", bookrouter)

// http://localhost:8000/api/v1/ 

export {app}
