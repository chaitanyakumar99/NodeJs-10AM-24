import bcrypt from 'bcrypt'
let user ={
    email:"rahul@gmail.com",
    password:'ILI',
    CC:'123412341111222',
    CVV:'123'
}
let salt= bcrypt.genSaltSync(10)
let new_Psw=bcrypt.hashSync(user.password,salt)
console.log(user)
user = {...user, password:new_Psw}
console.log(user)