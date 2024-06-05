const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    
    nome: {
        type: String,
        required: true
    },
    apelido: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date,
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    src:{
        type: String,
        //required: true
    }
},
//{timestamps: true}
);

module.exports = mongoose.model("Usuario", UsuarioSchema);

