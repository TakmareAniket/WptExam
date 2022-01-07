const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


const {messageadd, Display} = require("/chatuser");
const { Messageadd } = require("./chatuser");

/*
app.get("/msg" , asyn(req,res)=>{
const msglist = await Messageadd();
res.json(msglist);
});*/

app.get("/msg", async(req,res) =>{
    const msglist = await Messageadd();
    res.json(msglist);
});

app.post("/msgdis" , async(req,res)=>
{
const dis= req.body;
await Display(chat);
res.json({ message : ("message added")});
});

app.listen(4000, () => console.log("success"));