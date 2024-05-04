//Funktion um auf die Pixel zuzugreifen
function pixel(x, y) {
	var ctx = document.getElementById('canvas').getContext('2d');
	var h = canvas.height;
	var w = canvas.width;
	var out = (y * w + x) * 4;

	return (out);
}

function vertikal() {
	var ctx = document.getElementById('canvas').getContext('2d');
	var h = canvas.height;
	var w = canvas.width;

	var img = ctx.getImageData(0, 0, w, h);
	var img2 = ctx.getImageData(0, 0, w, h);

	for (var y = 0; y < h; y++) {
		for (var x = 0; x < w; x++) {
			img2.data[pixel(x, y)] = img.data[pixel(x, (h - y - 1))];
			img2.data[(pixel(x, y)) + 1] = img.data[(pixel(x, (h - y - 1))) + 1];
			img2.data[(pixel(x, y)) + 2] = img.data[(pixel(x, (h - y - 1))) + 2];
			img2.data[(pixel(x, y)) + 3] = img.data[(pixel(x, (h - y - 1))) + 3];
		}
	}

	ctx.putImageData(img2, 0, 0);
}

function horizontal() {
	var ctx = document.getElementById('canvas').getContext('2d');
	var h = canvas.height;
	var w = canvas.width;

	var img = ctx.getImageData(0, 0, w, h);
	var img2 = ctx.getImageData(0, 0, w, h);

	for (var y = 0; y < h; y++) {
		for (var x = 0; x < w; x++) {
			img2.data[pixel(x, y)] = img.data[pixel((w - 1 - x), y)];
			img2.data[(pixel(x, y)) + 1] = img.data[(pixel((w - 1 - x), y)) + 1];
			img2.data[(pixel(x, y)) + 2] = img.data[(pixel((w - 1 - x), y)) + 2];
			img2.data[(pixel(x, y)) + 3] = img.data[(pixel((w - 1 - x), y)) + 3];
		}
	}

	ctx.putImageData(img2, 0, 0);
}