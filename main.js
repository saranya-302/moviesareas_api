import express from "express"
import movieRoutes from "./routes/movies.routes.js"
const app = express()
const PORT = 3026;
app.get('/',(req,res)=>{
    res.json({msg:"Hello Students!!"});
})

//CRUD functionality of movies
app.use("/movies",movieRoutes)
app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
    
})

//DRY principle
//KISS Principle - Keep it simple,stupid!