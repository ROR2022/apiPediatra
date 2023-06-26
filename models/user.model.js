import mongoose from "mongoose";
import paginate  from "mongoose-paginate-v2";

const userSchema= new mongoose.Schema({
  name:{
    type: String,
    trim: true
  },
  avatarUrl:{
    type: String,
    trim: true
  },
  email:{
    type: String,
    trim: true,
    required:true,
    unique: true
  },
  resenas:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resena',
  }]
},{
    timestamps:true
})

userSchema.plugin(paginate)
export default mongoose.model('User', userSchema)