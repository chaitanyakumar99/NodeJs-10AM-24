import http from 'http'
import fs from 'fs'

let server = http.createServer((request,response)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err) throw err 
        response.end(data)
    })    
})
server.listen(8080,(err)=>{
    if(err) throw err 
    console.log(`Server Running on: http://localhost:${8080}/`)
})