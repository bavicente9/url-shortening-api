import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import {Presentation} from './components/presentation/Presentation'
import { ShortenerBox } from './components/ShortenerBox/ShortenerBox';
function App() {
  return (
    <div>

      <Header />
      <Presentation />
      <ShortenerBox />
      <div className='features'>Features</div>
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
