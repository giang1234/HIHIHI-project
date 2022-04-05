import App from './App';
import ReactDOM from 'react-dom';
// import 'src/utils/chart';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

import store from './store';
import i18n from './assets/locales/i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <SidebarProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </SidebarProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
