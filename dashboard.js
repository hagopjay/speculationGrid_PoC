// Define color pairs (text color, background color)
const colorPairs = [
  ['#FFFFFF', '#1A237E'], // White on Dark Blue
  ['#FFEB3B', '#311B92'], // Yellow on Deep Purple
  ['#E8F5E9', '#1B5E20'], // Light Green on Dark Green
  ['#FFF3E0', '#E65100'], // Light Orange on Dark Orange
  ['#E1F5FE', '#01579B'], // Light Blue on Dark Blue
  ['#F3E5F5', '#4A148C'], // Light Purple on Dark Purple
  ['#FAFAFA', '#212121'], // Off White on Almost Black
  ['#FFF9C4', '#F57F17'], // Light Yellow on Dark Yellow
  ['#F1F8E9', '#33691E'], // Very Light Green on Dark Green
  ['#FFEBEE', '#B71C1C'], // Light Red on Dark Red
];

// Function to get a random color pair
function getRandomColorPair() {
  return colorPairs[Math.floor(Math.random() * colorPairs.length)];
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
  const [textColor, bgColor] = getRandomColorPair();
  li.style.color = textColor;
  li.style.backgroundColor = bgColor;
  li.style.transition = 'color 0.5s, background-color 0.5s';

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
    li.style.transition = 'transform 0.3s, color 0.5s, background-color 0.5s';
    li.style.zIndex = '1';
  });
  li.addEventListener('mouseout', () => {
    li.style.transform = 'scale(1)';
    li.style.zIndex = '0';
  });
});

// Add some CSS for the spark effect and list items
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
    z-index: 2;
  }

  @keyframes spark {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }

  li {
    position: relative;
    overflow: hidden;
    padding: 2px 5px;
    border-radius: 3px;
    margin: 2px 0;
    transition: transform 0.3s, color 0.5s, background-color 0.5s;
  }

  .section {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
document.head.appendChild(style);

// Set a dark background for the body
document.body.style.backgroundColor = '#121212';
document.body.style.color = '#FFFFFF';
