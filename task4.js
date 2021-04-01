/*
объекты:
стиралка
ноутбук

общие
мощность: number
в розетке: true false
в розетку () => {в розетке on}
из розетки () => {в розетке off}
посчитать мощность () => {мощность в консоль}

местные
  стиралка
    стирка включена
    отложенная стирка ()
  ноутбук
    заряжено: number в %
    включить () => {уменьшать заряжено}
    в розетку () => {увеличивать заряжено}

*/
function Elektro(name) {
  (this.name = name),
    (this.power = 0), //мощность
    (this.onPower = false), //не в розетке
    (this.isWorking = false); // сейчас не работает
}

Elektro.prototype.powerOn = function () {
  //в розетку
  this.onPower = true;
  console.log(this.name + " - Включили в розетку");
};

Elektro.prototype.powerOff = function () {
  //из розетки
  this.onPower = false;
  this.isWorking = false;
  console.log(this.name + " - Вытащили из розетки");
};

Elektro.prototype.countPow = function () {
  console.log(this.power + "Ватт"); //мощность в консоль
};

function Wash() {
  (this.name = "Стиралка"),
    (this.power = 2000),
    (this.delayed = function () {
      //включить с задержкой
      console.log("Стиралка должна включиться через 5 секунд");
      console.log(`${this.name} - this.isWorking - ${this.isWorking}`);
      setTimeout(function () {
        this.isWorking = true;
        console.log(`Стиралка - this.isWorking - ${this.isWorking}`);
      }, 5000);
    });
}

function Nout() {
  (this.name = "Ноут"),
    (this.power = 5),
    (this.charged = 0), //не заряжено
    (this.powerOn = function () {
      //включили в розетку
      this.onPower = true;
      this.charged = 100; //и сразу заряжено
      console.log("Зарядили ноут");
    }),
    (this.on = function () {
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
    }),
    (this.off = function () {
      this.isWorking = false; //ноут не работает
      console.log("Ноут не работает");
    });
}
Wash.prototype = new Elektro();
Nout.prototype = new Elektro();

const wash = new Wash();
wash.powerOn();
wash.delayed();

const nout = new Nout();
nout.powerOn();
nout.powerOff();
nout.on();
