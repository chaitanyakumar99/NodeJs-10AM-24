import fs from 'fs'

//fs.readFile(path,encoding,callback)
fs.readFile("p1.txt",'utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
    fs.writeFile('p2.txt',data,(err)=>{
        if(err) throw err
        console.log("File Created and Written success!")
    })

})