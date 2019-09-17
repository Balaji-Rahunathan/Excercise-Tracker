const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user')

router.get('/',(req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err =>res.status(400).json('Error: '+err))
})

router.post('/add',(req,res)=>{
    const newUser = new User({username:req.body.username})
    newUser.save()
    .then(()=> res.json('User Added'))
    .catch(err=> res.status(400).json("Error: "+err))
})

module.exports = router