import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
import validator from "validator";

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
      },
}, 
    {timestamps: true}
);

//static signup method
userSchema.statics.signup = async function(username, email, password) {
    //validate the data
    if (!username || !email || !password){
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error("Invalid Email")
    };
    if (!validator.isStrongPassword(password)) { 
        throw Error("Password is not strong enough")
    }

    //check if the username or email is already in use
    const exists = await this.findOne({$or: [{ username }, { email }] })  
    
    if(exists)
    {
        if (exists.username === username)
        {
            throw new Error('Username already in use'); 
        } 
        else
        {
        throw Error('Email already in use')
        }
    }

    //hashing the password
    const salt = await bcryptjs.genSalt(10)
    const hash = await bcryptjs.hash(password, salt)

    //returning the user
    const user = await this.create({username, email, password:hash})
    return user;
}

    // static signin method
    userSchema.statics.signin = async function(email, password) {
    
    if (!email || !password){
        throw Error('All fields must be filled')
    }

    //Find a user by their email
    const user = await this.findOne({ email });

    if(!user) {
        throw Error ('Incorrect Email')
    }

    //Check if the password is correct
    const validPass = await bcryptjs.compare(password, user.password);

    if(!validPass) {
        throw Error ('Passwords does not match')
    }

    return user;
}


const User = mongoose.model('User', userSchema);

export default User