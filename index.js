/* Programa criado por Eduardo Marques da Silva.
Olá bem vindo ao meu codigo de conversão Csv --> JSON.
Nesse programa utilizei a biblioteca "CSVTOJSON",
com instalação no terminal por:
npm i --save csvtojson
*/

//Declaração de constantes
const fs = require('fs');
const caminho = 'input.csv'
const conversao = require('csvtojson')


conversao()
.fromFile(caminho)
.then((json)=>{
    fs.writeFileSync("output.json", JSON.stringify(json, null, "\t"), 'utf8', 
    function(err){
        console.log(err);
    });
})