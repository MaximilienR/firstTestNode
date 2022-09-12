const express = require('express')
const app = express();
const port =3000;
const indexRouter = require('./routes/index.route')
app.use((req,res,next)=>{
    req.message = "message middleware"
    console.log('middleware')
    next()
})
app.listen(port,()=>{
    console.log(`connect succes to http://localhost:${port}`)
})