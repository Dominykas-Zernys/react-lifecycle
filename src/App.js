import './App.css';
import Counter from './components/counter/Counter';
import LoginLogout from './components/LoginLogout/LoginLogout';
import ReactForm from './components/LoginLogout/ReactForm';

function App() {
  console.log('app component ran');
  const isUserLoggedIn = false;
  return (
    <div className='App'>
      <LoginLogout status={isUserLoggedIn} />
      <h1>app</h1>
      <div className='grid'>
        <Counter title='First' />
        <Counter title='Second' initValue='12' />
        <Counter title='Last one' initValue='15' />
      </div>
      <ReactForm />
    </div>
  );
}

export default App;
