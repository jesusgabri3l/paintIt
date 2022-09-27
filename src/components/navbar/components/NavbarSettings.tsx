import { useState } from 'react';

import NavbarSettingsDropdown from './NavbarSettingsDropdown';
export default function NavbarSettings() {
  const [activeDropDown, setActiveDropdown] = useState<boolean>(false);

  return (
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
      <NavbarSettingsDropdown active={activeDropDown} />
    </div>
  );
}
