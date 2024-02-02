// Implementación del Patrón Strategy en un Caso de Uso Práctico
const data = [{ // Array de objetos, cada uno representando una cerveza con distintos atributos.
    name: "Erdinger Pikantus",
    country: "Alemania",
    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",
    img: "https://dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png"
},
{
    name: "Corona",
    country: "México",
    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG"
},
{
    name: "Delirium Tremens",
    country: "Bélgica",
    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",
    img: "https://www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png"
}];

/**
 * Clase que define el contexto en el que se aplicará la estrategia.
 */
class InfoContext {
    /**
     * @param {Object} strategy Estrategia inicial para mostrar la información.
     * @param {Array} data Datos a mostrar.
     * @param {HTMLElement} element Elemento DOM donde se mostrará la información.
     */
    constructor(strategy, data, element) {
        this.setStrategy(strategy); // Asigna la estrategia inicial.
        this.data = data; // Datos a mostrar.
        this.element = element; // Elemento DOM donde se mostrará la información.
    }
    /**
     * Establece la estrategia de visualización.
     * @param {Object} strategy La estrategia a utilizar.
     */
    setStrategy(strategy) { this.strategy = strategy; } // Permite cambiar la estrategia.
    /**
     * Muestra los datos usando la estrategia actual.
     */
    show() { this.strategy.show(this.data, this.element); }
}

/**
 * Estrategia para mostrar una lista simple.
 */
class ListStrategy {
    /**
     * Muestra los datos en una lista simple.
     * @param {Array} data Datos a mostrar.
     * @param {HTMLElement} element Elemento DOM donde se mostrará la información.
     */
    show(data, element) {
        element.innerHTML = data.reduce((ac, e) => {
            return ac + `<div>
                    <h2>${e.name}</h2> 
                    <p>${e.country}<p>
                </div>
            <hr>`;
        }, "");
    }
}

/**
 * Estrategia para mostrar una lista detallada.
 */
class DetailedListStrategy {
    /**
     * Muestra los datos en una lista detallada.
     * @param {Array} data Datos a mostrar.
     * @param {HTMLElement} element Elemento DOM donde se mostrará la información.
     */
    show(data, element) {
        element.innerHTML = data.reduce((ac, e) => {
            return ac + `<div>
                    <h2>${e.name}</h2> 
                    <p>${e.country}<p>
                    <p>${e.info}</p>
                </div>
            <hr>`;
        }, "");
    }
}

/**
 * Estrategia para mostrar una lista con imágenes.
 */
class ListWithImageStrategy {
    /**
     * Muestra los datos en una lista con imágenes.
     * @param {Array} data Datos a mostrar.
     * @param {HTMLElement} element Elemento DOM donde se mostrará la información.
     */
    show(data, element) {
        element.innerHTML = data.reduce((ac, e) => {
            return ac + `<div>
                        <img width="10%" src="${e.img}">
                        <h2>${e.name.toUpperCase()}</h2> 
                        <p>${e.country}<p>
                        <p>${e.info}</p>
                    </div>
                <hr>`;
        }, "");
    }
}
/**
 * Array que contiene instancias de las diferentes estrategias de visualización.
 * Permite cambiar entre estrategias para mostrar la información de las cervezas.
 */
const strategies = [new ListStrategy(), new DetailedListStrategy(), new ListWithImageStrategy()];
const info = new InfoContext(new ListStrategy(), data, content); // Inicializa el contexto con una estrategia y datos.

info.show(); // Muestra los datos usando la estrategia inicial.

// Event listener para cambiar la estrategia basada en la interacción del usuario.
slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]); // Cambia la estrategia.
    info.show(); // Muestra los datos con la nueva estrategia.
});
