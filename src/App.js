import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import {Presentation} from './components/presentation/Presentation'
function App() {
  return (
    <div>

      <Header />
      <Presentation />
      <div className='features'>Features</div>
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
