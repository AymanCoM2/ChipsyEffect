function openBag() {
    // Hide the closed bag
    var bagClosed = document.querySelector('.bag-closed');
    bagClosed.style.opacity = '0';
  
    // Show the open bag
    var bagOpen = document.querySelector('.bag-open');
    bagOpen.style.opacity = '1';
  
    // Show the chips raining down
    var chipsDiv = document.getElementById('chips');
    chipsDiv.style.display = 'block';
  
    // Create and throw multiple chips
    for (var i = 0; i < 20; i++) { // Adjust number of chips as needed
      createAndThrowChip();
    }
  }
  
  function createAndThrowChip() {
    var chip = document.createElement('img');
    chip.src = 'images/chip-1.png';
    chip.classList.add('chip');
    document.getElementById('chips').appendChild(chip);
  
    // Randomize chip throw position
    var randomLeft = Math.random() * window.innerWidth;
    chip.style.left = randomLeft + 'px';
  }
  