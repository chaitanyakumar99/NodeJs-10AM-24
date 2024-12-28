import express from 'express'
import EmployeeModel from '../model/Employee.js'
//create express router for implemening routing
let router = express.Router();
//Employee Router Root Request
//API: http://127.0.0.1:8080/emp/
router.get("/",(req,resp)=>{
    return resp.json({"message":"Employee Router - Root Req"})
})
/*
Usage: featch all employees
API URL: http://127.0.0.1:8084/emp/read
API URL: http://127.0.0.1:8084/emp/all
API URL: http://127.0.0.1:8084/emp/
Method Type:GET
Req Fields:
Access Type:Public
*/
router.get("/read",async(req,resp)=>{
    try {
        let employees=await EmployeeModel.find();
        return resp.json(employees)
        
    } catch (err) {
        return resp.json({"message":err.message})
    }
})
/*
Usage: create new employee
API URL: http://127.0.0.1:8084/emp/create
API URL: http://127.0.0.1:8084/emp/
Method Type:POST
Req Fields:eid,ename,esal,eloc
Access Type:Public
*/
router.post("/create",async(req,resp)=>{
    try {
            let emp_data= req.body;
            console.log(emp_data)
            let emp_obj=await EmployeeModel.findOne({'eid':emp_data.eid})
            console.log(emp_obj)
            if(emp_obj){
                return resp.json({"message":"Employee Already Exits"})
            }
            let employee=new EmployeeModel(emp_data)
            employee=await employee.save();
            console.log(employee)
            return resp.json({"message":"New Employee Created"})
    } catch (err) {
        return resp.json({"error":err.message})
    }
})



/*
Usage: delete employee based on id
API URL: http://127.0.0.1:8084/emp/delete/101
API URL: http://127.0.0.1:8084/emp/101
Method Type:DELETE
Req Fields: None
Access Type:Public
*/
router.delete("/delete/:emp_Id",async(req,resp)=>{
    try {
        let emp_Id = req.params.emp_Id;
        let emp_obj =await EmployeeModel.findOne({"eid":emp_Id});
        if(!emp_obj){
            return resp.json({"message":"Employee Not Exits"})
        }
        console.log(emp_obj)
        emp_obj=await EmployeeModel.findByIdAndDelete(emp_obj._id)
        return resp.json({"msg":"Deleted Succcessfully","Deleted Emp":emp_obj})
        
    }  catch (err) {
        return resp.json({"error":err.message})
    }
})

/*
Usage: update employee based on id
API URL: http://127.0.0.1:8084/emp/update/101
API URL: http://127.0.0.1:8084/emp/101
Method Type:PUT
Req Fields: eid,ename,esal,eloc
Req Fields: ename,esal,eloc
Access Type:Public
*/
router.put("/update/:emp_Id",async(req,resp)=>{
    try {
        
        let emp_Id = req.params.emp_Id;
        let update_Emp_info=req.body;
        console.log(update_Emp_info)
        let emp_obj=await EmployeeModel.findOne({'eid':emp_Id})
        console.log(emp_obj)
        if(!emp_obj){
            return resp.json({"message":"Employee Not Extis"})
        }
        let x=await EmployeeModel.findByIdAndUpdate(emp_obj._id,{update_Emp_info})
        console.log("value",x)
        return resp.json({"message":"Updated Successfully"})

        
    } catch (err) {
        return resp.json({"error":err.message})
    }
})


export default router;