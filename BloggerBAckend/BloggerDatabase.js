const mongoose=require('mongoose')
const mongooseUrl="mongodb://127.0.0.1:27017/You-Blog"
const connecttomongo=()=>{
    mongoose.connect(mongooseUrl,console.log("You have been Successfully Connected with You-Blog at MongoDB"))
}
module.exports=connecttomongo;