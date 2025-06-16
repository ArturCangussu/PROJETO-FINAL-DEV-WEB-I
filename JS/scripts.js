// --- LÓGICA PARA A PÁGINA DE CONTATO ---

// Verifica se estamos na página de contato antes de adicionar o listener
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault(); 

        // Captura os valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const reason = document.getElementById('reason').value;
        const message = document.getElementById('message').value;

        // Validação simples
        if (name === '' || email === '' || reason === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return; // Interrompe a função se algum campo estiver vazio
        }

        // Validação de e-mail usando uma expressão regular simples
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return; // Interrompe a função se o e-mail for inválido
        }

        // Se todas as validações passarem
        alert('Obrigado, ' + name + '! Sua solicitação foi registrada com sucesso.');

        // Opcional: Limpar o formulário após o envio
        document.getElementById('contactForm').reset();
    });
}


// --- LÓGICA PARA A BUSCA DE LIVROS (PÁGINA livros.html) ---

function searchBooks() {
    // Pega o termo de busca e converte para minúsculas
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Pega todos os cards de livros
    const bookCards = document.querySelectorAll('.book-card');
    
    // Pega o elemento para a mensagem de "não encontrado"
    const noResultsMessage = document.getElementById('no-results');
    
    let booksFound = false;

    // Itera sobre cada card de livro
    bookCards.forEach(card => {
        // Pega o título do livro e converte para minúsculas
        const title = card.querySelector('.book-title').textContent.toLowerCase();
        
        // Verifica se o título do livro inclui o termo de busca
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Mostra o card
            booksFound = true;
        } else {
            card.style.display = 'none'; // Esconde o card
        }
    });

    // Mostra ou esconde a mensagem de "não encontrado"
    if (booksFound) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
}