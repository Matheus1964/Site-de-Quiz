/* Aula 20 MaiaQuiz  */
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img') // ADICIONE
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
  numQuestao: 0,
  imagem: '0.png', // ADICIONE
  pergunta: 'Pergunta',
  alternativaA: 'Alternativa A',
  alternativaB: 'Alternativa B',
  alternativaC: 'Alternativa C',
  alternativaD: 'Alternativa D',
  correta: '0'
}
const q1 = {
  numQuestao: 1,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'Plano que determina o número de amostras a serem retiradas de uma batelada, lote ou população, com o objetivo de se obter informações sobre a qualidade e possibilitar uma tomada de decisão.',
  alternativaA: 'Planos de amostragem',
  alternativaB: 'Brainstoming',
  alternativaC: 'Conjunto de formula',
  alternativaD: 'Nenhuma das questões',
  correta: 'Planos de amostragem'
}
const q2 = {
  numQuestao: 2,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'Entende-se por Limite de Tolerância, para os fins desta Norma, a concentração ou intensidade máxima ou mínima, relacionada com a natureza e o tempo de exposição ao agente, que não causará dano à saúde do trabalhador, durante a sua vida laboral.',
  alternativaA: 'PDCA',
  alternativaB: 'Nenhuma das questões',
  alternativaC: 'Parâmentros de tolerância',
  alternativaD: 'Brainstoming',
  correta: 'Parâmentros de tolerância'
}
const q3 = {
  numQuestao: 3,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'É um conjunto de unidades do produto, do qual a amostra é retirada e inspecionada para determinar o cumprimento com o critério de aceitação',
  alternativaA: 'Planos de amostragem',
  alternativaB: 'PDCA',
  alternativaC: 'Histograma',
  alternativaD: 'Lotes de inspeção',
  correta: 'Lotes de inspeção'
}
const q4 = {
  numQuestao: 4,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'É conjunto de ensaios realizados, geralmente por laboratórios de análises químicas, em amostras de materiais e produtos e que tem como principal objetivo a verificação das suas propriedades e características físicas e químicas.',
  alternativaA: 'Ensaio físicos-químico',
  alternativaB: 'Fluxograma',
  alternativaC: 'Brainstoming',
  alternativaD: 'Conjunto de formula',
  correta: 'Ensaio físicos-químico'
}
const q5 = {
  numQuestao: 5,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'São documentos criados para estabelecer um conjunto de regras sobre um determinado assunto ou atividade.',
  alternativaA: 'Diagrama de disperção',
  alternativaB: 'Fluxograma',
  alternativaC: 'Normas técnicas',
  alternativaD: 'Nenhuma das questões',
  correta: 'Normas técnicas'
}
const q6 = {
  numQuestao: 6,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'É o que estuda o significado das palavras. O significado pode ser diferente dependendo do interlocutor.',
  alternativaA: 'Semântico',
  alternativaB: 'Sintaxe',
  alternativaC: 'paralelismo',
  alternativaD: 'Percepção',
  correta: 'Semântico'
}
const q7 = {
  numQuestao: 7,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'Como é chamada a atividade desenvolvida para explorar a potencialidade criativa de um indivíduo ou de um grupo?',
  alternativaA: 'Parâmentros de tolerância',
  alternativaB: 'PDCA',
  alternativaC: 'Brainstorming',
  alternativaD: 'Normas técnicas',
  correta: 'Brainstorming'
}
const q8 = {
  numQuestao: 8,
  imagem: 'sennai.png', // ADICIONE
  pergunta:
    'É um tipo de diagrama, que também pode ser entendido como uma representação esquemática de um processo ou algoritmo, muitas vezes feito através de gráficos que ilustram de forma descomplicada',
  alternativaA: 'Fluxograma',
  alternativaB: 'Semântico',
  alternativaC: 'Diagrama de disperção',
  alternativaD: 'Histograma',
  correta: 'Fluxograma'
}
const q9 = {
  numQuestao: 9,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'É um método iterativo de gestão de quatro passos, utilizado para o controle e melhoria contínua de processos e produtos.',
  alternativaA: 'PDCA',
  alternativaB: 'Semântico',
  alternativaC: 'Percepção',
  alternativaD: 'Normas técnicas',
  correta: 'PDCA'
}
const q10 = {
  numQuestao: 10,
  imagem: 'sennai.png', // ADICIONE
  pergunta: 'O que significa MASP?',
  alternativaA: 'Metodologia de análise sem perspectiva',
  alternativaB: 'Metodologia de análise de problemas e solução',
  alternativaC: 'Metodologia de análise e solução de problemas',
  alternativaD: 'Metodologia de análise sem paradigma',
  correta: 'Metodologia de análise e solução de problemas'
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = questoes.length - 1
console.log('Total de questões ' + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', '../assets/Quizdosenai/' + q1.imagem) // ADICIONE
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao
  numQuestao.textContent = questoes[nQuestao].numQuestao
  imgQuestao.setAttribute(
    'src',
    'assets/../Quizdosenai/' + questoes[nQuestao].imagem
  ) // ADICIONE
  pergunta.textContent = questoes[nQuestao].pergunta
  a.textContent = questoes[nQuestao].alternativaA
  b.textContent = questoes[nQuestao].alternativaB
  c.textContent = questoes[nQuestao].alternativaC
  d.textContent = questoes[nQuestao].alternativaD
  a.setAttribute('value', nQuestao + 'A')
  b.setAttribute('value', nQuestao + 'B')
  c.setAttribute('value', nQuestao + 'C')
  d.setAttribute('value', nQuestao + 'D')
  progresso.value = parseInt(progresso.value) + 1
  //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
  //console.log('Duplo clique')
  pontos -= 10 // tirar 10 pontos em caso de duplo click
  if (numQuestao.value == 10 && pontos == 110) {
    pontos = 100
  }
})

function bloquearAlternativas() {
  alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
  alternativas.classList.remove('bloqueado')
}

function tirarPiscar() {
  articleQuestoes.classList.remove('acertou')
  articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value
  console.log('Questão ' + numeroDaQuestao)

  let respostaEscolhida = resposta.textContent
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta
  //console.log("RespC " + certa)

  if (respostaEscolhida == certa) {
    //console.log("Acertou")
    //respostaEsta.textContent = "Correta 😊"
    pontos += 10 // pontos = pontos + 10
    if (nQuestao.value == 1 && pontos == 20) {
      pontos = 10
    }
  } else {
    //console.log("Errou!")
    //respostaEsta.textContent = "Errada 😢"
  }
  setTimeout(() => {
    tirarPiscar()
  }, 150)

  // atualizar placar
  placar = pontos
  instrucoes.textContent = 'Pontos ' + placar

  // bloquear a escolha de opcoes
  bloquearAlternativas()

  setTimeout(function () {
    proxima = numeroDaQuestao + 1

    if (proxima > totalDeQuestoes) {
      console.log('Fim do Jogo!')
      fimDoJogo()
    } else {
      proximaQuestao(proxima)
    }
  }, 150)
  desbloquearAlternativas()
}

function fimDoJogo() {
  let s = 's'
  pontos == 0 ? (s = '') : (s = s)
  instrucoes.textContent =
    'Fim de Jogo! Você conseguiu ' + pontos + ' ponto' + s

  instrucoes.classList.add('placar')

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = 'none'

  setTimeout(function () {
    pontos = 0 // zerar placar
    //location.reload();
    instrucoes.classList.remove('placar')
    // REINICIAR O JOGO
    articleQuestoes.style.display = 'block'
    proximaQuestao(1)
    instrucoes.textContent = 'Leia a questão e clique na resposta correta'
  }, 8000)
}
