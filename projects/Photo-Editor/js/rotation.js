//Rotation links
function pixel(x, y) {
    var ctx = document.getElementById('canvas').getContext('2d');
    var h = canvas.height;
    var w = canvas.width;
    var out = (y * w + x) * 4;

    return (out);
}

/* function rotation() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var h = canvas.height;
    var w = canvas.width;
    var img = ctx.getImageData(0, 0, w, h);
    var img2 = ctx.getImageData(0, 0, w, h);

    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            img2.data[(pixel(x, y))] = img.data[(pixel((w - y), x))];
            img2.data[(pixel(x, y)) + 1] = img.data[(pixel((w - y), x)) + 1];
            img2.data[(pixel(x, y)) + 2] = img.data[(pixel((w - y), x)) + 2];
            img2.data[(pixel(x, y)) + 3] = img.data[(pixel((w - y), x)) + 3];
        }
    }
    ctx.canvas.height = w;
    ctx.canvas.width = h;
    ctx.putImageData(img2, 0, 0);
} */

function rotationR() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;

    var imageData = ctx.getImageData(0, 0, width, height);
    var rotatedImageData = ctx.createImageData(height, width);

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var inputIndex = (y * width + x) * 4;
            var outputIndex = ((x * height) + (height - y - 1)) * 4;

            // Kopiere Farbwerte des Pixels
            rotatedImageData.data[outputIndex] = imageData.data[inputIndex];
            rotatedImageData.data[outputIndex + 1] = imageData.data[inputIndex + 1];
            rotatedImageData.data[outputIndex + 2] = imageData.data[inputIndex + 2];
            rotatedImageData.data[outputIndex + 3] = imageData.data[inputIndex + 3];
        }
    }

    ctx.clearRect(0, 0, width, height); // Lösche das Originalbild
    canvas.width = height;
    canvas.height = width;
    ctx.putImageData(rotatedImageData, 0, 0);
}

/* function rotationr() {
      var ctx = document.getElementById('canvas').getContext('2d');
      var h = canvas.height;
      var w = canvas.width;
      var img = ctx.getImageData(0, 0, w, h);
      var img2 = ctx.getImageData(0,0,w,h);

          for (var y=0; y<h; y++)
          {
              for (var x=0; x<w; x++)
             {
                 img2.data[(pixel(x,y))]=img.data[(pixel(y,(h-x)))];
                 img2.data[(pixel(x,y))+1]=img.data[(pixel(y,(h-x)))+1];
                 img2.data[(pixel(x,y))+2]=img.data[(pixel(y,(h-x)))+2];
                 img2.data[(pixel(x,y))+3]=img.data[(pixel(y,(h-x)))+3];
                 
             }
          }
    ctx.canvas.height=w;
    ctx.canvas.width=h;
    ctx.putImageData(img2, 0, 0);
} */

function rotationL() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;

    var imageData = ctx.getImageData(0, 0, width, height);
    var rotatedImageData = ctx.createImageData(height, width);

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var inputIndex = (y * width + x) * 4;
            var outputIndex = ((width - x - 1) * height + y) * 4;

            // Kopiere Farbwerte des Pixels
            rotatedImageData.data[outputIndex] = imageData.data[inputIndex];
            rotatedImageData.data[outputIndex + 1] = imageData.data[inputIndex + 1];
            rotatedImageData.data[outputIndex + 2] = imageData.data[inputIndex + 2];
            rotatedImageData.data[outputIndex + 3] = imageData.data[inputIndex + 3];
        }
    }

    ctx.clearRect(0, 0, width, height); // Lösche das Originalbild
    canvas.width = height;
    canvas.height = width;
    ctx.putImageData(rotatedImageData, 0, 0);
}

/*ctx.save();
   
   ctx.translate(w/2,h/2);
   ctx.rotate(Math.PI/2);
   
   ctx.putImageData(img,0,0);
   
   ctx.restore();*/