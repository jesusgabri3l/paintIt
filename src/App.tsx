import './styles/styles.scss';

import Canvas from './components/canvas/Canvas';
import ColorsBottom from './components/colors-bottom/ColorsBottom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="main-wrapper relative">
      <Navbar />
      <Canvas />
      <ColorsBottom />
    </div>
  );
}

export default App;
