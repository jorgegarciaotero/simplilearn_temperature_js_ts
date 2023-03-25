function convertTemp(type) {
    /*

    */
    var celsiusInput = document.getElementById('Celsius');
    var fahrenheitInput = document.getElementById('Fahrenheit');
    console.log("FAR", fahrenheitInput.value);
    console.log("CELS:", celsiusInput.value);
    if (type === 'Fahrenheit') {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        var celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
    }
    else if (type === 'Celsius') {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
}
var celsiusInput = document.getElementById('Celsius');
var fahrenheitInput = document.getElementById('Fahrenheit');
fahrenheitInput.addEventListener('input', function () { return convertTemp('Fahrenheit'); });
celsiusInput.addEventListener('input', function () { return convertTemp('Celsius'); });
