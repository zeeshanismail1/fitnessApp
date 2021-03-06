const express = require('express');
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const morgan = require('morgan');
PORT = process.env.PORT || 5000;
const connectDB = require('./db/connectDB');
const cookieParser=require("cookie-parser")

const app = express(); 
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser())
app.use(cors());
app.use('/api/v1', require('./routes/User'));
app.use('/api/v1/WeightGain', require('./routes/WeightGain')); 
app.use('/api/v1/WeightLoss', require('./routes/WeightLoss')); 
app.use('/api/v1/NormalWeight', require('./routes/NormalWeight')); 
app.use('/api/v1/mailsender',  require('./routes/MailSender'));

const startServer = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};

startServer();
