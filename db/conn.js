const mongoose = require("mongoose")

require("dotenv").config()

async function main(){
    try{

        mongoose.set("strictQuery", true);

        await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.mhidlx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        console.log("Conectado com sucesso!");
    } catch (error){
        console.log(`Erro: ${error}`);
    }

    //rHc142M1AWZ0VK1U
}

module.exports = main;

