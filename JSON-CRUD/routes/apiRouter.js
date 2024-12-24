import express from 'express'
let router = express.Router()
//Create Api Router - Root Request
//API URL: http://127.0.0.1:8084/api/
router.get("/",(req,resp)=>{
    return resp.json({"msg":"API-Router Root Request"})
})
/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8084/api/create
Method Type:PORT
Required Fields: empId,ename,esal
Access Type:Public
*/
router.post("/create",(req,resp)=>{
    return resp.json({"msg":"New Employee Created"})
})

/*
Usage: read all emp/product/order
API URL: http://127.0.0.1:8084/api/read
Method Type:GET
Required Fields: None
Access Type:Public
*/
router.get("/read",(req,resp)=>{
    return resp.json({"employees":"All- employees"})
})

/*
Usage: update all emp/product/order
API URL: http://127.0.0.1:8084/api/update/1
Method Type:PUT
Required Fields: empId,ename,esal
Access Type:Public
*/
router.put("/update/:eid",(req,resp)=>{
    return resp.json({"employee":"employee Rec updated"})
})

/*
Usage:delet emp/product/order
API URL: http://127.0.0.1:8084/api/delete/1
Method Type:DELETE
Required Fields: None
Access Type:Public
*/
router.delete("/delete/:eid",(req,resp)=>{
    return resp.json({"employee":"employee Rec Deleted"})
})

export default router;