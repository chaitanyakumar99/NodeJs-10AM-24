
import fs from 'fs'
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err 
    fs.writeFile('emp.json',data,(err)=>{
        if(err) throw err 
        console.log("New File Created")
    })
})