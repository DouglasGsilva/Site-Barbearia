const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://sdouglas968:1GaNhnCRAzvWoRLB@cluster0.v21x35v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`${error}`);
  }
}

module.exports = main;
//1GaNhnCRAzvWoRLB
