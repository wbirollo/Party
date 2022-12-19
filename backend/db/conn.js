const mongoose =require("mongoose")

async function main(){

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://wbirollo:UMz5n0MOyU3eoq9l@cluster0.0ceha8m.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main