import './styles/styles.scss';

import { ToastContainer } from 'react-toastify';

import Canvas from './components/canvas/Canvas';
import ColorsBottom from './components/colors-bottom/ColorsBottom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="main-wrapper relative">
      <Navbar />
      <Canvas />
      <ColorsBottom />
      <ToastContainer
        autoClose={1000}
        progressClassName="bg-red-900"
        bodyClassName="text-base font-bold"
        theme="dark"
        hideProgressBar
        position="bottom-left"
      />
    </div>
  );
}

export default App;
