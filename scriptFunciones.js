/* Funciones */
/* function nombreFuncion(){
    Bloque de instrucciones
} */
/* Crear una función que indique si un número ingresado por pantalla es par o impar,
el programa se detiene cuando el usuario ingresa impar */
function parImpar(){
    do{
        var numero = prompt('Ingresa un número');
        var estado = true;
        if(numero % 2 == 1){
            estado = false;
        }
    }while(estado == true);
}

parImpar();
