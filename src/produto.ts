// Exemplo de ARRAY
const produtos: string[] = [
    "Notebook",
    "Mouse",
    "Teclado",
    "Monitor"
];

// Exemplo de OBJETO
const produto = {
    nome: "Notebook",
    preco: 2500,
    categoria: "Informática"
};

// Função para buscar um produto no array
function buscarProduto(nome: string) {
    return produtos.find(produto => produto === nome);
}

// Função que simula uma Promise
function consultarProduto(): Promise<string> {
    return new Promise((resolve) => {

        // Simulamos uma consulta que demora 2 segundos
        setTimeout(() => {
            resolve("Produto encontrado com sucesso!");
        }, 2000);
    });
}

// Função ASSÍNCRONA utilizando async/await
async function executarConsulta(): Promise<string> {

    // O await aguarda a Promise ser concluída.
    // Enquanto isso, o JavaScript não bloqueia a aplicação.
    const resultado = await consultarProduto();

    // Depois que a Promise é resolvida,
    // o resultado é armazenado na variável resultado.
    return resultado;
}

// Exportando as funções para serem utilizadas nos testes
export {
    produtos,
    produto,
    buscarProduto,
    consultarProduto,
    executarConsulta
};
