// zod for input validation
const zod = require("zod")

const creationSchema =  zod.object({
    title: zod.string(),
    description: zod.string()
})

const markedAsDoneSchema = zod.object({
    _id: zod.string()
})

module.exports = {
    creationSchema,
    markedAsDoneSchema
}