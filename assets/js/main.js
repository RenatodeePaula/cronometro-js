const pCronometro = document.querySelector('.pCronometro');   

let segundos = 0;

function formatarCronometro () {    
    let horas = new Date(segundos * 1000);  
    return  horas.toLocaleTimeString('pt-BR', 
        {
            timeZone: 'UTC'
        });
};
    
let contador;
document.addEventListener('click', (eve) =>  {
    const element = eve.target;

    if(element.classList.contains('iniciar') ){
        pCronometro.style.color = '#000';     
        clearInterval(contador)
        contador = setInterval( () => {
            segundos++;
            pCronometro.textContent = formatarCronometro();
        }, 1000);
        return contador;

    } else  if( element.classList.contains('pausar') ){
        clearInterval(contador);
        pCronometro.style.color = 'red'; 
    } else  if( element.classList.contains('zerar') ){
        pCronometro.style.color = '#000';
        segundos = 0;   
        pCronometro.textContent = formatarCronometro ();
        clearInterval(contador);
    };
});