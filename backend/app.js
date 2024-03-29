import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';
const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://Deepu:HN3IsjIzLNOQxxT3@cluster0.oemg5m6.mongodb.net/')
.then(()=>app.listen(7000))
.then(()=>console.log('connected to database and listening to localhost 7000'))
.catch((err)=>console.log(err));
