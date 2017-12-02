'use strict';

var getMaxElement = function (arr) {
  var max = -1;
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item > max) {
      max = item;
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 150, 50);

  var histogramHeight = 150;
  var step = histogramHeight / (getMaxElement(times) - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 160;
  var initialY = 80;
  var lineHeight = 5;
  var histogramMarginBottom = 110;

  var getRandomColor = function () {
    return 'rgba(0, 0, 255, ' + (Math.random() * 0.9 + 0.1) + ')';
  };

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillRect(initialX + (barWidth + indent) * i, (histogramHeight - times[i] * step) + initialY, barWidth, times[i] * step);
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, histogramHeight + histogramMarginBottom);
    ctx.fillText(Math.floor(times[i]), initialX + (barWidth + indent) * i, (histogramHeight - times[i] * step) + initialY - lineHeight);
  }
};
