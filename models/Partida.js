const mongoose = require("mongoose");

const { Schema } = mongoose;

const partidaSchema = new Schema({
    usuarios: [{
        apelido: {
            type: String,
        }
    }],
    jogo: {
        type: String,
    },
    explicacao: {
        type: String,
    },
    inicio: {
        type: Date, // Tipo Date para armazenar dia e hora
    },
    fim: {
        type: Date, // Tipo Date para armazenar dia e hora
    },
    vencedor: [{
        apelido: {
            type: String,
        }
    }],
    pontuacao: {
        type: Number,
    },
    registrador: {
        type: String,
    },
    duracao: {
        type: Number, // Duração em horas como número
    }
}, { 
    timestamps: true, 
});

const Partida = mongoose.model("Partida", partidaSchema);

module.exports = {
    Partida,
    partidaSchema
};
