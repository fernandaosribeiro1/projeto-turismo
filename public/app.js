fetch('http://localhost:8080/destinos') 
.then(response => response.json())

.then(data => {  
    const destinosList = document.getElementById('container-destinos');
    data.forEach(destinos => {  //itera sobre os dados recebidos e cria uma div para cada um
        const destinoDiv = document.createElement('div');
        destinoDiv.classList.add('col-12', 'mb-3'); // Um card por linha

        destinoDiv.innerHTML = `
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${destinos.imagem}" class="img-fluid rounded-start" alt="${destinos.nome}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${destinos.nome}</h5>
                            <p class="card-text"><strong>Descrição:</strong> ${destinos.descricao}</p>
                            <p class="card-text"><strong>Valor:</strong> ${destinos.valor}</p>
                            <p class="card-text"><strong>Hotel:</strong> ${destinos.hotel}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        destinosList.appendChild(destinoDiv);
    });
})

.catch(error => console.error('Erro ao carregar os destinos:', error));