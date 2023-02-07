// Ver se está incluso na lista - INCLUDES
// .includes .indexOf
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];


function procuraAluno(aluno){
    const t = alunos.indexOf(aluno)
    if (alunos.includes(aluno)) {
        console.log(aluno, medias[t])
    } else console.log("não")
} 

procuraAluno("Ana")