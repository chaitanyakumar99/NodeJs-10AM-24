const path =  require('path')

console.log(`Current workind dir - ${path.join(__dirname)}`)
console.log(path.join(__dirname))
console.log(path.join(__filename))


console.log(path.join(__dirname,"one","two","three"))