import express from 'express'
import dotenv from 'dotenv'
import useRouter from './routes/userRouter.js';
import productRouter from './routes/prodRouter.js'

let app = express()
//load the env - values like post,host,dbinfo,secretkey
dotenv.config({'path':"./config/dev.env"})
let port = process.env.PORT 
let host=process.env.HOST_NAME 

//API URL : http://127.0.0.1:8082/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Root Req"})
})

app.use("/user",useRouter);
app.use("/prod",productRouter);

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running: http://${host}:${port}/`)
})