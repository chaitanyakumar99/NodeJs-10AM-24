import fs from 'fs'
let data=fs.readFileSync('p1.txt','utf-8')
console.log(data)
fs.writeFileSync('p2.txt',data)
console.log("Written Successfully")