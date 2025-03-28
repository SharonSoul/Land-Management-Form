document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const circleCount = 20; // Increased number of circles

  const animations = [
      'float-circle', 
      'drift-circle', 
      'bounce-circle', 
      'wobble-circle'
  ];

  for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement('div');
      circle.classList.add('background-circle');
      
      // Alternate between first and second gradient with more randomness
      circle.classList.add(
          Math.random() > 0.5 ? 'first-gradient' : 'second-gradient'
      );

      // More varied sizing
      const size = Math.random() * 250 + 50; // 50-300px
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;

      // More strategic positioning
      circle.style.top = `${Math.random() * 120 - 10}%`; // Allow some overflow
      circle.style.left = `${Math.random() * 120 - 10}%`; // Allow some overflow

      // Randomize animation
      const animationStyle = animations[Math.floor(Math.random() * animations.length)];
      circle.style.animationName = animationStyle;
      
      // Randomize animation duration
      circle.style.animationDuration = `${Math.random() * 15 + 30}s`; // 10-25 seconds
      
      // Randomize animation delay
      circle.style.animationDelay = `-${Math.random() * 10}s`; // Stagger start times
      
      // Randomize animation direction
      circle.style.animationDirection = 
          Math.random() > 0.5 ? 'alternate' : 'alternate-reverse';
      
      // Add subtle opacity variation
      circle.style.opacity = Math.random() * 0.2 + 0.1; // 0.1 - 0.3 opacity

      body.appendChild(circle);
  }
});

