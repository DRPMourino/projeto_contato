document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('list-contact');
    const tableBody = document.querySelector('table tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('contato').value;
        const telefone = document.getElementById('Número').value;

        if (nome && telefone) {
            // Adiciona uma nova linha na tabela
            const newRow = tableBody.insertRow();
            const cellNome = newRow.insertCell(0);
            const cellTelefone = newRow.insertCell(1);

            cellNome.textContent = nome;
            cellTelefone.textContent = telefone;

            // Limpa os campos do formulário após adicionar o contato
            document.getElementById('contato').value = '';
            document.getElementById('Número').value = '';
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
});
