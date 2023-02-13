let email = "jaehyeon@naver.com"
// undefined
let user = email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
let userbox = [];
// undefined
userbox.push(user[0])
// 1
userbox.push(user[1])
// 2
userbox.push(user[2])
// 3
userbox.push(user[3])
// 4
userbox.push("*")
// 5
userbox.push("*")
// 6
userbox.push("*")
// 7
userbox.push("*")
// 8
let username = userbox.join("")
// undefined
let newEmail = username + "@" + company
// undefined