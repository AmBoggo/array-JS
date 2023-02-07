const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
const todasSalas = salaJS.concat(salaJava, salaPython)


const somaGeral = todasSalas.reduce((acc,nota) => acc+nota) 
console.log((somaGeral/todasSalas.length).toFixed(2))