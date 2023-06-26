import mongoose from "mongoose";
import paginate  from "mongoose-paginate-v2";

const resenasSchema= new mongoose.Schema({
  idUser:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },
  comentario:{
    type: String,
    trim: true
  },
  rateExp:{
    type: Number
  }
},{
  timestamps:true
})
resenasSchema.plugin(paginate)
export default mongoose.model('Resena', resenasSchema)