import logo from './logo.svg';
import 'normalize.css'
import './App.css';
import { Header } from './components/header/Header';
import {Presentation} from './components/presentation/Presentation'
import { ShortenerBox } from './components/ShortenerBox/ShortenerBox';
import { Features } from './components/features/Features';


function App() {
  return (
    <div>

      <Header />
      <Presentation />
      <ShortenerBox />
      <Features />
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
