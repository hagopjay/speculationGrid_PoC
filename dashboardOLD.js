// Function to get a random color
function getRandomColor() {
  const colors = ['green', 'blue', 'red', 'yellow', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to create a spark effect
function createSparkEffect(element) {
  const spark = document.createElement('div');
  spark.className = 'spark';
  spark.style.left = Math.random() * element.offsetWidth + 'px';
  spark.style.top = Math.random() * element.offsetHeight + 'px';
  element.appendChild(spark);
  setTimeout(() => spark.remove(), 500);
}

// Function to update a single list item
function updateListItem(li) {
  li.style.color = getRandomColor();
  li.style.transition = 'color 0.5s';

  // Occasionally add a spark effect
  if (Math.random() < 0.1) {
    createSparkEffect(li);
  }
}

// Function to update random list items
function updateRandomItems() {
  const items = document.querySelectorAll('li');
  const numToUpdate = Math.floor(Math.random() * 20) + 10; // Update 10-30 items

  for (let i = 0; i < numToUpdate; i++) {
    const randomIndex = Math.floor(Math.random() * items.length);
    updateListItem(items[randomIndex]);
  }
}

// Start the updates
setInterval(updateRandomItems, 500);

// Add hover effect to list items
document.querySelectorAll('li').forEach((li) => {
  li.addEventListener('mouseover', () => {
    li.style.transform = 'scale(1.1)';
    li.style.transition = 'transform 0.3s';
  });
  li.addEventListener('mouseout', () => {
    li.style.transform = 'scale(1)';
  });
});

// Add some CSS for the spark effect
const style = document.createElement('style');
style.textContent = `
  .spark {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    filter: blur(1px);
    animation: spark 0.5s linear;
  }

  @keyframes spark {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }

  li {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);
