import express from 'express'

let router = express.Router();
/*
    API URL: http://127.0.0.1:8082/prod/
    Method: GET
    Req Fields:None
    Access Type:Public
*/
router.get("/",(req,resp)=>{
    console.log("Inside - Product Router - get Method")
    return resp.json({"msg":"Proudct -Root Req-Metho:GET"})
})
/*
    API URL: http://127.0.0.1:8082/prod/create
    Method: POST
    Req Fields:None
    Access Type:Public
*/
router.post("/create",(req,resp)=>{
    return resp.json({"msg":"Product - POST Req"})
})

/*
    API URL: http://127.0.0.1:8082/prod/update
    Method: PUT
    Req Fields:None
    Access Type:Public
*/
router.put("/update",(req,resp)=>{
    return resp.json({"msg":"User - PUT Req"})
})

/*
    API URL: http://127.0.0.1:8082/prod/delete
    Method: DELETE
    Req Fields:None
    Access Type:Public
*/
router.delete("/delete",(req,resp)=>{
    return resp.json({"msg":"User - DELETE Req"})
})

export default router;