const asyncHandler=require("express-async-handler");
const Contact = require('../models/contactModel');



//@desc get all contacts
//@route Get /api/contacts/:id
//@access public

const { errorHandeler } = require("../middleware/errorHandeler");

const getContacts=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get all contact"});
});


const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`});
});


//@desc create contacts
//@route POST /api/contacts
//@access public

const createContact=asyncHandler(async(req,res)=>{
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all fields are required");
    }
    
    res.status(200).json({message:"create  contact"});
});
//@desc update contacts
//@route put/api/contacts/:id
//@access public

const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
});//@desc delete contacts
//@route delete /api/contacts/:id
//@access public
const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`del contact for ${req.params.id}`});
});
module.exports={getContacts, getContact, updateContact, deleteContact,createContact};