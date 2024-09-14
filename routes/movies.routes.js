import express from 'express';
import {
  MovieDelete,
  MovieUpdate , 
  MovieCreate, 
  MovieIndex 
} from '../controllers/movies.controller';

const router = express.Router(); 

//CRUD Functionality of movies
//R - For Reading
router.get("/",MovieIndex);
//C - For creating movies
router.post("/",MovieCreate);
//U - For Updating movies
router.put("/:id",MovieUpdate);
//D - For Deleting movies
router.delete("/:id",MovieDelete);

export default router;