// write basic express boilerplate code
// with express.json middleware

const express = require("express")
// imported db models
const {  todo } = require("./db")


// imported zod schema's
const { creationSchema, markedAsDoneSchema } = require("./types.js")

const app = express()
const port = 3001


app.use(express.json())

// user signup route
app.post("/signup" , (req,res) =>{
    
})

// user signin route
app.post("/signin" , (req,res) =>{

})

// to-do create route
app.post("/todo" , async(req,res) =>{
    const userTask  = req.body
    const response = creationSchema.safeParse(userTask)
    if (!response.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs "
        })
    }else{
        // add userTask to to-do database
        await todo.create({
            title : userTask.title,
            description: userTask.description,
            status: false
        })
        res.json({
            msg: "Todo  created"
        })

    }


})

// Get all todos route
app.get("/todos" , async(req,res) =>{
    const allTodos = await todo.find({})
    res.json({
        todos: allTodos
    })
})

// marked todos as done route
app.put("/marked" , async(req,res) =>{
    const updatePayload = req.body
    const responseMarked = markedAsDoneSchema.safeParse(updatePayload)
    if (!responseMarked.success) {
        res.status(411).json({
            msg: "no such id exists"
        })
    }else{
        await todo.updateOne({
            _id: req.body._id
        },{
            status : true
        })
        res.json({
            msg: "Marked as completed"
        })

    }

})



app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})