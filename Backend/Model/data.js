

const mongoose=require("mongoose");


const demoSchema=new mongoose.Schema({
    name:String,
    price:Number
})

const DemoModal=mongoose.model("demodata",demoSchema)

module.exports={DemoModal}