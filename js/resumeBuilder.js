//$("#main").append(["Isa Giongo"]);

var nome = "Isadora Giongo";
console.log(nome);

var email = "isagiongo@hotmail.com";

var newEmail = email.replace("hotmail","gmail");

console.log(email);
console.log(newEmail);
//$("#main").append([email]);
//$("#main").append([newEmail]);
var funcao = "Analista de Testes"
var nomeFormatado = HTMLheaderName.replace("%data%", nome);
var funcaoFormatada = HTMLheaderRole.replace("%data%",funcao);

$("#header").append(nomeFormatado);
$("#header").append(funcaoFormatada);
