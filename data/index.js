let canvas = document.getElementById('canvas');

canvas.width = 512;
canvas.height = 512;

let c = canvas.getContext('2d');

function goDraw(choose, num, path) {
  
  fetch(path)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('We have some problem. Status Code: ' + response.status);
        return;
      }

      response.json().then(function(data) {
        let sizeXY = choose,
            y = 0;
  
        for (let i = 0; i < num; i++) {
          let x = 0;
      
          for (let j = 0; j < num; j++) {
  
            if (num === 32) {
              c.fillStyle = `rgb(${data[i][j][0]}, ${data[i][j][1]}, ${data[i][j][2]}, ${data[i][j][3]})`;
            } else {
              c.fillStyle = `#${data[i][j]}`;
            }
            c.fillRect(x, y, sizeXY, sizeXY);
            x += sizeXY;
          }
          y += sizeXY;
        }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error', err);
  });
}

function goRSS() {
  let img = new Image();

  img.onload = function() {
    c.drawImage(img, 0, 0, 512, 512);
  };
  img.src = 'image.png';
}

rectangles.addEventListener('click', function() {
  goDraw(128, 4, './4x4.json');
});

codewars.addEventListener('click', function() {
  goDraw(16, 32, './32x32.json');
});

rss.addEventListener('click', function() {
  goRSS();
});