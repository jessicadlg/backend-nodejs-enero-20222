const mongoose = require("mongoose");
const config = require("./index");

const connection = async () => {
    try {
        await mongoose.connect(config.uri);

    console.log("MongoDb success")
    }catch(error)
    {
        console.log(error)
    }
}

module.exports = {connection, mongoose}

////////////////////////////////////////
