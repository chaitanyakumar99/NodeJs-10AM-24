import http from 'http'

let server = http.createServer((request,response)=>{
    response.end("Hello,GM")
})
server.listen(8080,(err)=>{
    if(err) throw err 
    console.log(`Server Running on: http://localhost:${8080}/`)
})