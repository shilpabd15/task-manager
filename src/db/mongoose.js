const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_CON_STR, {
    useNewUrlParser: true,
    useCreateIndex: true
})
