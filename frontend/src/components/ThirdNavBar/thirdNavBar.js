import React, { useState, useEffect } from 'react';
import './ThirdNavBar.css';

function ThirdNavBar() {
  const messages = [
    'Welcome to our website!',
    'Check out our latest products.',
    'Dont miss our special offers!',
    // Add more messages as needed
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= messages.length ? 0 : nextIndex;
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [messages.length]);

  return (
    <div className="slideshow-container">
      {/* {messages.map((message, index) => (
        <div
          className={`slideshow-message ${
            index === currentMessageIndex ? 'active' : ''
          }`}
          key={index}
        >
          <span>{message}</span>
        </div>
      ))} */}
    </div>
  );

  // useEffect(() => {
  //   // Set up a timer to advance to the next message after 7 seconds
  //   const timer = setInterval(() => {
  //     setCurrentMessageIndex(prevIndex =>
  //       (prevIndex + 1) % messages.length
  //     );
  //   }, 7000);

  //   // Clean up the timer on component unmount
  //   return () => clearInterval(timer);
  // }, []);

  // return (
  //   <div className="slideshow-bar">
  //     <div className="message-container">
  //       {messages.map((message, index) => (
  //         <div
  //           key={index}
  //           className={`message ${index === currentMessageIndex ? 'active' : ''}`}
  //         >
  //           {message}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default ThirdNavBar;
