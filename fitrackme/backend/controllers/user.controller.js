import User from '../model/user.model.js';
import jwt from 'jsonwebtoken';

//Generate token for user
const createToken = (_id) => {
    return jwt .sign({ _id }, process.env.SECRET_KEY, { expiresIn: '3d' })
};

//signin user
export const signinUser = async (req, res) => {
    const{email, password} = req.body
    try{
        const user = await User.signin(email, password);

        //create a token
        const token = createToken(user._id);

        //return the response with the token
        res.status(200).json({email, token});
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

//signup user
export const signupUser = async (req, res) => {
    const {username, email, password} = req.body
    try{
        const user = await User.signup(username, email, password);

        //create a token
        const token = createToken(user._id);

        //return the response with the token
        res.status(200).json({username, email, token});
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
}