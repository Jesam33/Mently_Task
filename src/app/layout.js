// app/layout.js
import Sidebar from './components/Sidebar';
import './globals.css';

export const metadata = {
  title: 'Techrity Dashboard',
  description: 'Dashboard for Techrity Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar activeTab="dashboard" />
          <main className="flex-1 ml-[260px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}