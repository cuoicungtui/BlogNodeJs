const mongoose = require('mongoose');

async function conect(){
   
    try {

         await mongoose.connect('mongodb://localhost:27017/quoc_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true
         });

         console.log("successfully");

    } catch (error) {
        console.log('erro');
    }
}

module.exports = {conect};