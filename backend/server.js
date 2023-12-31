import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";


// start DB connection
connectDB();


// create express app
const app = express();


// middlewares to parse raw JSON from request body (req.body) and
// urlencoded data (req.query) from URL query string (?key=value&key2=value2)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// middleware to parse cookies from request header
app.use(cookieParser());


// user routes
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send('Server is ready')
});


// error handlers
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});