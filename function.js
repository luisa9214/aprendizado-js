//bloco de códigos que podem ser invocados por um operador
//criam escopo
//podem retornar valores
//o uso evita a repetição de lógica



//primeiro constrói a função e depois invoca
function primeiraFuncao (){
    console.log('Oieee');
}

primeiraFuncao ();

//com argumento
function qualNome(nome){
    console.log( 'Meu nome é: ' + nome);
}

qualNome('Luísa')

//passando como variável
let bancoDeDados= 'Luísa';

qualNome(bancoDeDados);

//com return
 function soma( a, b){
     let soma = a+b;
     return soma;
 }

 let somaUm = soma (2, 5);

 console.log(somaUm);
