import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middlewares/errorHandler.js"
import userRouter from './routes/user.routes.js'
import alumniRouter from "./routes/alumini.router.js";
import adminRouter from "./routes/admin.routes.js";
import emailRouter from './routes/email.routes.js'
import articleRouter from "./routes/article.routes.js"
import bodyParser from "body-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(bodyParser.json());

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb " }))
app.use(express.static('public'))
app.use(cookieParser())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
});

app.use(errorHandler);


//routes declaration
app.use("/api/v1/users", userRouter) // goes to user.routes.js
app.use("/api/alumni", alumniRouter);
app.use('/api', emailRouter);
app.use("/api/v1/admin", adminRouter);
app.use('/api/articles', articleRouter);






//http://localhost:8000/api/v1/users/register



export { app }
