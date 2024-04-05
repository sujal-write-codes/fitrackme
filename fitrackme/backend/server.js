import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
dotenv.config();

//express app
const app = express()

//Listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

//connecting database to the backend
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});

//middleware to parse json data in
app.use(express.json( )); 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the app'})
})


//telling our application that we will be using 
app.use('/api/users', userRoutes);
