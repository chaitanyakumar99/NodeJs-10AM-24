import fs from 'fs'
fs.readFile('users1.json','utf-8',(err,data)=>{
    if(err){
        console.log(`Unable to Read  - : ${err.message} `)
    }else{
        console.log(typeof data)
        let users = JSON.parse(data)
        console.log(typeof users)
        console.log(users.length)
        
    }
})