class Elektro {
  constructor(name) {
    (this.name = name),
      (this.power = 0), //мощность
      (this.onPower = false), //не в розетке
      (this.isWorking = false); // сейчас не работает
  }
  powerOn() {
    //в розетку
    this.onPower = true;
    console.log(this.name + " - Включили в розетку");
  }
  powerOff() {
    //из розетки
    this.onPower = false;
    this.isWorking = false;
    console.log(this.name + " - Вытащили из розетки");
  }
  countPow() {
    console.log(this.power + "Ватт"); //мощность в консоль
  }
}

class Wash extends Elektro {
  constructor(name) {
    super(name), (this.name = "Стиралка"), (this.power = 2000);
  }
  delayed() {
    //включить с задержкой
    console.log("Стиралка должна включиться через 5 секунд");
    console.log(`${this.name} - this.isWorking - ${this.isWorking}`);
    setTimeout(function () {
      this.isWorking = true;
      console.log(`Стиралка - this.isWorking - ${this.isWorking}`);
    }, 5000);
  }
}

class Nout extends Elektro {
  constructor(name) {
    super(name), (this.name = "Ноут"), (this.power = 5), (this.charged = 0); //не заряжено
  }

  powerOn() {
    //включили в розетку
    this.onPower = true;
    this.charged = 100; //и сразу заряжено
    console.log("Зарядили ноут");
  }

  on() {
    this.isWorking == true; //ноут работает
    console.log("Ноут работает");
    if (this.onPower == false) {
      console.log(`Заряд ноута ${this.charged}`);
      setTimeout(function () {
        this.charged = 0;
        this.isWorking = false;
        console.log("Ноут разрядился");
        console.log(`Заряд ноута ${this.charged}`);
      }, 5000);
    }
  }

  off() {
    this.isWorking = false; //ноут не работает
    console.log("Ноут не работает");
  }
}

const wash = new Wash();
wash.powerOn();
wash.delayed();

const nout = new Nout();
nout.powerOn();
nout.powerOff();
nout.on();
