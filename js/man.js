

function botao (){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
   // alert("obrigado por clicar");
}
function redirecionar(){
    window.open("https://www.linkedin.com/in/nathalia-peres-821060144/");
   // window.location.href ="https://www.linkedin.com/in/nathalia-peres-821060144/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML ="obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar (elemento){
  //  document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
   
}

function load (){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1 , n2){
    return n1 + n2;
}

/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar =false
    }
    return validar;
}

var idade = prompt("qual ssua idade");
console.log(validaIdade(idade));

//alert(soma(5,10));

/*
var d= new Date();
alert(d.getMinutes());

/*
var count; 
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count =0; 
while(count <5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}


/*
var fruta = [ {nome: "maca" , cor: "vermelha"} , { nome: "uva" , cor: "roxa"}]
console.log(fruta);
alert(fruta[1].nome);

//var lista = [ "maca" , "pera" ,  "laranja"];
//lista.push("uva"); 
//lista.pop();
//console.log(lista.toString());
//console.log(lista.join(" - "))


/*
var nome = "Nathalia melo";
var n1=5;
var n2=10;
var frase ="brasil é o melhor time do mundo";
//alert( nome + " tem " + idade + " anos");
alert(n1 + n2);
console.log(nome);
console.log(n1*  n2);
console.log(frase.replace("brasil" , "japao"));
//alert(frase.replace("brasil" , japao));
*/