import path from 'path'

//console.log(path.join(__dirname)) //ReferenceError: __dirname is not defined in ES module scope
console.log(path.join(process.cwd()))
console.log(path.join(process.cwd(),"employees","one","two"))
//console.log(path.join(__filename))  //pathex.js