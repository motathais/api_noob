const mongoose = require("mongoose");

const { Schema } = mongoose;

const atividadeSchema = new Schema({
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
    vencedor: {
         type: String,
    },
    duracao: {
        type: String
    }
}, { timestamps: true });

const Atividade = mongoose.model("Atividade", atividadeSchema)

module.exports = {
    Atividade,
    atividadeSchema
}
