import {
    produtos,
    produto,
    buscarProduto,
    consultarProduto,
    executarConsulta
} from "./produto";

// TESTE 1 - Verificar se o array possui o produto
test("deve verificar se o produto está no array", () => {

    expect(produtos).toContain("Notebook");

});

// TESTE 2 - Verificar os dados do objeto
test("deve verificar os dados do produto", () => {

    expect(produto.nome).toBe("Notebook");
    expect(produto.preco).toBe(2500);
    expect(produto.categoria).toBe("Informática");

});

// TESTE 3 - Testar a função de busca
test("deve encontrar um produto pelo nome", () => {

    const resultado = buscarProduto("Mouse");

    expect(resultado).toBe("Mouse");

});

// TESTE 4 - Testar a Promise
test("deve retornar uma mensagem através de uma Promise", async () => {

    const resultado = await consultarProduto();

    expect(resultado).toBe("Produto encontrado com sucesso!");

});

// TESTE 5 - Testar função assíncrona com async/await
test("deve executar a consulta de forma assíncrona", async () => {

    const resultado = await executarConsulta();

    expect(resultado).toBe("Produto encontrado com sucesso!");

});
