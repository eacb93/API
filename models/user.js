const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true, unique:false},
    lastName:{type:String, required:true, unique:false},
    email:{type:String, required:true, unique:false}
})

module.exports = mongoose.model('User', userSchema)