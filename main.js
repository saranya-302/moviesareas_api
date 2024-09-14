import express from "express"

const app = express()
const PORT = 3026;
app.get('/',(req,res)=>{
    res.json({msg:"Hello Students!"});
})

//CRUD Functionality of movies
//R - For Reading
app.get("/movies",()=>{});
//C - For creating movies
app.post("/movies",()=>{});
//U - For Updating movies
app.put("/movies",()=>{});
//D - For Deleting movies
app.delete("/moives",()=>{});
app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
    
})

//DRY principle
//KISS Principle - Keep it simple,stupid!