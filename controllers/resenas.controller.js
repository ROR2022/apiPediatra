import Resena from "../models/resenas.model.js";
import User from "../models/user.model.js";
import { addToLoggerFile } from "../lib/helperLib.js";


export const createResena = async(req,res)=>{
    let objRes= {
        msg:'Creando Reseña'
    }
    try {
        const newResena = new Resena({...req.body})
        const {idUser} =req.body;
        newResena.save()
        if(newResena){
            
            const addResenaUser= await User.findByIdAndUpdate({_id:idUser},{ $addToSet: { resenas: newResena } },{new:true});
            objRes={
                ...objRes,
                newResena,
                addResenaUser
            }
        }
        await addToLoggerFile(JSON.stringify(objRes))
        console.log(objRes);
        return res.status(200).json(objRes);
    } catch (error) {
        objRes={
            ...objRes,
            error
        }
        console.log(objRes);
        await addToLoggerFile(JSON.stringify(objRes))
        return res.status(500).json(objRes);
    }
}

export const getAllResenas = async(req,res)=>{
    let objRes={
        msg:'Recuperando Reseñas...'
    }
    try {
        const { page = 1, limit = 10, populate = 'User' } = req.query;
        const query={};
        const options={
            page:1,
            limit:10,
            populate: "idUser"
        };
      await Resena.paginate(query, options, (err, docs) => {
        if(docs){
            const tempDocs = docs;
            //console.log('typeof tempDos:..', typeof tempDocs);
            //console.log('tempDocs:..',tempDocs);

            tempDocs?.docs?.reverse();
            objRes={
                ...objRes,
                docs:tempDocs
            }
        }
        
        if(err){
            console.log('Error en Paginate:...',err)
        }else{
            //console.log(objRes)
        }
        addToLoggerFile(JSON.stringify(objRes))
        return res.status(200).json(objRes)
        
      });
        
    } catch (error) {
        objRes={
            ...objRes,
            error
        }
        await addToLoggerFile(JSON.stringify(objRes))
        return res.status(500).json(objRes)
    }
}