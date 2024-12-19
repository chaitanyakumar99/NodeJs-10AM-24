import exprss from 'express'
import path from 'path'
let app = exprss()
//http://127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send("Root Req")
})
app.get("/users",(req,resp)=>{
    resp.send("User Req")
})

app.get("/index",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"index.html"))
})

app.listen(8081,(err)=>{
    if(err) throw err 
    console.log(`Server Running on http://127.0.0.1:8081`)
})