import express from "express"
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.post("/auth", (req, res)=>{
    console.log(req.body)
    res.json("success")
})

app.post("/registration", (req, res)=>{
    console.log(req.body.values.login)
    res.json({"access":"Доступ открыт", "username":req.body.values.login})
})


app.listen(5000, ()=>{
    console.log("Server working...")
})