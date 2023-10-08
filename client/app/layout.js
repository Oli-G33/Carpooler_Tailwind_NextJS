import Navbar from '@/app/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Copyright from './components/Copyright';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Carpooler V2.0',
  description: 'Hitch a ride to T-City'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<Navbar />}
        {<Toaster richColors />}
        {children}
        <div className="flex justify-center">
          {' '}
          <Copyright />
        </div>
      </body>
    </html>
  );
}
