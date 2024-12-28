import bcrypt from 'bcrypt'

let user ={
    'email':'rahul@gmail.com',
    'cc':'1234123456785678',
    'cvv':'143'
}
let salt = bcrypt.genSaltSync("Rajni");

let new_CC = bcrypt.hashSync(user.cc,salt)
let new_CVV = bcrypt.hashSync(user.cvv,salt)

console.log(user.cc)
console.log(new_CC)
console.log(user)
user = {
    ...user, cc:new_CC,cvv:new_CVV
}

console.log(user)