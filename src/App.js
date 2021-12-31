import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './Containers/HomePage';


const App = () => {
  return (
    <>
      <HomePage />
      {/* <Route exact path="/" component={HomePage} /> */}
    </>
  );
}

export default App;
