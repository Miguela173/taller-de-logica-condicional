let edad = prompt("Ingrese su edad: ");
if(edad >= 18){
    console.log("Eres mayor de edad")

}
 else{
    console.log("Eres menor de edad")
 }


 let numeroUsuario = prompt ("ingrese un numero: ")
 if(numeroUsuario >= 0) {
    console.log("El numero es positivo")
 }
 else{
    console.log("El numero es negativo")
 }

 let numeroUsuarioParUImpar = prompt ("Ingrese el numero")
 if(numeroUsuarioParUImpar % 2 == 0) {
    console.log("El numero es par")
 }
 else{
    console.log("El numero es impar")
 }


 let totalCompra = prompt ("Ingrese el total de una compra: ")
 if(totalCompra > 100){
    let descuento = totalCompra * 0.1
    totalCompra = totalCompra - descuento
    console.log("tienes un descuento del 10% y su total es: " + totalCompra)

 }

 else{
    console.log ("No tienes descuento")

 }

 let numero1 = prompt ("Ingrese el primer numero: ")
 let numero2 = prompt ("Ingrese el segundo numero: ")
 if(numero1 > numero2){
    console.log("El primer numero es mayor que el segundo")
 }
 else if(numero1 < numero2){
    console.log("El segundo numero es mayor que el primero")
 }
 else{
    console.log("Los Dos numeros son iguales")
 }

 let ClasificacionDeEdad = prompt("Ingrese su edad: ")
 if (ClasificacionDeEdad >= 0 && ClasificacionDeEdad <= 12){
    console.log ("Eres Un Niño")
 }
 else if (ClasificacionDeEdad > 12 && ClasificacionDeEdad < 17){
    console.log ("Eres Un Adolescente")
 }
 else if (ClasificacionDeEdad > 18 && ClasificacionDeEdad < 64){
    console.log ("Eres Un adulto")
 }
 else if (ClasificacionDeEdad >=64){
    console.log ("Eres Un adulto Mayor")
 }

 let nota = prompt("Ingrese una nota entre 0 y 100: ")
 if (nota >= 90 && nota <= 100){
    console.log("¡EXCELENTE!")
 }
 else if(nota >= 70 && nota <=89){
    console.log("Bueno")
 }
 else if (nota >= 50 && nota <= 69){
    console.log("Regular")
 }
 else if(nota >= 0 && nota <=49){
    console.log("Insuficiente")
 }

 let OpcionMenu = prompt ("Elija una opcion de menu: 1-. Pizza 2-. Hamburguesa 3-. Tacos");

 switch(OpcionMenu){
    case 1:
        console.log("Seleccionaste Pizza")
        break;
    case 2:
        console.log("Seleccionaste Hamburguesa")
        break;
        case 3:
            console.log("Seleccionaste tacos")
            break;
            
            default:
                console.log("Opcion no valida.")
                    break;
 }

 let LadoTriangulo =  ("Ingrese el primer lado de un triangulo")
 let LadoTriangulo2 =  ("Ingrese el segundo lado de un triangulo")
 let LadoTriangulo3 =  ("Ingrese el tercer lado de un triangulo")
 if(LadoTriangulo == LadoTriangulo2 == LadoTriangulo3){
    console.log("El triangulo es equilatero")
 }
 else if (LadoTriangulo === LadoTriangulo2 || LadoTriangulo2 === LadoTriangulo3 || LadoTriangulo3 === LadoTriangulo){
    console.log("El triangulo es isoceles")
 }
 else{
    console.log("El triangulo es escaleno")
 }

 let adivinaNumero = prompt("Adivina un numero entre 1 y 10: ")
 let numeroAleatorio = Math.floor(Math.random() *10) +1
 if (adivinaNumero == numeroAleatorio){
    console.log("Has acertado!!")
 }
 else {
    console.log("intenta de nuevo")

 }

 let PrecioBase = prompt ("Ingrese el precio base del producto: ")
 if(PrecioBase > 500){
    let Descuento = PrecioBase *0.15
    console.log("El precio final es: " + (PrecioBase - Descuento))
 }
 if(PrecioBase >= 300 && PrecioBase < 500){
    let Descuento = PrecioBase *0.10
    console.log("El precio final es: " + (PrecioBase - Descuento))
 }
 else {
    let Descuento = PrecioBase *0.5
    console.log("El precio final es: " (PrecioBase - Descuento))
 }

 /* Ejercicio 12 */