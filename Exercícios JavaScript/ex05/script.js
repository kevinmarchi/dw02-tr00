
function excluirProduto() {

    let nomeProduto;
    let confirma;
    
    nomeProduto = prompt('Digite o código do produto');
    confirma = confirm('Deseja confirmar a exclusão?');
    
    if (confirma === true) {
    
        document.body.innerHTML = "<h1> O Produto "+ nomeProduto + " foi excluído</h1>";
    }
}
