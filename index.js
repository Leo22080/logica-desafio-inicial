/**
 * ## Objetivo
 * Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
 */

let nomeHeroi = "Sentinela"
let quantidadeXP = 10000;
let nivelHeroi;
const limites = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
const niveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];

for (let i = 0; i < limites.length; i++) {
  if (quantidadeXP <= limites[i]) {
    nivelHeroi = niveis[i];
    break;
  }
}

if (quantidadeXP > limites[limites.length - 1]) {
    nivelHeroi = niveis[niveis.length - 1];
}

console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + nivelHeroi)

