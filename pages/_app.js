import { CertProvider } from '../context/CertContext';

export default function App({ Component, pageProps }) {
  return (
    <CertProvider>
      <Component {...pageProps} />
    </CertProvider>
  );
}
