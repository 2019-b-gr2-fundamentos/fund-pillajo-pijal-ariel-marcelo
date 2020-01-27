  
import { Duenio } from './duenio.interface';

export interface AnimalPerrito { // interface -> (Struct)
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number; // Opcionales a
    // hijos: null,
    perritas?: string[]; // Opcionales
    vacunado?: boolean; // Opcionales
    duenio?: Duenio;
}