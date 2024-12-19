// Car class
class Car {
    constructor(color, doors) {
      this.color = color;
      this.doors = doors;
    }
  
    getColor() {
      return this.color;
    }
  
    getDoors() {
      return this.doors;
    }
  
    honk() {
      return "Гудок гудок!";
    }
  }
  
  // ElectricCar class
  class ElectricCar extends Car {
    constructor(color, doors, batteryCapacity) {
      super(color, doors);
      this.batteryCapacity = batteryCapacity;
    }
  
    getBatteryCapacity() {
      return this.batteryCapacity;
    }
  
    honk() {
      return "Бип бип!";
    }
  }
  
  // Function to test the vehicles
  function testCars() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
  
    const myCar = new Car("Красный", 4);
    const myElectricCar = new ElectricCar("Синий", 4, 60);
  
    outputDiv.innerHTML += `Моя машина: <br>Цвет: ${myCar.getColor()}<br>Двери: ${myCar.getDoors()}<br>Гудок: ${myCar.honk()}<br><br>`;
    outputDiv.innerHTML += `Моя электрическая машина: <br>Цвет: ${myElectricCar.getColor()}<br>Двери: ${myElectricCar.getDoors()}<br>Емкость батареи: ${myElectricCar.getBatteryCapacity()}<br>Гудок: ${myElectricCar.honk()}<br>`;
  }
  
  // Get the button element
  const testButton = document.getElementById("test-button");
  
  // Attach an event listener to the button
  testButton.addEventListener("click", testCars);