const mongoose=require("mongoose")
const {Schema}=mongoose
const SaveblogSchema=new Schema({
    blogid:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userlogin"
    },
    author:{
        type:String
    },
    title:{
        type:String
    },
    content:{
        type:String
    },
    description:{
        type:String
    },
    publishedAt:{
        type:String
    },
    url:{
        type:String
    },
    image:{
        type:String
    },
    category:{
        type:String
    },
    favourite:{
        type:String
    }
})
module.exports=mongoose.model('blogsave',SaveblogSchema)