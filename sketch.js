const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2000, 2000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    const colours = [
      '#284b8a',
      '#57407a',
      '#dd6398',
      '#97c1c5',
      '#f0eded',
      '#f2b961',
      '#dad9d4'
    ]

    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = '#284b8a';
    context.lineWidth = 10;

    for (let i = 0; i <= 1000; i++) {
      context.strokeStyle = colours[Math.round(Math.random() * 6)]
      context.lineWidth = 10 * Math.random(); 
      context.strokeRect(0 * Math.random(), 2000 * Math.random(), 980 * Math.random(), 1 * Math.random());
     
      // context.beginPath();
      // context.arc(2000 * Math.random(), 2000 * Math.random(), 10 * Math.random(), 10, 100);
      // context.stroke();
    }
    
    for (let i = 0; i <= 1000; i++) {
      context.strokeStyle = colours[Math.round(Math.random() * 6)]
      context.lineWidth = 10 * Math.random(); 
      context.strokeRect((1000 * Math.random()) + 1000, 2000 * Math.random(), 980 * Math.random(), 1 * Math.random());
     
    }

  };
};

canvasSketch(sketch, settings);
