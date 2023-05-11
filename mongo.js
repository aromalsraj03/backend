const mongoose = require("mongoose");

//connecting to data base
mongoose.connect("mongodb+srv://aromalsraj03:aromal@cluster0.hyaly2t.mongodb.net/").then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})


//Scheme creation
const schema = mongoose.Schema;

var courseSchema = new schema ({
    Name:String,
    Email:String,
    Password:String,
    Age:Number
});

var collection = mongoose.model("bloodmanagementsystem",courseSchema);
module.exports = collection;