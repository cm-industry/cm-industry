import './globals.css';
import LayoutClient from './LayoutClient';

export const metadata = {
  title: {
    default: 'CM Industry',
    template: '%s - CM Industry',
  },
  description: 'Some default description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#101010]">
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
