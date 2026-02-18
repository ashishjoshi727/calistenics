require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute')
const AdoptFormRoute = require('./Routes/AdoptFormRoute')
const AdminRoute = require('./Routes/AdminRoute')
const UserRoute = require('./Routes/UserRoute')
const cors = require('cors');
const path = require('path');
const authMiddleware = require('./Middleware/authMiddleware');

const app = express();

app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",UserRoute)
app.use("/api/pets",petRouter)
app.use('/form', AdoptFormRoute)
app.use('/admin', AdminRoute)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to DB');
        const PORT = 4000;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })