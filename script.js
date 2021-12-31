
// Create a 16 x 16 grid of square divs
const container = document.querySelector('.container');
// Make function able to take input for number of rows and columns
function createGrid(rows, columns) {
  
  // Use a loop to first create the row 
  for (let i = 0; i < rows; i++){
    const row = document.createElement('div');
    // Need to toggle row class first for each row div
    row.classList.toggle('row');
    
    // Then use another loop to fill the row with the amount of divs
    for (let j = 0; j < columns; j++) {
      const innerDiv = document.createElement('div');
      // Then add class to each inner div
      innerDiv.classList.toggle('inner-div');

      row.appendChild(innerDiv);
    }

    container.appendChild(row);
    addHover();
  }
}

createGrid(25, 25);


function hoverOver(){
  this.classList.add('hover-div');
}


// Create Event Listener to add the hover-div class to the inner div on mouseover
function addHover() {
  const divs = document.querySelectorAll('.inner-div');
  divs.forEach((div) => {
    div.addEventListener('mouseover', hoverOver);
  });
}

// Create function and event listener for the button
// Function must reset current grid
// Then send prompt to user asking for the number of squares per side for new grid
// Maybe use removeChild to delete all elements in current grid
// Can get container div
// Get all inner divs using querySelectorAll
// Use forEach on every element to call removeChild on each element
// Call createGrid with new value from prompt
function resetGrid() {
  const rows = document.querySelectorAll('.row');

  while (true) {
    let result = prompt("Please enter the row & column amount for the new grid.");
    if (parseInt(result) > 100) {
      alert("The number you entered was too large. Please enter another number lower than 100");
    } else if (parseInt(result) <= 0) {
      alert("The number you entered was too small. Please enter another number greater than 0");
    } else {
      rows.forEach((row) =>{
        container.removeChild(row);
      })
      createGrid(result, result);
      addHover();
      return
    }
  }

}

const button = document.getElementById('reset-btn');
button.addEventListener('click', resetGrid);