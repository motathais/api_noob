const mongoose = require("mongoose");

const { Schema } = mongoose;

const partidaSchema = new Schema({
    usuarios: [{
        apelido: {
            type: String,
        }
    }],
    jogo: {
        type: String
    },
    explicacao:
    {
        type: String,
    },
    inicio:
    {
        type: String,
    },
    fim:
    {
        type: String,
    },
    vencedor: [{
        apelido: {
            type: String,
        }
    }],
    pontuacao:
    {
        type: Number,
    },
    registrador:
    {
        type: String,
    }
  
}, { timestamps: true });

const Partida = mongoose.model("Partida", partidaSchema)

module.exports = {
    Partida,
    partidaSchema
}