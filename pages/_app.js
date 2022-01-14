/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

import theme from '../src/theme'

import Header from '../src/layout/Header';

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme()}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
