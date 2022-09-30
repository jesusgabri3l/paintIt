import './styles/styles.scss';

import { ToastContainer } from 'react-toastify';

import Canvas from './components/canvas/Canvas';
import ColorsBottom from './components/colors-bottom/ColorsBottom';
import Navbar from './components/navbar/Navbar';
import toastifyConfig from './config/alerts/toastiy.config';

function App() {
  return (
    <div className="main-wrapper relative">
      <Navbar />
      <Canvas />
      <ColorsBottom />
      <ToastContainer {...toastifyConfig} />
    </div>
  );
}

export default App;
