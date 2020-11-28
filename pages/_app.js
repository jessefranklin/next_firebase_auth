import { AuthProvider } from 'hooks/useAuth';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
 return (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
 );
}