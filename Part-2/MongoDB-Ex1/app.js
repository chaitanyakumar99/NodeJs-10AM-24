import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import EmployeeModel from './model/EmployeeModel.js'
//creat express app
let app = express()
//load application configuration settings
dotenv.config({'path':'./config/dev.env'})
let port = process.env.PORT;
let host=process.env.HOST_NAME
let mongoDB_local_url=process.env.MONGO_DB_LOCAL_URL
//create Aplication root Request
app.get("/",(req,resp)=>{
    return resp.json({"message":"Application Root Request"})
})

app.get("/read",async(req,resp)=>{
    let employees=await EmployeeModel.find()
    return resp.json(employees)
})
mongoose.connect(mongoDB_local_url,{useNewUrlParser: true})
    .then((resp)=>{  console.log("MongoDB Connection Success!") })
    .catch((err)=>{console.log(err)})


app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server Running! http://${host}:${port}/`)
});