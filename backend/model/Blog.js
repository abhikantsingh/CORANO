const mongoose =require ("mongoose");
const Schema=mongoose.Schema;

const BlockSchema=new Schema({
    fname:{type:String},
    lname:{type:String},
    email:{type:String},
    phone:{type:Number},
    content:{type:String}
})

module.exports=mongoose.model("Blog",BlockSchema);