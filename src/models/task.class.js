import { LEVELS } from "./levels.num";

/**Esta clase tendra nombre 
 * describcion y si la tarea esta completada
 */
export class Task {
    name = '';
    descripcion = '';
    completed = false;
    level = LEVELS.NORMAL;
    
    //Agragamos "constructor" para iniciar todas las actividades

    constructor(name, descripcion, completed, level) {
        this.name = name;
        this.descripcion = descripcion;
        this.completed = completed;
        this.level = level
    }
}