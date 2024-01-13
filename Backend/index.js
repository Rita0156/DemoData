 const {connectDB}=require("./db")
 const express = require("express")
const cors=require("cors")
const {DemoModal}=require("./Model/data")
const { Query } = require("mongoose")

//const {paginatedResults}=require("./Middleware/pagination")

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

//  function paginatedResults(model) {
//     // middleware function
//     return (req, res, next) => {
//       const page = parseInt(req.query.page);
//       const limit = parseInt(req.query.limit);
   
//       // calculating the starting and ending index
//       const startIndex = (page - 1) * limit;
//       const endIndex = page * limit;
   
//       const results = {};
//       if (endIndex < model.length) {
//         results.next = {
//           page: page + 1,
//           limit: limit
//         };
//       }
   
//       if (startIndex > 0) {
//         results.previous = {
//           page: page - 1,
//           limit: limit
//         };
//       }
   
//       results.results = model.slice(startIndex, endIndex);
   
//       res.paginatedResults = results;
//       next();
//     };
//   }


 app.get("/data",async(req,res)=>{
   // const data=await DemoModal.find()
    const page=req.query.page*1|| 1;
    const limit=req.query.limit*1 || 6;
    const skip=(page-1)*limit
    //const queryFunc=;
    const result= await DemoModal.find().skip(skip).limit(limit)
    res.json(result)
 })

 app.get("/asd",async(req,res)=>{
    const page=req.query.page*1|| 1;
    const limit=req.query.limit*1 || 6;
    const skip=(page-1)*limit
     var mysort={price:1}
     
     const result= await  DemoModal.find().sort(mysort).skip(skip).limit(limit)

     res.json(result)
 })

 app.get("/dsd",async(req,res)=>{
    const page=req.query.page*1|| 1;
    const limit=req.query.limit*1 || 6;
    const skip=(page-1)*limit
   // var mysort={price:-1}
    var mysort={price:-1}
     
    const result= await  DemoModal.find().sort(mysort).skip(skip).limit(limit)

    res.json(result)
})

app.get("/search",async (req,res)=>{
    console.log("inside query")
    
    const name=req.query.name
    console.log(name)
    //const skip=(page-1)*limit
    
        const result= await DemoModal.find({name:name
            
        })
        res.json(result);
    
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
