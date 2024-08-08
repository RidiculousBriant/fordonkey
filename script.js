function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.width = `${Math.floor(Math.random() * 30) + 10}px`;
  heart.style.height = heart.style.width;
  heart.style.left = `${Math.floor(Math.random() * 100)}%`;
  heart.style.background = `rgba(255, ${Math.floor(Math.random() * 50) + 150}, ${Math.floor(Math.random() * 50) + 150}, 0.8)`;
  const duration = Math.floor(Math.random() * 5) + 5;
  heart.style.animation = `love ${duration}s ease-in-out infinite`;
  return heart;
}

// Get the container element where the hearts will be added
const container = document.querySelector('.bg_heart');

// Define a function that repeatedly adds hearts to the container
function addHearts() {
  const heart1 = createHeart();
  const heart2 = createHeart();
  container.appendChild(heart1);
  container.appendChild(heart2);
}

// Start the animation loop
setInterval(addHearts, 500);

