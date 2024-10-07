const mongoose = require("mongoose");

const { Schema } = mongoose;

const partidaSchema = new Schema({
    usuarios: [{
        nome: {
            type: String,
        }
    }],
    jogo: [{
        titulo: {
            type: String,
        }
    }],
    vencedor: [{
        nome: {
            type: String
        }
    }],
    duracao: {
        type: String
    }
}, { timestamps: true });

const Partida = mongoose.model("Partida", partidaSchema)

module.exports = {
    Partida,
    partidaSchema
}