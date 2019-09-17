const router = require('express').Router()
const Excercise = require('../models/excercise')

router.post('/',(req,res)=>{
    Users.find()
    .then(users=>res.json(users))
    .catch(err =>res.status(400).json('Error: '+err))
})

router.post('/add',(req,res)=>{
    const username = req.body.username
    const description = req.body.description
    const duration = req.body.duration
    const date = req.body.date

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date
    })

    newExcercise.save()
    .then(()=> res.json('Excercise Added'))
    .catch(err=> res.status(400).json("Error: "+err))
})

module.exports = router