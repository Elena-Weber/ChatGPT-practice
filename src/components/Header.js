import React from 'react';
import Typed from 'typed.js';

export default function Header() {
  // Create reference to store the DOM element containing the animation
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ['<span class="text-indigo-500">AI</span> Joke Generator', '<span class="text-indigo-500">Create</span> jokes <span class="text-indigo-500">in seconds</span>', 'Prolong your <span class="text-indigo-500">life</span> with <span class="text-indigo-500"><u>laughter</u><span> &#128515;'],
      typeSpeed: 70,
      loop:true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '🖊️',
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