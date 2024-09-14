import express from 'express';
const router = express.Router(); 

//CRUD Functionality of movies
//R - For Reading
router.get("/",(req,res)=>{
  res.send("Get all movie list");
});
//C - For creating movies
router.post("/",(req,res)=>{
  res.send("create a movie");

});
//U - For Updating movies
router.put("/:id",(req,res)=>{
  res.send("update a movie");

});
//D - For Deleting movies
router.delete("/:id",(req,res)=>{
  res.send("delete a movie");

});

export default router;