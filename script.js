// Defina a data de destino para a contagem regressiva
const targetDate = new Date("September 21, 2024 14:59:59").getTime();

// Atualize a contagem regressiva a cada segundo
const countdownInterval = setInterval(() => {
    // Obtenha a data e hora atual
    const now = new Date().getTime();

    // Calcule a diferença de tempo entre a data atual e a data de destino
    const timeLeft = targetDate - now;

    // Calcule os dias, horas, minutos e segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Exiba o resultado nos elementos HTML correspondentes
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Se a contagem regressiva terminar, exiba uma mensagem
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Evento finalizado!";
    }
}, 1000);
// Pega o botão
var mybutton = document.getElementById("backToTop");

// Mostra o botão quando o usuário rola para baixo 20px da parte superior do documento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Quando o usuário clicar no botão, ele rola suavemente de volta para o topo
mybutton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
