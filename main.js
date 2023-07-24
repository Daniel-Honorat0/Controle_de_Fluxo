function comece(){

var nome = prompt('Qual é o seu nome?');

var primeirapergunta = prompt ('Oi ' + nome + ', você gostaria de seguir para a área de Front-End (digite 1) ou Back-End? (digite 2)');


if (primeirapergunta == '1'){
    var segundapergunta = prompt ('Interresante. Com qual tecnologia você mais se identifica? React (digite 1) ou Vue? (digite 2)');
}

    else if (primeirapergunta == '2'){
    var segundapergunta = prompt ('Interresante. Com qual tecnologia você mais se identifica? C# (digite 1) ou Java? (digite 2)');
}

    else  {
    alert  ('Opção invalida, volte do início');
}


var terceirapergunta = prompt('Boa escolha! E vai querer se especializar nessa área (Digite 1) ou seguir estudadando para se tornar Fullstack? (Digite 2)');

if (terceirapergunta == '1'){ 
    alert ('Que legal! Te desejo boa sorte, sei que vai se tornar um ótimo profissional');
}

    else if (terceirapergunta == '2'){
        alert ('Que legal! Te desejo boa sorte nos estudos, você tem um longo caminho pela frente');
    }

    else  {
        alert  ('Opção invalida, volte do início');
    }

let final = prompt ('Existe mais alguma tecnologia que gostaria de aprender? Sim[1] Não[2]');

    while (final == '1'){
       var respostaFinal = prompt('Qual?')
       alert (`${respostaFinal} é realmente uma tecnologia boa de se trabalhar`);
        final =  prompt('Existe mais alguma tecnologia que gostaria de aprender? Sim[1] Não[2]');
    }

















}