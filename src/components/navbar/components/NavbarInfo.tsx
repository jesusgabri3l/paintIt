import { useRef, useState } from 'react';

import { useClickOutside } from '../../../config/interactions/useClickOutside';

const TIPS = [
  'Draw with your mouse or graphic tablet',
  'Ctrl + Z: undo',
  'Ctrl + / Ctrl -: brush size',
  'Ctrl + 1-9: quick colors',
  'Double click the name to rename it',
];

export default function NavbarInfo() {
  const [active, setActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setActive(false));

  return (
    <div className="navbar__info relative" ref={containerRef}>
      <button
        className="navbar__info__button"
        onClick={() => setActive(!active)}
      >
        <i className="fa fa-circle-info navbar__info__button__icon" />
      </button>
      <div className={`navbar__info__dropdown ${active && 'active'}`}>
        <p className="navbar__info__dropdown__title">How to use PaintIt</p>
        <ul className="navbar__info__dropdown__list">
          {TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
