import express from 'express';
import { PORT,mongoDBURL } from './config.js';
import mongoose from 'mongoose';

const app = express();


//setting the http route
app.get('/',(req,res)=>{
console.log(req)
return res.status(234).send("App is running")
});

mongoose.connect(mongoDBURL).then(() => {
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
    
    console.log("app Connected to database")
}).catch((err)=> {
    console.log(err)
})