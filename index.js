const inquirer = require("inquirer")
const {emojis} = require("./emojis.json")
function generateRandomEmojiPassword(passwordLength) {
    const password = []
    for(let i = 0; i<passwordLength; i++) {
        const index = Math.floor(Math.random() * 110)
        password.push(emojis[index])
    }
    return password.join("")
}

inquirer.prompt([{
        type:"number",
        name:"response",
        message:"Qual o tamanho da senha?"
    }])
    .then(({response})=> {
        console.log(generateRandomEmojiPassword(response))
    })
    .catch((error) => {
        console.log(error)
    })
