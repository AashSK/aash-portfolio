function kantenerkennung() {
	var ctx = document.getElementById('canvas').getContext('2d');
	var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	var data = imageData.data;
	var s = 30;

	for (var i = 0, l = data.length; i < l; i += 4) {

		var rgb = Math.round((data[i] + data[i + 1] + data[i + 2]) / 3);
		var diff = Math.round(data[i] - data[i + 4]);
		var diffBetrag = Math.abs(diff);
		if (diffBetrag < s) {
			rgb = 255;
		} else {
			rgb = 0;
		}

		data[i] = rgb;
		data[i + 1] = rgb;
		data[i + 2] = rgb;
		data[i + 3] = 255;

	}

	ctx.putImageData(imageData, 0, 0);

}