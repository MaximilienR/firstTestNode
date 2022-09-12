//page router
const express =require('express')
const router = express.Router()

//Home 
router.get('/',(req,res)=>{
    res.render('index',{title:"home "})
 })
 //Contact 
router.get('/contact',(req,res,)=>{
    res.render('contact',{title:"contact "})
 })

 module.exports=router;