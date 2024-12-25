import express from 'express'
import fs from 'fs';
import { get } from 'http';
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
    let emp_data = req.body;
    console.log(emp_data)
    let employees = getEmployees()
    let emp=employees.find((employee)=>{return employee.empId == emp_data.eid})
    console.log(emp_data)
    if(emp){
        return resp.json({"msg":"Employee Already Existes"})
    }
    employees.push(emp_data)
    console.log(employees)
    createEmployees(employees)

    return resp.json({"msg":"New Employee Created"})
})

/*
Usage: read all emp/product/order
API URL: http://127.0.0.1:8084/api/read
Method Type:GET
Required Fields: None
Access Type:Public
*/
router.get("/read",async(req,resp)=>{
    let employees=await getEmployees();
    return resp.json(employees)
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
router.delete("/delete/:eid",async(req,resp)=>{
    let emp_Id = req.params.eid;
    console.log(emp_Id);
    let employees=await getEmployees();
    let emp=employees.find(employee => employee.empId == emp_Id)
    if(!emp){
        return resp.json({"msg":"Buddy Employee Not exits - pls check"})
    }
    let remaining_Employees=employees.filter(employee=> employee.empId != emp_Id)
    console.log(remaining_Employees);
    await createEmployees(remaining_Employees)
    return resp.json({"employee":"employee Rec Deleted"})
})

let getEmployees=()=>{
    let emp_Data=fs.readFileSync('emp.json','utf-8')
    return JSON.parse(emp_Data)
}
let createEmployees=(employees)=>{
    fs.writeFileSync('emp.json',JSON.stringify(employees))
}

export default router;