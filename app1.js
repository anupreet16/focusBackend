// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

const conectString = 'mongodb+srv://abaffyacostac:yAjh2GwjRXwgIDYK@cluster0.d0mojbq.mongodb.net/UserDB?retryWrites=true&w=majority&appName=Cluster0'

// MongoDB connection
mongoose.connect(conectString, { })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
