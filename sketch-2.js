const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2000, 2000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#c35961';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(2200 * Math.random(), 2200 * Math.random());
      // context.arc(2000 * Math.random(), 2000 * Math.random(), 200 * Math.random(), 0, Math.PI / 8 * Math.random(), false);
      context.lineWidth = 2;
      context.strokeStyle = '#000';
      context.stroke();
    }

  };
};

canvasSketch(sketch, settings);
