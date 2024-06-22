// maint.js
function arrayOperations() {
  var array = new Array(6);
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random()*100);
  }
  
  // Выводим исходный массив
  document.getElementById("output3").innerHTML = "Исходный массив: " + array.join(", ");
  
  var sum = 0;
  var maxIndex = 0;
  var maxElement = array[0];
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
    if (array[i] > maxElement) {
      maxElement = array[i];
      maxIndex = i;
    }
  }

  var temp = array[maxIndex];
  array[maxIndex] = array[array.length - 1];
  array[array.length - 1] = temp;
  

  document.getElementById("output3").innerHTML += "<br>Измененный массив: " + array.join(", ");
  

  document.getElementById("output3").innerHTML += "<br>Сумма четных элементов: " + sum;
}

function calculateY() {
  try {
    var x = parseFloat(document.getElementById("x").value);
    if (isNaN(x)) {
      throw new Error("Значение x не является числом");
    }
    if (x === 1) {
      throw new Error("Деление на ноль невозможно");
    }
    var y = ((x - 2) / (x - 1)).toFixed(2);
  } catch (error) {
    if (error.message.startsWith("Значение x")) {
      alert("Ошибка: " + error.message);
    }
  } finally {
    document.getElementById("output4").innerHTML = y;
  }
}

// external.js
function stringOperations() {
  var str1 = "Я люблю Беларусь";
  var str2 = "Я учусь в Политехническом колледже";
  var length = str1.length;

  document.getElementById("output5").innerHTML =
    "Длина строки S1: " + length + "<br>" +
    "Строка S2 без подстроки 'учусь': " +
    str2.replace("учусь", "") + "<br>" +
    "Строка S1 с заменой 'ю' на '*': " + str1.replace(/ю/g, "*");
}