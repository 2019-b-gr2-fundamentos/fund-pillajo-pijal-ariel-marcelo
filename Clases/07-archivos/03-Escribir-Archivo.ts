import * as fs from 'fs';


export function escribirArchivo(path: string, contenido: string){
    fs.writeFileSync(
        path, // PATH
        contenido, // contenido
        'utf8' // Codificacion 
    );

}