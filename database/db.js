const mongoose = require("mongoose");

const db = async () => {
  try {
      let connection = await mongoose.connect(
      "mongodb://localhost:27017/passport"
    );

    console.log(
      `Data Base called ${mongoose.connection.port}`
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}


module.exports = db;