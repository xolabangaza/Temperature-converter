// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);

//     document.getElementById("celcius").innerHTML=(valNum-32)/1.8;
// }

// function cal() {
//     let fahrenheit= document.getElementById('fahrenheit').value
// }
let fahrenheit = document.getElementById("fahrenheit");
let celcius = document.getElementById("celsius");

function fahren() {
    let valNum = (parseInt(celcius.value -  32) / 1.8);
    celcius.value = valNum;
  }
  
  function celsius() {
    let valNum = (parseInt(fahrenheit.value * 1.8) + 32);
    fahrenheit.value = valNum;
  }