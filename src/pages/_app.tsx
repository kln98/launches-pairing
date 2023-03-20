import PreloadedState from '@reduxjs/toolkit';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { RootState, setupStore } from '../store/store';
import '../styles/globals.css';
const store = setupStore();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
