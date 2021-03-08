import '../styles/global.css';
import { SidebarProvider } from '../contexts/SidebarContext';

function MyApp({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  )
}

export default MyApp
