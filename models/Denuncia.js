const mongoose = require("mongoose");

const { Schema } = mongoose;

const denunciaSchema = new Schema({

    idRegistro: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },

},
    { timestamps: true }
);

const Denuncia = mongoose.model("Denuncia", denunciaSchema)

module.exports = {
    Denuncia,
    denunciaSchema
}
