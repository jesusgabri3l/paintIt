import { BlockPicker } from 'react-color';

export default function NavbarSettingsDropdown({ active }: { active: boolean }) {
  return (
    <div className={`navbar__settings__dropdown ${active && 'active'}`}>
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
  );
}
