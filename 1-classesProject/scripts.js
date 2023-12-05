const canvas = document.querySelector('canvas');
canvas.width =window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillStyle = 'red';
c.fillRect(300, 100, 150, 100);