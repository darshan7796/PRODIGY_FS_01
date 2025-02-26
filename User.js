const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
//
const UserSchema=new mongoose.Schema({
    username:{ type:String, required: true, unique: true},
    email: { type:String, required: true, unique: true },
    password: { type:String, required: true}
});

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();  
    this.password=await bcrypt.hash(this.password,10);
    next();
});
module.exports=mongoose.model('User',UserSchema);

/*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzFmYzllMGUwMzZhZDBkZGEyN2Q3ODUiLCJpYXQiOjE3MzAxMzc3MzIsImV4cCI6MTczMDE0MTMzMn0.q2qSSu06d7Epmw6k6gYQeDo8jdgLwRTeIoybtUXXEkc*/