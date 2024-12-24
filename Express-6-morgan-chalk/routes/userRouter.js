import express from 'express'

let router = express.Router();
/*
    API URL: http://127.0.0.1:8082/user/
    Method: GET
    Req Fields:None
    Access Type:Public
*/
router.get("/",(req,resp)=>{
    console.log("Inside - user Router - get Method")
    return resp.json({"msg":"User -Root Req-Metho:GET"})
})
/*
    API URL: http://127.0.0.1:8082/user/create
    Method: POST
    Req Fields:None
    Access Type:Public
*/
router.post("/create",(req,resp)=>{
    return resp.json({"msg":"User - POST Req"})
})

/*
    API URL: http://127.0.0.1:8082/user/update
    Method: PUT
    Req Fields:None
    Access Type:Public
*/
router.put("/update",(req,resp)=>{
    return resp.json({"msg":"User - PUT Req"})
})

/*
    API URL: http://127.0.0.1:8082/user/delete
    Method: DELETE
    Req Fields:None
    Access Type:Public
*/
router.delete("/delete",(req,resp)=>{
    return resp.json({"msg":"User - DELETE Req"})
})

export default router;