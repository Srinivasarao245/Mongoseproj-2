var express = require("express");
var app = express();
var fs=require('fs');
var cors = require('cors');
app.use(cors())
var mongoose = require("mongoose");
var mcurl="mongodb+srv://srinivasaraobagam:9182189245@cluster0.1wfoe.mongodb.net/BookmyShow?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mcurl).then(res=>console.log("connected")).catch((err)=>console.log("devoloper check once"));

app.listen(4600);

// var express = require('express');
// var router = express.Router();

// var Student = require("../model/Students.model");
// var bodyParser = require('body-parser')
// var bodyParser = require('body-parser')

// router.use(bodyParser.json());

// router.get(`/`,(req,res)=>Student.find({})
// .then((data)=>res.json(data))
// .catch(err=>console.log(err)))

// router.post(`/add`,(req,res)=>{
//     console.log(req.body)
//     var nstd = new Student(req.body)
//     nstd.save()
// })

// router.get(`/:id`,(req,res)=>{
//   console.log(req.params.id)
//   Student.findById(req.params.id)
//   .then((data)=>{
//     res.json(data)
//   })
//   .catch((error)=>{
//     res.json(error)
//   })
// })

// router.delete("/deleteStd/:id",(req,res)=>{
//      console.log(req.params.id)
//      Student.findByIdAndDelete(req.params.id)
//      .then((data)=>{  res.json("delete successful")
//      })
//      .catch(((error)=>{  res.send("delete not completed")
//      }))
// })

// module.exports=router;