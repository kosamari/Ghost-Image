self.onmessage = function (message) {
  var style = []
  var width = message.data.width
  var height = message.data.height
  var data = message.data.data

  var x, y, i
  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      i = (x + y * width) * 4
      // skip if the pixel is competently transparent
      if (data[i + 3] !== 0) {
        style.push(x + 'px ' + y + 'px ' + 'rgba(' + data[i] + ',' + data[i + 1] + ',' + data[i + 2] + ',' + data[i + 3] + ')')
      }
    }
  }
  self.postMessage(style)
}
