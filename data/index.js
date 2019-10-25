let canvas = document.getElementById('canvas');

canvas.width = 512;
canvas.height = 512;

let c = canvas.getContext('2d');

let rect = [
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];

function goRectangles(choose) {
  let sizeXY = choose,
      y = 0;

  for (let i = 0; i < 4; i++) {
    let x = 0;
    
    for (let j = 0; j < 4; j++) {
      c.fillStyle = `#${rect[i][j]}`;
      c.fillRect(x, y, sizeXY, sizeXY);
      x += sizeXY;
    }
    y += sizeXY;
  }
  return console.log('congrats');
}

// goRectangles(128);
rectangles.addEventListener("click", function() {
  goRectangles(128)
});
// c.fillStyle = `#${rectangles[0][0]}`;
// c.fillRect(0, 0, 128, 128);

// c.fillStyle = `#${rectangles[0][1]}`;
// c.fillRect(128, 0, 128, 128);
// c.fillStyle = `#FFEB3B`;
// c.fillRect(x, 0, x, y);