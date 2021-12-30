import express from "express";
import mongoose from 'mongoose';
const app=express();
import useRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js'

mongoose.connect(process.env.MONGODB_URL||'mongodb://127.0.0.1/amazona',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


app.use('/api/users',useRouter);
app.use('/api/products',productRouter)

app.get('/',(req,res)=>{
    res.send('server is working');
});

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});