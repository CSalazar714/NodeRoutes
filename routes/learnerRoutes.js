const express = require('express')
const data = require('../data/learnerData')
const learnerRoute = express.Router()

//All Learners
learnerRoute.get('/', (req,res)=> {
    res.status(200).json({learners: data})
})

//URL Bar =>Param
//"invisible" => BODY
learnerRoute.get('/:idx', (req,res)=>{
    let idx = Number( req.params.idx)

    if(idx >= data.length || idx < 0){
        res.status(404).json({message: "Learner Not Found"})
    } 
    res.status(200).json({learner: data[idx]})
})

module.exports = learnerRoute