import { useRef, useState } from 'react';

import { useClickOutside } from '../../../config/interactions/useClickOutside';
import NavbarSettingsDropdown from './NavbarSettingsDropdown';

export default function NavbarSettings() {
  const [activeDropDown, setActiveDropdown] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setActiveDropdown(false));

  return (
    <div className="navbar__settings relative" ref={containerRef}>
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
