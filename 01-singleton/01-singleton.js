/*
Singleton en JavaScript. La clase Singleton tiene un constructor que asigna una propiedad aleatoria
y verifica si ya existe una instancia de la clase. Si existe, devuelve esa instancia en lugar de crear una nueva. 
Esto asegura que todas las llamadas a new Singleton() o Singleton.getInstance() devuelvan la misma instancia.
*/

// Implementación del patrón de diseño Singleton en JavaScript.
class Singleton {
    // Método estático 'getInstance'.
    // Este método estático se utiliza para obtener la instancia única de la clase.
    static getInstance() {
        return Singleton.instance;
        // Retorna la instancia única existente de la clase.
        // Si no existe ninguna instancia, 'instance' será 'undefined'.
    }

    // Constructor de la clase Singleton.
    constructor() {
        this.random = Math.random();
        // Asigna un valor aleatorio a la propiedad 'random'.
        // Este valor es utilizado para demostrar que todas las instancias de esta clase comparten el mismo estado.

        if (Singleton.instance) {
            return Singleton.instance;
            // Si ya existe una instancia de la clase, el constructor retorna esa instancia.
            // Esto impide la creación de múltiples instancias.
        }

        // Si no existe una instancia de la clase, la asigna a 'Singleton.instance'.
        Singleton.instance = this;
        // Almacena la referencia de la instancia actual en la propiedad estática 'instance'.
        // Esto asegura que la misma instancia se devolverá en futuras invocaciones del constructor o 'getInstance'.
    }
}

// Creación de instancias de la clase Singleton.
const singleton = new Singleton(); // Intenta crear una nueva instancia.
const singleton2 = new Singleton(); // Intenta crear otra instancia, pero obtiene la misma que 'singleton'.
const singleton3 = Singleton.getInstance(); // También obtiene la misma instancia única.

// Comparación de las instancias para demostrar que todas son la misma.
console.log(singleton.random); // Muestra el valor 'random' de la instancia 'singleton'.
console.log(singleton2.random); // Muestra el mismo valor 'random' que 'singleton'.
console.log(singleton === singleton2); // Comprueba si 'singleton' y 'singleton2' son la misma instancia (debería ser 'true').
console.log(singleton2 === singleton3); // Comprueba si 'singleton2' y 'singleton3' son la misma instancia (también debería ser 'true').




