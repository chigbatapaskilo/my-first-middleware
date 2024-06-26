const express=require(`express`);

const app=express();

const mongoose=require(`mongoose`);
app.use(express.json())

require("dotenv").config()

const port=process.env.port





const router=require("./router/userRouter")

app.use(router)


mongoose.connect(process.env.db)
.then(()=>{
    console.log(`connection to db successful`)
 
    }).catch((error)=>{
    console.log("unable to connect to db because"+error.message );
    })
    app.listen(port,()=>{
        console.log(`app is running on port:${port}`)
    })