import './styles/styles.scss';

import { createRef, useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { BlockPicker } from 'react-color';

function App() {
  const [height, setHeight] = useState(window.innerHeight - 80);
  const [width, setWidth] = useState(window.innerWidth);

  const [activeDropDown, setActiveDropdown] = useState<boolean>(false);
  const canvas = createRef<CanvasDraw>();

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight - 80);
  };

  useEffect(() => window.addEventListener('resize', onResize), []);

  return (
    <div className="main-wrapper">
      <div className="navbar">
        <div className="navbar__settings relative">
          <button
            className="navbar__settings__button"
            onClick={() => setActiveDropdown(!activeDropDown)}
          >
            <i
              className={`fa fa-gear navbar__settings__button__icon ${
                activeDropDown && 'active'
              }`}
            />
          </button>
          <div className={`navbar__settings__dropdown ${activeDropDown && 'active'}`}>
            <div className="navbar__settings__dropdown__width">
              <p className="navbar__settings__dropdwon__width__text text-white font-medium text-sm">
                Border width
              </p>
              <div className="navbar__settings__dropdown__width__section flex justify-between items-center mt-2">
                <button className="button button--primary button--small">-</button>
                <p className="navbar__settings__dropdown__width__section__text w-full text-center text-2xl text-white text-bold rounded">
                  5
                </p>
                <button className="button button--primary button--small">+</button>
              </div>
            </div>
            <div className="navbar__settings__dropdown__color mt-6">
              <p className="navbar__settings__dropdwon__width__text text-white font-medium text-sm ">
                Color
              </p>
              <div className="flex justify-center items-center mt-4">
                <BlockPicker />
              </div>
            </div>
            <hr className="mt-6 mb-6" />
            <button className="button button--danger">
              <i className="fa fa-eraser mr-2" />
              Clean canvas
            </button>
          </div>
        </div>
        <div className="navbar__title">
          <p className="navbar__title__text">The Great Spiderman</p>
        </div>
        <div className="navbar__actions">
          <button className="navbar__button">
            <i className="fa fa-undo navbar__button__icon"></i>
          </button>
          <button className="navbar__button">
            <i className="fa fa-save navbar__button__icon"></i>
          </button>
          <button className="navbar__button">
            <i className="fa fa-download navbar__button__icon"></i>
          </button>
        </div>
      </div>
      <div className="canvas">
        <CanvasDraw
          ref={canvas}
          canvasWidth={width}
          canvasHeight={height}
          lazyRadius={1}
          gridColor="rgba(150,150,150,0.2)"
        />
      </div>
    </div>
  );
}

export default App;
