 const {connectDB}=require("./db")
 const express = require("express")
const cors=require("cors")
const {DemoModal}=require("./Model/data")

const app=express()
app.use(cors())
 app.use(express.json())

 app.get("/",(req,res)=>{
    res.json("api is running successfully DEMO_INT")
 })

 app.post("/create",async(req,res)=>{
    
    const {name,price}=req.body

    try{
        const user = new DemoModal({
            name,
            price,
        })
        await user.save()
        res.json("data created successfully")
    }
    catch(err){
          console.log(err);
          res.json(err)
    }
    

 });

 app.get("/data",async(req,res)=>{
    const result= await DemoModal.find()
    res.json(result)
 })

 app.get("/asd",async(req,res)=>{
     var mysort={price:1}
     
     const result= await  DemoModal.find().sort(mysort)

     res.json(result)
 })

 app.get("/dsd",async(req,res)=>{
   // var mysort={price:-1}
    var mysort={price:-1}
     
    const result= await  DemoModal.find().sort(mysort)

    res.json(result)
})

app.get("/data?name",async(req,res)=>{
    const q={}
    q.name=req.query
    if(q==true){
        const result= await DemoModal.find(q)
       res.json(result)
    }else{
        res.json("something went wrong")
    }
})


//  var mysort = { name: 1 };
//   dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });

 app.listen(7000,async()=>{
     try{
       await connectDB;
       console.log("cunnected to db");
     }
     catch(err){
        console.log("failed to connect db");
        console.log(err);
     }
     console.log("running port is 7000");
 })
