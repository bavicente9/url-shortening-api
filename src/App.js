import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';

function App() {
  return (
    <div>

      <Header />
      <div className='presentation'>Presentation</div>
      <div className='features'>Features</div>
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
