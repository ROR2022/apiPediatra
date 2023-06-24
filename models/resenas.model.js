import mongoose from "mongoose";

const resenasSchema= new mongoose.Schema({
  nameUser:{
    type: String,
    trim: true
  },
  marca:{
    type: String,
    trim: true
  },
  formato:{
    type: String,
    trim: true
  },
  tipo:{
    type: String,
    trim: true
  },
  description:{
    type: String,
    trim: true
  },
  link:{
    type: Array
  },
  imageUrl:{
    type: String,
    trim: true
  }
})

export default mongoose.model('Resena', resenasSchema)