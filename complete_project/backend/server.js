const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API is running!");
})

// app.get('/api/notes',(req,res)=>{
//     res.json(notes);
// })

app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT,console.log(`Server run on port ${PORT}`));