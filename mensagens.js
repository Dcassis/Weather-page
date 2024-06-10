  document.addEventListener('DOMContentLoaded', (event) => {
            const button = document.querySelector('button');
            const fraseDiv = document.querySelector('#frase');
            
            const fetchFrase = async () => {
                try {
                    console.log("Fetching Kanye quote...");
                    // Obtém a frase do Kanye West
                    let response = await fetch('https://api.kanye.rest');
                    let data = await response.json();
                    let fraseIngles = data.quote;
                    console.log("Kanye quote fetched:", fraseIngles);

                    // Atualiza o div com a frase original
                    fraseDiv.innerHTML = `<h3>"${fraseIngles}"</h3>`;
                } catch (error) {
                    console.error('Erro ao obter a frase:', error);
                    fraseDiv.innerHTML = '<h3>Erro ao carregar a frase</h3>';
                }
            };

            button.addEventListener('click', fetchFrase);
            fetchFrase(); // Fetch frase on page load
        });