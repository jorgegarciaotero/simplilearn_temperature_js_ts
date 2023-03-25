
function convertTemp(type: 'Fahrenheit' | 'Celsius') {
    /*
        args: In index page there are 2 input elements that calls this function. 
          <input type="number" id="Fahrenheit" oninput="convertTemp('Fahrenheit')"> °F<br><br>
          <input type="number" id="Celsius" oninput="convertTemp('Celsius')"> °F<br><br>
    */
    if (type === 'Fahrenheit') {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
    } else if (type === 'Celsius') {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
}


const celsiusInput = document.getElementById('Celsius') as HTMLInputElement;
const fahrenheitInput = document.getElementById('Fahrenheit') as HTMLInputElement;

fahrenheitInput.addEventListener('input', () => convertTemp('Fahrenheit'));
celsiusInput.addEventListener('input', () => convertTemp('Celsius'));

