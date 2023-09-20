let startInput, endInput, percentageText;

function setup() {
  createCanvas(400, 200);
  background(220);

  startInput = createInput();
  startInput.position(50, 50);
  startInput.attribute('placeholder', 'Enter start number');
  startInput.input(calculatePercentage);

  endInput = createInput();
  endInput.position(50, 80);
  endInput.attribute('placeholder', 'Enter end number');
  endInput.input(calculatePercentage);

  percentageText = createP('Percentage:');
  percentageText.position(50, 110);
  percentageText.style('font-size', '24px');
}

function calculatePercentage() {
  let start = parseFloat(startInput.value());
  let end = parseFloat(endInput.value());

  if (!isNaN(start) && !isNaN(end)) {
    let percentage = ((end - start) / start) * 100;
    percentageText.html('Percentage: ' + percentage.toFixed(2) + '%');
  } else {
    percentageText.html('Percentage: Invalid input');
  }
}

function draw() {
  noLoop(); // Don't continuously redraw the canvas
}
