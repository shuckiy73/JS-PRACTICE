const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'red';
// c.fillRect(300, 100, 150, 100);

// c.moveTo(60, 70);
// c.lineTo(300, 90);
// c.strokeStyle = 'blue';
// c.stroke();

// c.beginPath();
// // c.arc(x, y, radius, start, end, false);
// c.arc(400, 400, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'green';
// c.stroke();

// for (let i = 0; i < 100; i++) {
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;

// c.beginPath();
// c.arc(x, y, 60, 0, Math.PI * 2, false);
// c.strokeStyle = 'green';
// c.stroke();
// }

// const step = function() {
//     console.log('step!!')
// }

// setInterval(step, 100);

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#5333ed";
    c.stroke();

    c.fillStyle = this.color;
    c.fill();

    this.update();
  }
  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

// Случайное целое число в заданном промежутке:
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colorsArray = [
'#d2527f',
  '#f22613',
  '#1e824c',
  '#c8f7c5',
  '#a2ded0',
  '#e87e04',
  '#1f3a93',
  '#013243',
  '#336e7b',
];
const circlesArray = [];

for (let i = 0; i < 1000; i++) {
  const radius = 10;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;

  const colorIndex = randomInteger(1, colorsArray.length);
  circlesArray.push(
    new Circle(x, y, dx, dy, radius, colorsArray[colorIndex])
  );
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].draw();
  }
}
animate();
