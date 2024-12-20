import express from 'express'
import path from 'path'

let app= express();

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","index.html"))
})

app.get("/index",(req,resp)=>{
    console.log("inside -get req - 1")
    resp.sendFile(path.join(process.cwd(),"static","html","index.html"))
})
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","about.html"))
})
app.get("/services",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","services.html"))
})
app.listen(8085,'127.0.0.1',(err)=>{
    console.log(`server is running http://127.0.1:8085/`)
})