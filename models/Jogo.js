const mongoose = require("mongoose");

const { Schema } = mongoose;

const jogoSchema = new Schema({

    titulo: {
        type: String,
        required: true
    },
    ano: {
        type: String,
    },
    idade: {
        type: Number,
    },
    designer: {
        type: String,
    },
    artista: {
        type: String,
    },
    editora: {
        type: String,
    },
    digital: {
        type: String,
    },
    categoria: {
        type: String,
    },
    componentes: {
        type: String,
    },
    descricao: {
        type: String,
    }
},
{timestamps: true} //salva a data de criação e de modificação desse registro
);

const Jogo = mongoose.model("Jogo", jogoSchema)

module.exports = {
    Jogo,
    jogoSchema
}