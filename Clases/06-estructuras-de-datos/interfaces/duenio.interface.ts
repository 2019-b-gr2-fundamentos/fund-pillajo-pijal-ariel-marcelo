import { AnimalPerrito} from './animal-perrito-interfaces';

export interface Duenio { // interface -> (Struct)
    nombres: string;
    apellidos: string;
    cedula?: string;
    fechaNacimiento: number;
    mascotasPerros?: AnimalPerrito[];
}