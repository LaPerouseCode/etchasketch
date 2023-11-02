const gridContainer = document.getElementById('gridContainer');
// Create 16x16 grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

gridContainer.addEventListener("mouseover", (event) => {
    const hoveredSquare = event.target;
    hoveredSquare.style.backgroundColor = "lightblue"; 
});

const button = document.querySelector('button');
button.addEventListener('click', function() {
    // Display the prompt when the button is clicked
    const userInput = prompt('Please Give me a number');
    console.log(userInput);
  });

  