import express from "express"

const app = express()
const PORT = 3026;
app.get('/',(req,res)=>{
    res.json({msg:"Hello Students!"});
})
app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
    
})

//DRY principle
//KISS Principle - Keep it simple,stupid!