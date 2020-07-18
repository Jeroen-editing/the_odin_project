const ftoc = function(temp) {
  let decimals =
      (temp - 32) * 5 / 9;
  let rounded = Math.round(decimals * 10) / 10;
  let celcius = parseFloat(rounded.toFixed(1));

  console.log(celcius);
  return celcius;
};

const ctof = function(temp) {
  let decimals =
      temp * 9 / 5 + 32;
  let rounded = Math.round(decimals * 10) / 10;
  let fahrenheit = parseFloat(rounded.toFixed(1));

  console.log(fahrenheit);
  return fahrenheit;
};

ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10);

module.exports = {
  ftoc,
  ctof
};
