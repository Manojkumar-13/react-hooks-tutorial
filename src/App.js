
import './App.css';
import Session from './sessions/useState/UseStateCounter';

  const App = () => {
  return (
    <div className='container'>
      <Session/>
    </div>
  );
}

export default App;
// React functional components uses a concept called Hook to update the content in DOM

// will help us to control component life cycle

// useState-update data in stateful component