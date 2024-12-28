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
    let emp=employees.find((employee)=>{return employee.eid == emp_data.eid})
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
Usage: get  emp/product/order based on id
API URL: http://127.0.0.1:8084/api/read/102
Method Type:GET
Required Fields: None
Access Type:Public
*/

router.get("/read/:eid",async(req,resp)=>{
	//how to read url data
	let emp_Id = req.params.eid;

	//verify employee exist or not.

	let employees=await getEmployees();
	let employee=employees.find((employee)=>{return employee.eid ==emp_Id})
	if(!employee){
	    return resp.json({"error":"Not Exits"})
	}
	return resp.json(employee)

})

/*
Usage: update all emp/product/order
API URL: http://127.0.0.1:8084/api/update/1
Method Type:PUT
Required Fields: empId,ename,esal
Access Type:Public
*/
router.put("/update/:emp_Id",async(req,resp)=>{
    //read url data 
    let empId = req.params.emp_Id;
    //read form or postman data
    let emp  = req.body;
    console.log("Body Data", emp)
    //verify employee exits or not 
    let employees=await getEmployees()
    let employee=employees.find((employee)=>{return  employee.eid == empId})
    console.log(employee)
    if(!employee){
        return resp.json({"Error":"Employee Not Exits"})
    }
    let remaining_Employees=employees.filter(employee=>employee.eid !=empId)
    remaining_Employees.unshift(emp)
    console.log(remaining_Employees.length)
    createEmployees(remaining_Employees)

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
    let emp=employees.find(employee => employee.eid == emp_Id)
    if(!emp){
        return resp.json({"msg":"Buddy Employee Not exits - pls check"})
    }
    let remaining_Employees=employees.filter(employee=> employee.eid != emp_Id)
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