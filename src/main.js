const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pergunta(questao) {
    return new promise((resolve) => {
        rl.question(questao, (resposta) => {
            resolve(resposta);
        });
    })
}

async function perguntarNome() {
      const primeiroNome = await pergunta('Qual seu nome? ');
      const ultimoNome = await pergunta('Qual seu sobrenome? ');
      
     console.log(`Olá, ${primeiroNome} ${ultimoNome}`);
      
    }





perguntarNome();


