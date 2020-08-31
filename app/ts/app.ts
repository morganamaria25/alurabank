// Criado uma estancia de NegociacaoController() e vai ser associado o método adiciona(event).
// com o evento de submit do formulário.

const controller = new NegociacaoController();

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
