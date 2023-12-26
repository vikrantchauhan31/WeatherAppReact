import './App.css';
import NavBar from './components/NavBar';
import Tempapp from './components/Tempapp';
function App() {
  return (
    <div className='app'>
      <NavBar/>
      <div className='Full'>
      <Tempapp/>
      </div>
    </div>
  );
}

export default App;
