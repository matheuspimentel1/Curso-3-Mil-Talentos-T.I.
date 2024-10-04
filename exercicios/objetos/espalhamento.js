// Objeto original com algumas propriedades
const retangulo = {
    largura: 5,
    altura: 10,
    cor: 'vermelho'
}

// Usando o operador de espalhamento (...) para criar uma cópia do objeto
const novoRetangulo = {
    ...retangulo, // Espalha todas as propriedades do objeto 'retangulo'
    cor: 'verde', // Sobrescreve a propriedade cor com um novo valor
    material: 'madeira' // Adiciona uma nova propriedade ao novo objeto
}

// Exibindo os resultados
console.log('Objeto original:', retangulo);
console.log('Novo objeto com espalhamento:', novoRetangulo);
