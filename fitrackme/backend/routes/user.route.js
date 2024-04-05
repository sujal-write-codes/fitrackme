import express from 'express';
import { signinUser, signupUser } from '../controllers/user.controller.js'

const router = express.Router();

//login route
router.post('/signin', signinUser)

//signup route
router.post('/signup', signupUser)


export default router;