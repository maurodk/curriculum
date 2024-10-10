const toggleSwitch = document.querySelector('#checkbox');
const body = document.body;
const container = document.querySelector('.container');

// Verifica o estado atual e aplica o tema correspondente
function switchTheme(e) {
    if (e.target.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        container.classList.remove('light-mode');
        container.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        container.classList.remove('dark-mode');
        container.classList.add('light-mode');
    }
}

// Evento de mudança no switch
toggleSwitch.addEventListener('change', switchTheme);

// Define o tema claro por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    body.classList.add('light-mode');
    container.classList.add('light-mode');
});
