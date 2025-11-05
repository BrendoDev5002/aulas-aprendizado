console.log("hello world!");

/*VARIAVEIS E OUTROS CONCEITOS FUNDAMENTAIS EM JAVASCRIPT
-let--. É usado para declarar variáveis cujo valor pode ser alterado com o tempo.
-const--. É usado para declarar variáveis cujo valor não pode ser alterado (constante).
-var--> DESCONTINUADO "NÃO USE MAIS"

Aqui estão alguns exemplos de variáveis em JavaScript:
*/

let minhaBunda = "rosa";
console.log(minhaBunda); // Output: rosa


/*Null e Undefined
null--. Representa a ausência intencional de qualquer valor. É um valor atribuído a uma variável para indicar que ela não possui um valor válido.
undefined--. Indica que uma variável foi declarada, mas ainda não foi atribuída a ela nenhum valor. É o valor padrão de variáveis não inicializadas.
*/
let variavelNula = null;
console.log(variavelNula); // Output: null

let variavelIndefinida;
console.log(variavelIndefinida); // Output: undefined





/*EXEMPLOS DE TIPOS DE DADOS
string--. Cadeia de caracteres, usada para representar texto.
number--. Números, usados para representar valores numéricos.
boolean--. Valores lógicos, que podem ser true (verdadeiro) ou false (falso).
array--. Estrutura de dados que pode armazenar múltiplos valores em uma única variável.
object--. Estrutura de dados que pode armazenar pares chave-valor.


EXEMPLOS
*/ 
                            /*! STRINGS*/

const texto1 = "TEXTO COM ASPAS DUPLAS"; // string
const texto2 = 'TEXTO COM ASPAS SIMPLES'; // string
const texto3 = `TEXTO COM TEMPLATE LITERALS(CRASE)`; // string
console.log(texto1);
console.log(texto2);
console.log(texto3);


/*template literals (crase) permitem interpolação de variáveis e expressões dentro da string. Exemplo:*/
const nome = "João";
const idade = 25;
const mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem); // Output: Meu nome é João e eu tenho 25 anos.


                                /*NUMBERS*/
const number1 = 42*52; // número inteiro
const fakernumber = "42*52"; // devido as aspas ele se torna uma string
console.log(number1); // Output: 2184
console.log(fakernumber); // Output: 42*52


                                /*BOOLEAN*/ 
//Ele usa dois valores possíveis: true (verdadeiro) e false (falso).
//Ele é frequentemente usado em estruturas de controle de fluxo, como condicionais e loops.
//Também é usado em operações lógicas para avaliar expressões e tomar decisões com base em condições.
//O boolean é fundamental para a lógica de programação e é amplamente utilizado em diversas linguagens de programação.
// Pois ele representa valores binários essenciais para a tomada de decisões em código.

//Exemplos:
const isRaining = true;
const isSunny = false;
console.log(isRaining); // Output: true
console.log(isSunny);   // Output: false


                                /*ARRAYS*/
//Arrays são usados para armazenar múltiplos valores em uma única variável.
//Eles permitem agrupar dados relacionados e facilitam a manipulação e o acesso a esses dados.
//Arrays são amplamente utilizados em programação para representar listas, coleções e conjuntos de dados.
//Eles fornecem métodos e propriedades úteis para realizar operações como adicionar, remover, ordenar e filtrar elementos.
//Essenciais para a organização e manipulação eficiente de dados em programas.
//São declarados usando colchetes [] e os elementos são separados por vírgulas.

//Exemplos:
const frutas = ["maçã", "banana", "laranja"];
const numeros = [1, 2, 3, 4, 5];
console.log(frutas);
console.log(numeros);

//Ele possui várias propriedades e métodos integrados que facilitam a manipulação dos dados armazenados
//Como push(), pop(), shift(), unshift(), map(), filter(), reduce(), entre outros.
//Que permitem adicionar, remover, transformar e iterar sobre os elementos do array de maneira eficiente.



//EXEMPLOS DE COMO USAR ESSAS PROPRIEDADES E MÉTODOS:
frutas.push("uva"); // Adiciona "uva" ao final do array frutas
console.log(frutas); // Output: ["maçã", "banana", "laranja", "uva"]






                                /*OBJECTS*/
//Objetos são usados para armazenar dados estruturados em pares chave-valor.
//Eles permitem agrupar informações relacionadas e facilitam o acesso e a manipulação desses dados.
//Objetos são amplamente utilizados em programação para representar entidades do mundo real, como pessoas, produtos, configurações, entre outros.
//Eles fornecem uma maneira flexível de organizar e estruturar dados complexos.
//São declarados usando chaves {} e os pares chave-valor são separados por vírgulas.
//Exemplos:
const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Desenvolvedora"
};  
console.log(pessoa);

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
console.log(carro);
//Os valores dentro de um objeto podem ser acessados usando a notação de ponto (objeto.chave) ou a notação de colchetes (objeto["chave"]).

//Exemplos de acesso aos valores:
console.log(pessoa.nome); // Output: Maria
console.log(carro["modelo"]); // Output: Corolla    

// as [chaves] também são usadas para definir propriedades dinâmicas, onde o nome da chave é armazenado em uma variável.
//mais flexível para acessar ou definir propriedades de objetos quando o nome da chave não é conhecido antecipadamente.

//Exemplo:
const chave = "idade";
console.log(pessoa[chave]); // Output: 30




                                /*if e else*/
//if--. É usado para executar um bloco de código se uma condição especificada for verdadeira.
//else--. É usado para executar um bloco de código alternativo se a condição do if for falsa.
const hora = 10;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde!");
}




                                /*FUNCTIONS*/
//Funções são blocos de código reutilizáveis que executam uma tarefa específica.
//Elas permitem organizar o código em unidades lógicas, facilitando a leitura, manutenção e reutilização.
//As funções podem receber parâmetros de entrada e retornar valores de saída.
//São amplamente utilizadas em programação para modularizar o código e evitar repetição.
//São declaradas usando a palavra-chave function, seguida pelo nome da função, parênteses para os parâmetros e chaves para o corpo da função.
//elas são chamadas ou invocadas pelo nome da função, passando os argumentos necessários.
//e só executam o código dentro do corpo da função quando são chamadas.
//Exemplos:
function saudacao(nome) {
    return `Olá, ${nome}!`;

}




                                /*DOM*/
//O DOM (Document Object Model) é uma representação em árvore da estrutura de um documento HTML ou XML.
//Ele permite que os desenvolvedores acessem e manipulem os elementos da página web de forma dinâmica usando JavaScript.
//Com o DOM, é possível alterar o conteúdo, estilo e estrutura dos elementos HTML, responder a eventos do usuário e criar interatividade nas páginas web.
//O DOM fornece uma API (Interface de Programação de Aplicações) que permite navegar, selecionar e modificar os elementos do documento.
//Ele é amplamente utilizado no desenvolvimento web para criar experiências dinâmicas e interativas para os usuários.
//Exemplo de como acessar e modificar um elemento HTML usando o DOM:
document.getElementById("meuElemento").innerText = "Novo texto!";



//Neste exemplo, o método getElementById é usado para selecionar um elemento HTML com o ID "meuElemento" e alterar seu texto interno para "Novo texto!".


                        //POR HOJE É SÓ PERSONAL!!//