const mongoose = require("mongoose");
const { usuarioSchema } = require("./Usuario");
const { jogoSchema } = require("./Jogo");

const { Schema } = mongoose;

const atividadeSchema = new Schema({

    usuarios: {
        type: [usuarioSchema],
    },
    jogo: {
        type: [jogoSchema],
    },
    vencedor: {
        type: [usuarioSchema],
    },
    duracao: {
        type : String,
    }
},
{timestamps: true} //salva a data de criação e de modificação desse registro
);

const Atividade = mongoose.model("Atividade", atividadeSchema)

module.exports = {
    Atividade,
    atividadeSchema
}