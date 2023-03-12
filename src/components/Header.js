import React from 'react';
import Typed from 'typed.js';

export default function Header() {
  // Create reference to store the DOM element containing the animation
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ['AI Joke Generator', 'Create <u>jokes</u> in seconds', 'Prolong your life with <u>laughter</u> &#128515;'],
      typeSpeed: 70,
      loop:true,
      loopCount: Infinity,
      showCursor: true,
      backSpeed: 100,
      backDelay: 700,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center px-5 py-5">
        <h1 className="text-xl md:text-5xl font-bold text-indigo-700">
          <span ref={element} />
        </h1>
      </div>
    </div>
  );
}