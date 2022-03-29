import { useState, useEffect } from 'react';
import './counter.css';

const colors = ['red', 'green', 'blue'];

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue ? Number(initValue) : 5);
  const [currentColor, setCurrentColor] = useState(0);
  function downHandler() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log('useEffect ran');
  }, []);

  useEffect(() => {
    console.log('useEffect ran');
    if (currentColor === 3) {
      setCurrentColor(0);
    }
  }, [currentColor]);

  function upHandler() {
    setCount(count + 1);
    setCurrentColor(currentColor + 1);
  }

  function upFiveHandler() {
    setCount(count + 5);
  }

  const calcClass = () => {
    if (count < 0) {
      return 'negative';
    }
    if (count >= 20) {
      return 'twentyPlus';
    }
    return '';
  };

  return (
    <div className='counter'>
      <h2>{title}</h2>
      <h3>{colors[currentColor]}</h3>
      <h2 className={calcClass()}>{count}</h2>
      <div className='control'>
        <button onClick={upFiveHandler}>Up 5</button>
        <button onClick={upHandler}>Up</button>
        {count > 0 && (
          <button onClick={downHandler} disabled={count === 0 && true}>
            Down
          </button>
        )}
      </div>
    </div>
  );
}

export default Counter;
