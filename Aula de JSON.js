//JSON - Javascript Object Notation
// composto de chaves e valor com o objetivo de transferir dados
let invoice = {
    name: "Lucas",
    age: 31,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 pol", 1000]
    },
    taxes: "98.90"
};

generateInvoice(invoice);

function generateInvoice(invoice) {
    console.log(`O comprador é: ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);

    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index];
        console.log(`O produto é: ${productName} - Preço: ${productPrice}`);
    }
}