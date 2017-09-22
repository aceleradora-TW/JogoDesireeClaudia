const express = require('express')
const app = express()
let inicio, fim, numeroRandom, numero;

function numeroAleatorio(min, max) {
  return Math.random() * (10 - 1) + 1;
 }

app.get('/', function (req, res) {
  res.send('OLAR!')
})

app.get('/help', function (req, res) {
  res.sendFile('/home/aluno4/Desktop/servidor/ajuda.html')
})

app.get('/guess/:numero', function (req, res ){
  numero = req.params['numero']
  if (numero == numeroRandom) {
    res.sendFile('/home/aluno4/Desktop/servidor/index.html')
  } else {
    res.send('deu ruim =(')
  }
})

app.get('/update/:inicio/:fim', function (req, res) {
  inicio = req.params['inicio']
  fim = req.params['fim']
  res.send('Número definidos entre ' + inicio + ' e ' + fim +'.')
  numeroAleatorio(inicio, fim)
  numeroRandom = Math.round(numeroAleatorio());
  console.log(numeroRandom);
})

app.listen(3000, function(){
  console.log('Rodando na porta 3000');
})
