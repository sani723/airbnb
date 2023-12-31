import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Inter, Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin']});

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <Modal isOpen title='Airbnb App' actionLabel='Submit' /> */}
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
