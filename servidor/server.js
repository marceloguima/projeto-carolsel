const express = require("express")
const app = express()
const porta = 3000

app.use(express.static("../front-end"))

const produtos = [
    {
        id: 1,
        nome: "Calça jeans masculina",
        preco: 79.9,
        imagem: "../imagens/calca-jeans-masculina-slin.png",
    },
    {
        id: 2,
        nome: "Camisa Listrada de Viscose",
        preco: 35.9,
        imagem: "../imagens/camisa-viscose.png",
    },
    {
        id: 3,
        nome: "Calça Pantalona Classic Bege",
        preco: 69.9,
        imagem: "../imagens/calca-platona.png",
    },
    {
        id: 4,
        nome: "Cropped Brisa Tropical",
        preco: 79.9,
        imagem: "../imagens/blusa-estanpada.png",
    },
    {
        id: 5,
        nome: "Polo Texturizada Oliva",
        preco: 59.9,
        imagem: "../imagens/Polo-Texturizada-Oliva.png",
    },
    {
        id: 6,
        nome: "Short Jeans Destroyed Cintura Alta",
        preco: 39.9,
        imagem: "../imagens/Short-Jeans-Destroyed-Cintura-Alta.png",
    },
    {
        id: 7,
        nome: "Bermuda Casual de Sarja Cinza",
        preco: 79.9,
        imagem: "../imagens/Bermuda-Casual-de-Sarja-Cinza.png",
    },
    {
        id: 8,
        nome: "Blusa-Boho-com-Detalhe-em-Renda",
        preco: 79.9,
        imagem: "../imagens/Blusa-Boho-com-Detalhe-em-Renda.png",
    },
    {
        id: 9,
        nome: "Suéter Texturizado Bege",
        preco: 79.9,
        imagem: "../imagens/Suéter-Texturizado-Bege.png",
    },
    {
        id: 10,
        nome: "Suéter Tricot Off White",
        preco: 79.9,
        imagem: "../imagens/Suéter-Tricot-Off-White.png",
    },
];


app.get("/api/produtos", (req, res)=>{
    res.json(produtos)
})

app.listen(porta, ()=>{
    console.log(`servidor rodando em http://localhost:${porta}`)
})