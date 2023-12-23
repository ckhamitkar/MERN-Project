const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const courseroutes = require('./routes/courseroutes');
const PORT = process.env.PORT || 3000;
const mongoDB = "mongodb://127.0.0.1:27017/basic-mern-app";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the Database');
    })
    .catch((err) => console.log(err));

app.use(cors());
app.use(courseroutes);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});