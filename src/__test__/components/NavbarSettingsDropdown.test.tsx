import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { describe, expect, it } from 'vitest';

import CanvasReducer from '../../store/canvas/reducer';
import SettingsReducer from '../../store/settings/reducer';
import NavbarSettingsDropdown from '../../components/navbar/components/NavbarSettingsDropdown';

function renderWithStore() {
  const store = createStore(combineReducers({ SettingsReducer, CanvasReducer }));
  return render(
    <Provider store={store}>
      <NavbarSettingsDropdown active />
    </Provider>,
  );
}

describe('NavbarSettingsDropdown', () => {
  it('increments and decrements the line width', async () => {
    const user = userEvent.setup();
    renderWithStore();

    expect(screen.getByText('1')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByText('2')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '-' }));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
