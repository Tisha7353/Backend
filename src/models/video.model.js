import mongoose from "mongoose";
const videoSchema=new mongoose.Schema({

    videoFile:{
        required:true,
        type:String//cloudinary
    },
    thumbnail:{
        required:true,
        type:String
    },
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    duration:{
        required:true,
        type:Number//cludinary
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
},
{
    timestamps:true
})
export const Video=mongoose.model("Video",videoSchema)