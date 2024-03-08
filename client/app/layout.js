import Navbar from '@/app/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Copyright from './components/Copyright';
import { Toaster } from 'sonner';
import { UserProvider } from './state/UserContext';
import Providers, { NextUIProviders } from './providers';
import Navbar2 from './components/ui/Navbar2';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Carpooler V2.0',
  description: 'Hitch a ride to T-City'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <NextUIProviders>
            <Providers>
              {<Navbar2 />}
              {<Toaster richColors closeButton />}
              {children}
              <Copyright />
            </Providers>
          </NextUIProviders>
        </UserProvider>
      </body>
    </html>
  );
}
