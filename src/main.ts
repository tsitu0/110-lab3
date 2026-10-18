import Konva from 'konva';

// first we need to create a stage, entire drawing area
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer, clear sheets basically , shapes cant go directly on stage
const layer = new Konva.Layer();

const lemon = new Konva.Shape({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sceneFunc: (ctx, shape) => {
    ctx.beginPath();
    ctx.moveTo(-110, 5);        //left tip                     
    ctx.bezierCurveTo(-90, -10, -80, -70, 0, -65);    //pull point 1, pull point 2, endpoint
    ctx.bezierCurveTo(70, -60, 85, -15, 110, -5);     
    ctx.bezierCurveTo(90, 10, 80, 65, 0, 65);         
    ctx.bezierCurveTo(-70, 60, -85, 15, -110, 5); 
    ctx.closePath(); //seals the left corner
    ctx.fillStrokeShape(shape);//paints with the code below
  },
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 10,
  lineJoin: 'round',
  draggable: true
});

lemon.on('mouseenter', () => {
  stage.container().style.cursor = 'pointer';
});

lemon.on('mouseleave', () => {
  stage.container().style.cursor = 'default';
});

lemon.on('mousedown touchstart', () => {
  lemon.to({
    scaleX: 1.1,
    scaleY: 1.1,
    duration: 0.1
  });
});

lemon.on('mouseup touchend dragend', () => {
  lemon.to({
    scaleX: 1,
    scaleY: 1,
    duration: 0.1
  });
});
// add the shape to the layer
layer.add(lemon);

// add the layer to the stage
stage.add(layer);
