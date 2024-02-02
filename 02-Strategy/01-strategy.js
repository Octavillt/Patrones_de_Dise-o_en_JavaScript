class SaleContext {
    constructor(strategy) {
        this.strategy = strategy; // Inicializa SaleContext con una estrategia específica.
    }

    setStrategy(strategy) {
        this.strategy = strategy; // Permite cambiar la estrategia en tiempo de ejecución.
    }

    calculate(amount) {
        return this.strategy.calculate(amount); // Delega la operación de cálculo a la estrategia actual.
    }
}

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax; // Inicializa la estrategia de venta regular con un valor de impuesto.
    }

    calculate(amount) {
        return amount + (amount * this.tax); // Calcula el total incluyendo el impuesto.
    }
}

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax; // Inicializa la estrategia de venta con descuento con un valor de impuesto.
        this.discount = discount; // Define el descuento aplicado en esta estrategia.
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount; // Calcula el total con impuesto y descuento.
    }
}

class ForeignSaleStrategy {
    calculate(amount) {
        return amount * this.getDollarPrice(); // Calcula el total basado en un precio en dólares.
    }

    getDollarPrice() {
        return 18; // Retorna un precio fijo en dólares, podría ser dinámico en una aplicación real.
    }
}

let regularSale = new RegularSaleStrategy(0.16); // Crea una estrategia de venta regular.
let discountSale = new DiscountSaleStrategy(0.16, 3); // Crea una estrategia de venta con descuento.
let foreignSale = new ForeignSaleStrategy(); // Crea una estrategia de venta extranjera.

let sale = new SaleContext(regularSale); // Inicializa SaleContext con la estrategia regular.
console.log(sale.calculate(10)); // Calcula el total con la estrategia regular.

sale.setStrategy(discountSale); // Cambia la estrategia a venta con descuento.
console.log(sale.calculate(10)); // Calcula el total con la estrategia de descuento.

sale.setStrategy(foreignSale); // Cambia la estrategia a venta extranjera.
console.log(sale.calculate(10)); // Calcula el total con la estrategia extranjera.

