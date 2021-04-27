import React, {useState} from 'react';
import ReactDom from 'react-dom';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'short circuit'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

ReactDom.render(<ShortCircuit />, document.getElementById("roots"));