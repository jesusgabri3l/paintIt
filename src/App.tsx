import './styles/styles.scss';

import Canvas from './components/canvas/Canvas';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Canvas />
    </div>
  );
}

export default App;
