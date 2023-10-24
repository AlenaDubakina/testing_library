import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createReduxStore } from '../../store/store';
import AppRouter from '../../router/AppRouter';

const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialState);
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};

export default renderTestApp;
