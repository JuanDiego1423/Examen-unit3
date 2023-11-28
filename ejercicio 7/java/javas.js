function convertir() {
    // Obtener la temperatura en grados Celsius desde el campo de entrada
    var celsius = parseFloat(document.getElementById("celsiusInput").value);

    // Verificar si la entrada es un número válido
    if (!isNaN(celsius)) {
        // Realizar la conversión a grados Fahrenheit
        var fahrenheit = (celsius * 9/5) + 32;

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = celsius + " grados Celsius son " + fahrenheit.toFixed(2) + " grados Fahrenheit.";
    } else {
        // Mostrar un mensaje de error si la entrada no es un número válido
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
    }
}