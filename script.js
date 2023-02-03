//1 crie uma função que exiba uma mensagem no console.

function oi (){
    console.log("Boa tarde")
}
oi ()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function pessoa(cidade){
    console.log(cidade)
}
pessoa("Rio de Janeiro")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function indivíduo(name, age, musicStyle){
console.log(name)
console.log(age)
console.log(musicStyle)
}
indivíduo("Ulisses", "25 anos", "Rock")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function hobbies(filme, música){
    console.log(filme)
    console.log(música)
}
hobbies("Meu Malvado Favorito", "Billie Jean")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(número){
   return número * 3
}
console.log(triplo(2))

//6 - crie uma função que  verifique se uma  variável é true ou false

let x = 9 > 8
let y = 0 < -1

if(x == true && y == false){
    console.log('Apenas a primeira informação está correta')
}else{
    console.log('As duas informações estão corretas')
}