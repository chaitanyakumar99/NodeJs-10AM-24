import fs from 'fs'
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err){
        console.log(`Unable to Read  - : ${err.message} `)
    }else{
       
        let users = JSON.parse(data)
        let male_Users=users.filter(user=>user.gender ==="Male")
        let female_Users=users.filter(user=>user.gender ==="Female")
        let other_Users=users.filter(user=>user.gender !=="Female" && user.gender !=="Male" )
        console.log(male_Users.length)
        console.log(female_Users.length)
        console.log(other_Users.length)
        
    }
})