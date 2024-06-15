const mongoose= require ('mongoose');


const UserSchema= new mongoose.Schema({
    id: String,
    first_name:String,
    last_name:String,
    birthday:String,
});

module.exports=mongoose.model('User', UserSchema);