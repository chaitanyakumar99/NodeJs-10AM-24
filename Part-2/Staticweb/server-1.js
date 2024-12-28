import http from 'http'
import fs from 'fs'
import path from 'path'

let server = http.createServer((req,resp)=>{
    resp.end("Hello,GM")
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server Running.... http://127.0.0.1:${8080}/`)
})