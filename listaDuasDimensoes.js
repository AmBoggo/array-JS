//Array pode receber outros array

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias]

console.log(listaAlunosMedias[0][0], listaAlunosMedias[1][0])