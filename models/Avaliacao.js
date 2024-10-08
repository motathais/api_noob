const mongoose = require("mongoose");
const { usuarioSchema } = require("./Usuario");
const { jogoSchema } = require("./Jogo");

const { Schema } = mongoose;

const avaliacaoSchema = new Schema({

    usuario: {
        type: [usuarioSchema],
    },
    jogo: {
        type: [jogoSchema],
    },
    nota: {
        type: Number,
    },
    comentario: {
        type: String,
    }
},
{timestamps: true} 
);

const Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema)

module.exports = {
    Avaliacao,
    avaliacaoSchema
}