function convertTemperature() {
  var temperature = parseFloat(document.getElementById('temperature').value);
  var unit1 = document.getElementById('unit1').value;
  var unit2 = document.getElementById('unit2').value;
  var result = document.getElementById('result');

  if (isNaN(temperature)) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }

  var convertedResult = '';

  if (unit1 === "celsius" && unit2 === "fahrenheit") {
    var fahrenheit = (temperature * 9/5) + 32;
    convertedResult = temperature + "°C = " + fahrenheit.toFixed(2) + "°F";
  } else if (unit1 === "celsius" && unit2 === "kelvin") {
    var kelvin = temperature + 273.15;
    convertedResult = temperature + "°C = " + kelvin.toFixed(2) + "K";
  } else if (unit1 === "fahrenheit" && unit2 === "celsius") {
    var celsius = (temperature - 32) * 5/9;
    convertedResult = temperature + "°F = " + celsius.toFixed(2) + "°C";
  } else if (unit1 === "fahrenheit" && unit2 === "kelvin") {
    var kelvin = (temperature - 32) * 5/9 + 273.15;
    convertedResult = temperature + "°F = " + kelvin.toFixed(2) + "K";
  } else if (unit1 === "kelvin" && unit2 === "celsius") {
    var celsius = temperature - 273.15;
    convertedResult = temperature + "K = " + celsius.toFixed(2) + "°C";
  } else if (unit1 === "kelvin" && unit2 === "fahrenheit") {
    var fahrenheit = (temperature - 273.15) * 9/5 + 32;
    convertedResult = temperature + "K = " + fahrenheit.toFixed(2) + "°F";
  }

  result.textContent = convertedResult;
}
