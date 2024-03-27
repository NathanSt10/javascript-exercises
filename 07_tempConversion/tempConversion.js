const convertToCelsius = function(temp) {
  if (!Number.isInteger(temp)) return "ERROR";
  celsius = (temp - 32) * (5/9);
  celsius = celsius * 10;
  celsius = Math.round(celsius);
  celsius = celsius / 10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp * (9/5)) + 32;
  fahrenheit = fahrenheit * 10;
  fahrenheit = Math.round(fahrenheit);
  fahrenheit = fahrenheit / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
