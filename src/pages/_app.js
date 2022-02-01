import { App } from '../components/layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
