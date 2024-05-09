const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://sdouglas:Painho123@1@databasebarbearia.uolz7gq.mongodb.net/?retryWrites=true&w=majority&appName=DataBaseBarbearia"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`${error}`);
  }
}

module.exports = main;
