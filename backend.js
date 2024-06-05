
const API_KEY ='61abe2de00cb61a5e27c15dfc824dc67'

function enviar() {
    const cidade = document.getElementById('location-input').value;
    if (cidade) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt_br&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('location-input').value = `${data.name}, ${data.sys.country}`;
                    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
                    document.getElementById('current-temp').textContent = `${(data.main.temp).toFixed(1)} °C`;
                    document.getElementById('description').textContent = capitalizeFirstLetter(data.weather[0].description);
                } else {
                    console.error('Erro ao carregar os dados:', data.message);
                }
            })
            .catch(error => console.error('Erro ao carregar os dados:', error));
    } else {
        console.error('Por favor, insira o nome de uma cidade.');
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatarDoisDigitos(numero) {
    return numero.toString().padStart(2, '0');
}

function atualizarHora() {
    const agora = new Date();
    document.getElementById('hora').innerHTML = formatarDoisDigitos(agora.getHours());
    document.getElementById('minutos').innerHTML = formatarDoisDigitos(agora.getMinutes());
    document.getElementById('segundos').innerHTML = formatarDoisDigitos(agora.getSeconds());
    document.getElementById('dia').innerHTML = formatarDoisDigitos(agora.getDate()); 
    document.getElementById('mes').innerHTML = formatarDoisDigitos(agora.getMonth() + 1); 
    document.getElementById('ano').innerHTML = formatarDoisDigitos(agora.getFullYear().toString().slice(-2)); 
}

atualizarHora();

setInterval(atualizarHora, 1000);
