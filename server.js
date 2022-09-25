const express=require('express');
const ejs=require('ejs')
const app=express();
const{v4:uuidv4}=require('uuid');
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.redirect(`/${uuidv4}`)
})

app.get("/:room",(req,res)=>{
    console.log(req.params.id);
    res.render('room',{roomId:req.params.id})
})
app.listen(4000,()=>{
    console.log(`server is running on port 4000`);
})