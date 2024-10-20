// Função para adicionar a animação quando a seção está visível na tela
function revealOnScroll() {
    const elements = document.querySelectorAll('.hidden'); // Seleciona todos os elementos com a classe "hidden"
    const roboticaSection = document.getElementById('memoria-robotica'); // Seleciona a seção de Robótica
    const roboticaTop = roboticaSection.getBoundingClientRect().top; // Pega a posição da seção de Robótica em relação ao viewport
    const triggerHeight = window.innerHeight * 0.8; // Define o ponto de ativação (80% da altura da tela)

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerHeight) {
            element.classList.add('show'); // Adiciona a classe "show" quando o elemento entra no viewport
        }
    });

    // Verifica se o usuário chegou na seção de Robótica
    if (roboticaTop < triggerHeight) {
        document.body.classList.add('dark-mode'); // Escurece o fundo
    } else {
        document.body.classList.remove('dark-mode'); // Remove o escurecimento
    }
}

// Detecta o scroll da página e ativa a função revealOnScroll
window.addEventListener('scroll', revealOnScroll);

// Executa a função uma vez na carga da página para verificar se algum elemento já está visível
revealOnScroll();
