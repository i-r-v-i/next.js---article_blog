const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { PORT = 3003, MONGO_URL='mongodb://127.0.0.1:27017/article-blog' } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/post', require('./routes/posts.routes.js'));


async function start() {
    try {
        await mongoose.connect(MONGO_URL);
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
          });
    } catch (err) {
        console.log(err)
    }
}

start() 