/* Ciclos */
/* For */
/* for(inicio; término; salto){
    Bloque de instrucciones
} */
for (var i = 0; i < 10; i = i + 1) {
    console.log(`repetición número ${i}`);
}
/* While */
/* while(condicional){
    Bloque de instrucciones
} */
/* Identificar si un número es par o impar, se debe solicitar número hasta que ingrese un impar */
var numero = prompt('Ingresa un número');
var estado = true;
while (estado == true) {
    if (numero % 2 == 1) {
        estado = false;
    } else {
        numero = prompt('Ingresa un número');
    }
}
/* Do While */
/* do{
    Bloque de instrucciones
}while(condicional); */
/* Identificar si un número es par o impar, se debe solicitar número hasta que ingrese un impar */
do{
    var numero = prompt('Ingresa un número');
    var estado = true;
    if(numero % 2 == 1){
        estado = false;
    }
}while(estado == true);

