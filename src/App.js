import 'normalize.css'
import './App.css';
import { Header } from './components/header/Header';
import {Presentation} from './components/presentation/Presentation'
import { ShortenerBox } from './components/ShortenerBox/ShortenerBox';
import { Features } from './components/features/Features';
import { PanelGetStarted } from './components/panelGetStarted/PanelGetStarted';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div>

      <Header />
      <Presentation />
      <ShortenerBox />
      <Features />
      <PanelGetStarted />
      <Footer />
    </div>
  );
}

export default App;
