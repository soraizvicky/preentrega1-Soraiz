alert("Tu calculadora online :)");

let opcion = prompt("Escribi la operacion que queres realizar: + , - , / , *, chau");

while (opcion != "chau") {

if (opcion == "+") {
    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    
    let suma = num1 + num2;
    
    alert("Esta suma da como resultado: " + suma);
}
else if (opcion == "-") {
    let num1 = parseInt(prompt("Ingrese el primer número entero"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero"));

    let resta = num1 - num2;
    
    alert("Esta resta da como resultado: " + resta);
}
else if (opcion == "/") {
    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));

    let division = num1 / num2;
  
    alert("Esta division da como resultado: " + division);
}
else if (opcion == "*") {
    // Pedir dos números 
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
   
    let multiplicacion = num1 * num2;
    
    alert("Esta multiplicacion da como resultado:" + multiplicacion);
}
else {
    alert("No ingreso la opcion correctamente");
}

opcion = prompt("Escribi la operacion que queres realizar: + , - , / , * ");

}

alert("Hasta la proxima cuenta :)");
