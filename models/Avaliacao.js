const mongoose = require("mongoose");

const { Schema } = mongoose;

const avaliacaoSchema = new Schema({

    usuario: {
        type: String,
    },
    jogo: {
        type: String,
    },
    beleza: {
        type: Number,
    },
    divertimento: {
        type: Number,
    },
    duracao: {
        type: Number,
    },
    preco: {
        type: Number,
    },
    armazenamento: {
        type: Number,
    },
    nota: {
        type: Number,
    },
},
{timestamps: true} 
);

const Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema)

module.exports = {
    Avaliacao,
    avaliacaoSchema
}