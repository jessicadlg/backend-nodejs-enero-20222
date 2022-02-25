const mongoose = require('mongoose');
const config = require('./index');

const connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.db_username}:${config.db_password}@${config.db_host}/${config.db_name}`
    );

    console.log('DB connected to:', mongoose.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connection, mongoose };
