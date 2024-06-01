const mongoose = require("mongoose");
const { usuarioSchema } = require("./Usuario");
const { jogoSchema } = require("./Jogo");

const { Schema } = mongoose;

const atividadeSchema = new Schema({

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
    vencedor: [{
        nome: {
            type: String
        }
    }],
    duracao: {
        type: String
    }
}, { timestamps: true });

const Atividade = mongoose.model("Atividade", atividadeSchema)

module.exports = {
    Atividade,
    atividadeSchema
}
