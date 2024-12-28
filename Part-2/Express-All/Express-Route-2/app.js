import express from 'express'
let app=express()

/*
API URL:http://127.0.0.1:8082/
Method Type:GET
Required Fields:None
Access Type:Public
*/
app.get("/",(req,resp)=>{
    resp.send("Root Request - GET Method")
})

/*
API URL:http://127.0.0.1:8082/
Method Type:POST
Required Fields:None
Access Type:Public
*/
app.post("/",(req,resp)=>{
    resp.send("create Req - Method POST")
})


/*

API URL:http://127.0.0.1:8082/
Method Type:PUT
Required Fields:None
Access Type:Public
 */
app.put("/",(req,resp)=>{
    return resp.json({"message":"Update Req - Method PUT"})
})


/* 
API URL:http://127.0.0.1:8082/
Method Type:DELETE
Required Fields:None
Access Type:Public
*/
app.delete("/",(req,resp)=>{
    return resp.json({"message":"delete Req-method type : DELETE"})
})

app.listen(8082,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Runnig! http://127.0.0.1:8082/`)
})