const express = require("express")
const bodyParser =require ('body-parser')
const {application} = require ('express')

const learnerRoute = require('./routes/learnerRoutes')
const app = express()
app.use(bodyParser.json())
app.use('/learners', learnerRoute)
app.get('/', (req,res)=>{
    res.status(200).json({message: 'learnerStart!'})
})
const port = 6000
app.listen(port, ()=> {
    console.log("I Live!!!")
})
