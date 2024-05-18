document.getElementById('adicionarBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    if (nome && data && horario) {
        const convidadoCard = document.createElement('div');
        convidadoCard.classList.add('convidado-card');

        convidadoCard.innerHTML = `
            <style>
                .item{
                    font-family: 'Roboto', sans-serif;
                    font-size: 15px;
                    font-weight: 600;
                }
            </style>

            <p class="item">Nome:</p> ${nome} <br>
            <p class="item">Data:</p> ${data} <br>
            <p class="item">Horário:</p> ${horario}
        `;

        document.getElementById('listaConvidados').appendChild(convidadoCard);

        document.getElementById('nome').value = '';
        document.getElementById('data').value = '';
        document.getElementById('horario').value = '';
    } else {
        alert('Por favor, preencha todos os campos para adicionar um convidado.');
    }
});