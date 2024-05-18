const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json());

// configuração da visualização de imagens

const path = require("path");

const uploads = path.join(__dirname,"/uploads");

app.use("/uploads",express.static(uploads));

// importando dados do .env

require("dotenv").config();

const port = process.env.PORT;

// DB Connection
const conn = require("./db/conn");

conn();

//Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(port, function(){
    console.log(`Servidor Online na porta ${port}`)
});



