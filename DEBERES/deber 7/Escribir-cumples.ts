import * as fs from 'fs';


export function escribirCumpleañeros(path: string, contenido: string){
    fs.writeFileSync(
        path, 
        contenido, 
        'utf8' 
    );

}