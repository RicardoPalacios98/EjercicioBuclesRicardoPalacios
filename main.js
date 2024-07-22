// //1 

// let numero = prompt("Ingrese un numero a multiplicar del 1 al 10")


// for (let i = 0; i <= 10; i++) {
//     console.log(numero * i);
    
// }

//2


// function numeroSecreto(){
//     let numeroSecreto = 0
//     let numeroIngresado = parseInt(prompt("Ingrese un número para encontrar el número secreto: "))
//     let count = 1
//     let band = false
//     while(band == false){
//         if (numeroSecreto == numeroIngresado) {
//             band = true
//         }else if (numeroSecreto < numeroIngresado) {
//             numeroIngresado = parseInt(prompt(" intente nuevamente: "))
//             count++
//         } else {
//             numeroIngresado = parseInt(prompt(" intente nuevamente: "))
//             count++
//         }
//     }
//   console.log("Número encontrado en " + count + " intentos");
// }
// numeroSecreto()


//3

function numeroSecreto(){
    let numeroSecreto = 23;
    let numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 100 para encontrar el número secreto: "))
    let count = 1
    let band = false
    while(band == false){
        if (numeroSecreto == numeroIngresado) {
            band = true
        }else if (numeroSecreto < numeroIngresado) {
            numeroIngresado = parseInt(prompt("el numero secreto es menor de " + numeroIngresado + " intente nuevamente: "))
            count++
        } else {
            numeroIngresado = parseInt(prompt("el numero secreto es mayor a " + numeroIngresado + " intente nuevamente: "))
            count++
        }
    }
    console.log("Felicidades, encontró el numero en " + count + " intentos");
}
numeroSecreto()
    
//4


// let numero = parseInt(prompt("Ingrese un número para encontrar los números primos de ese numero al 1 "))

// for (let i = 1; i <= numero; i++) {
//     let cantidad = 0;
//     for (let j = 1; j <= i; j++) {
//        if (i % j == 0) {
//         cantidad++;
//        }
//     }
//     if (cantidad == 2) {
//         console.log(i);
//     }
// }


//5



// let numero = parseInt(prompt("Ingrese un número para encontrar los números divisores del mismo "))

// for (let i = 0; i <= numero; i++) {
    //const element = array[i];
    
// }
// console.log(numero / i);

// for (let i = 1; i <= numero; i++) {
//     let cantidad = 0;
//     for (let j = 1; j <= i; j++) {
//        if (i % j == 0) {
//         cantidad++;
//        }
//     }
//     if (cantidad == 2) {
//         console.log(i);
//     }
// }



