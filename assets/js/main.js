/*const h1 = document.querySelector('.container h1');
const data = new Date ();

//h1.innerHTML = data.toString();//Através disso eu modifico o HTML no JS

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0: 
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto; 
        case 1:  
        diaSemanaTexto = 'segunda-feira';
        return diaSemanaTexto;
        case 2:  
        diaSemanaTexto = 'terça-feira';
        return diaSemanaTexto;
        case 3:  
        diaSemanaTexto = 'quarta-feira';
        return diaSemanaTexto;
        case 4:  
        diaSemanaTexto = 'quinta-feira';
        return diaSemanaTexto;
        case 5:  
        diaSemanaTexto = 'sexta-feira';
        return diaSemanaTexto;
        case 6:  
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

function getmesTexto(numeromes){
    let mesTexto;

    switch (numeromes) {
        case 0: 
        mesTexto = 'janeiro';
        return mesTexto; 
        case 1:  
        mesTexto = 'fevereiro';
        return mesTexto;
        case 2:  
        mesTexto = 'março';
        return mesTexto;
        case 3:  
        mesTexto = 'abril';
        return mesTexto;
        case 4:  
        mesTexto = 'maio';
        return mesTexto;
        case 5:  
        mesTexto = 'junho';
        return mesTexto;
        case 6:  
        mesTexto = 'julho';
        return mesTexto;
        case 7:  
        mesTexto = 'agosto';
        return mesTexto;
        case 8:  
        mesTexto = 'setembro';
        return mesTexto;
        case 9:  
        mesTexto = 'outubro';
        return mesTexto;
        case 10:  
        mesTexto = 'novembro';
        return mesTexto;
        case 11:  
        mesTexto = 'dezembro';
        return mesTextos;
        default:
            mesTexto = '';
        return mesTexto;
    }
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getmesTexto(numeroMes);

    return (//Abrindo as chaves é possível quebrar a linha
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data);*/

/*forma mais simples
const h1 = document.querySelector('.container h1');
const data = new Date ();
const opcoes = {
    dateStyle:'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);*/

//forma ainda mais simples MDN
/*const h1 = document.querySelector('.container h1');
const data = new Date ();
h1.innerHTML = data.toDateString('pt-BR',{dateStyle: 'full',timeStyle:'short'});*/

//Outra maneira sem switch
const h1 = document.querySelector('.container h1');
const data = new Date ();

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta',
      'sexta', 'sábado'];
    return diasSemana[diaSemana];
}

function getmesTexto(numeromes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
return meses[numeromes]
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getmesTexto(numeroMes);

    return (//Abrindo as chaves é possível quebrar a linha
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data);