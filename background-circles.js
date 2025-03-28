document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const circleCount = 15;
  
    for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement('div');
      circle.classList.add('background-circle');
      
      // Alternate between first and second gradient
      circle.classList.add(i % 2 === 0 ? 'first-gradient' : 'second-gradient');
  
      // Randomize size 
      const size = Math.random() * 200 + 100; // 100-300px
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
  
      // Randomize position
      circle.style.top = `${Math.random() * 100}%`;
      circle.style.left = `${Math.random() * 100}%`;
  
      body.appendChild(circle);
    }
  });