import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name: {
        required:true,
        type : String
    } , 

    title : {
        required:true,
        type : String
    } ,
    
    category : {
        required:true,
        type : String
    },

    price : {
        required:true,
        type : Number
    }
 ,
  image : {
        required:true,
        type : String
  }

} ,{
    timestamps:true
})


export const Book = mongoose.model("Book" , BookSchema)