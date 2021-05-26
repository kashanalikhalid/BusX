import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import express from 'express'
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";
import studentRoutes from "./routes/admin/studentRoutes.js";
import bodyParser from 'body-parser'



const app =express()
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();
connectDB();

app.get('/',(req,res)=>{
res.send('API is running')
})

app.use('/admin/data',studentRoutes)

// notFound();
// errorHandler();

const PORT=process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`));
