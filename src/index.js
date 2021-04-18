import React, {useState} from 'react';
import ReactDom from 'react-dom';

const Counter = () => {

  const [value, setValue] = useState(123);

  return (
    <section style={{ margin: '4rem 0', textAlign: 'center' }}>
        <h2>available rooms</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Book room
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          leave room
        </button>
      </section>
  );

};

ReactDom.render(<Counter />, document.getElementById("roots"));