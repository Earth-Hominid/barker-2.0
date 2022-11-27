const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const connectToDatabase = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected: ${connectToDatabase.connection.host.cyan.underline}`
    );
  } catch (error) {
    console.error(error.message);

    // Exit processs with failure
    process.exit(1);
  }
};

module.exports = connectDatabase;
