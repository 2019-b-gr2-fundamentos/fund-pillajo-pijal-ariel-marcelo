///////switch
// cuanto tiempo libre tiene un politecnico

const list = "Calcular cuantas horas libres tienes a:" + "\n" +"1.- semana" +  "\n" + "2.- mes"
const regla = "Este programa tiene en cuenta que el estudiante necesita 4 horas de estudio a la semana por materia" + "\n" + "y que ademas cada materia es de 3 dias a la semana"
let TiempoString = prompt("Bienvenido escoje el numero de la opcion que desees" + "\n" +  list + "\n" + regla );
let Tiempo =  Number(TiempoString);
const DiasLaborables = 3;
let EstudioAutonomo = 4;
let HorasLibres = 0;
const UnDia = 24;
const HorasxDia = 2;
 
switch(Tiempo){

        case 1:
        let MateriasString = prompt("Cuantas materias tienes ?" );
        let Materias =  Number(MateriasString);
        let SueñoString = prompt("Cuantas horas de sueño requieres normalmente ?" );
        let Sueño =  Number(SueñoString);

                const semana = 7;
                HorasLibres = semana * UnDia;
                EstudioAutonomo = EstudioAutonomo * Materias
                Materias = Materias * DiasLaborables;
                Materias = Materias * HorasxDia;
                Sueño = Sueño * semana;
                HorasLibres = (((HorasLibres - Sueño) - Materias) - EstudioAutonomo)  
                if(HorasLibres > 0){
                 console.log("En total tienes " + HorasLibres + " horas libres")
                }else{
                console.log("No puedes tomar tantas materias");
                }   
         break;

        case 2 :
        MateriasString = prompt("Cuantas materias tienes ?" );
        Materias =  Number(MateriasString);
        SueñoString = prompt("Cuantas horas de sueño requieres normalmente ?" );
        Sueño =  Number(SueñoString);
                
                const mes = 30;
                HorasLibres = mes * UnDia;
                EstudioAutonomo = EstudioAutonomo * Materias
                Materias = Materias * DiasLaborables;
                Materias = Materias * HorasxDia;
                Sueño = Sueño * mes;
                HorasLibres = (((HorasLibres - Sueño) - Materias)- EstudioAutonomo) 
                if(HorasLibres > 0){ 
                   console.log("En total tienes " + HorasLibres + " horas libres");
                }else{
                   console.log("No puedes tomar tantas Materias");
                }
         break;

         default :

         console.log("La opcion seleccionada no existe");

}