const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/fileupload";

const connection = async(res, req, next) => {
    try{
        await mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log("MongoDB connected"))
        .catch((err)=> res.json(err))
    } catch(err){
        res.json(err)
    }
}

module.exports = connection;