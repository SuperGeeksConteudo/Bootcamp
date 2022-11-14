const serverless = require("serverless-http")
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const endereco = "mongodb+srv://"
const opcao = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(endereco, opcao)

const esquema = new mongoose.Schema({
    placa: String,
    modelo: String,
    cor: String,
    ano: Number
})

const carro = mongoose.model("carro", esquema)

const servidor = express()

servidor.use(express.json())
servidor.use(cors())

servidor.get("/", function(requisicao, resposta) {

    carro.find()

        .then(function(resultado) {

            resposta.status(200).json(resultado)

        })

        .catch(function(erro) {

            console.log(erro.message)

            resposta.status(500).json({ erro: erro.message })

        })
})

servidor.post("/", function(requisicao, resposta) {
    
    const novoCarro = new carro(requisicao.body)

    novoCarro.save()

        .then(function(resultado) {

            resposta.status(201).json(resultado)

        })

        .catch(function(erro) {

            console.log(erro.message)

            resposta.status(500).json({ erro: erro.message })

        })
})

module.exports.express = serverless(servidor)