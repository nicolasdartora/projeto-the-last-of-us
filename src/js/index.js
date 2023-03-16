const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

       const botaoSelecionado = document.querySelector('.selecionado');
       botaoSelecionado.classList.remove('selecionado');
       botao.classList.add('selecionado')

       const imagemativa = document.querySelector('.ativa');
       imagemativa.classList.remove('ativa');

        imagens[indice].classList.add('ativa')
    })
})