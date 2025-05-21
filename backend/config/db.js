const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}=Cluster0`)
    // cyan.underline is a color method from colors package
    // it will give cyan color to the text and underline it
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB