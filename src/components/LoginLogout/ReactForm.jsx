import { useState } from 'react';

function ReactForm() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState('');

  function nameChangeHandler(event) {
    const value = event.target.value;
    setUserName(value);
  }

  function userAgeHandler(event) {
    setUserAge(event.target.value);
  }

  function formSendHandler(event) {
    event.preventDefault();
    if (userAge === '' || userName === '') {
      setError('fields must be filled in');
      return;
    }
    setError(null);
    const newObj = {
      userAge,
      userName,
    };
    console.log(newObj);
    setUserAge('');
    setUserName('');
  }

  return (
    <div>
      <h2>React form</h2>
      <form onSubmit={formSendHandler} action=''>
        {error && <h3 className='negative'>{error}</h3>}
        <input
          onChange={nameChangeHandler}
          value={userName}
          type='text'
          placeholder='name'
        />
        <input
          onChange={userAgeHandler}
          value={userAge}
          type='number'
          placeholder='age'
        />
        <button type='submit'>Submit</button>
      </form>
      <div className='results'>
        Username: {userName} User age: {userAge}
      </div>
    </div>
  );
}

export default ReactForm;
