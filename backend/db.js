const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Neeraj:K12TDTSFZKGYq4DY@cluster0.xul7h84.mongodb.net/Todo_app")

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String
// })

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean
})

// const user =  mongoose.model("Users" , userSchema) 
const todo =  mongoose.model("Todos" , todoSchema)

module.exports = {
    todo
}