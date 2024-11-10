import React, { useState, useEffect } from 'react';

const App = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = document.getElementById('elementToAnimate');
    element.style.transition = 'transform 0.5s ease-in-out';
    element.style.transform = `scale(${scale})`;
  }, [scale]);

  return (
    <div>
      <div id="elementToAnimate">Element to Animate</div>
      <button onClick={() => setScale(scale + 0.1)}>Increase Scale</button>
      <button onClick={() => setScale(scale - 0.1)}>Decrease Scale</button>
    </div>
  );
};

export default App;
