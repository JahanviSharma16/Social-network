const mongoose = require('mongoose');

const mongo="mongodb://0.0.0.0:27017/socialMediaChatApp"
const connectDatabase = () => {
    mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;
