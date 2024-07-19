// Implementación del Patrón Singleton en un Caso de Uso Práctico
/**
 * Clase WeekDays para manejar nombres de días de la semana en diferentes idiomas.
 * Implementa el patrón Singleton para asegurar una única instancia de la clase.
 */
class WeekDays {
    // Arrays que contienen los nombres de los días de la semana en español e inglés.
    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    /**
     * Constructor de la clase WeekDays.
     * Asegura la creación de una sola instancia de la clase.
     * @param {string} lang - El idioma para los días de la semana ('es' para español, 'en' para inglés).
     */
    constructor(lang) {
        this.lang = lang; // Asigna el idioma especificado a la propiedad 'lang'.

        // Implementación del patrón Singleton:
        // Si ya existe una instancia de WeekDays, retorna esa instancia.
        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        // Si no existe una instancia, la actual se asigna a WeekDays.instance.
        WeekDays.instance = this;
        // Esto asegura que todas las futuras instancias de WeekDays sean la misma que la primera creada.
    }

    /**
     * Método para obtener los días de la semana según el idioma establecido.
     * @returns {string[]} Los días de la semana en el idioma seleccionado.
     */
    getDays() {
        // Retorna los días de la semana en el idioma seleccionado.
        return this.lang === "es" ? this.daysEs : this.daysEn;
        // Usa una operación ternaria para elegir entre 'daysEs' y 'daysEn' basado en 'lang'.
    }
}

// Creación de instancias de WeekDays.

// Crea una instancia con idioma inglés.
const weekDays = new WeekDays("en");
// Descomentar para crear una instancia con idioma español.
// const weekDays = new WeekDays("es");
// Intenta crear una nueva instancia.
const weekDays2 = new WeekDays();

// Pruebas de las instancias y sus métodos.

// Muestra los días en inglés (o español si se cambia el idioma).
console.log(weekDays.getDays());
// Muestra los mismos días que 'weekDays', demostrando el Singleton.
console.log(weekDays2.getDays());
// A pesar de intentar crear una nueva instancia con 'weekDays2', se obtiene la misma instancia que 'weekDays'.