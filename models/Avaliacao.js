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
    }
},
{timestamps: true} //salva a data de criação e de modificação desse registro
);

const Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema)

module.exports = {
    Avaliacao,
    avaliacaoSchema
}