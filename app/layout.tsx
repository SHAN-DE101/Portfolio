import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shantanu Dey — Software Engineer & Cloud Security Architect',
  description:
    'Portfolio of Shantanu Dey: Software Engineer specializing in backend microservices, edge reverse proxies (AI Token Gateway), and serverless distributed logistics (E-Fuel).',
  keywords: [
    'Shantanu Dey',
    'Software Engineer',
    'AI Token Gateway',
    'E-Fuel',
    'Spring Boot',
    'Cloud Architecture',
    'Cybersecurity',
    'Next.js',
    'Azure',
  ],
  authors: [{ name: 'Shantanu Dey', url: 'https://github.com/SHAN-DE101' }],
  creator: 'Shantanu Dey',
  openGraph: {
    title: 'Shantanu Dey — Software Engineer & Cloud Security Architect',
    description:
      'Backend engineering, edge API gateways, and distributed cloud systems. Explore AI Token Gateway and E-Fuel project architectures.',
    url: 'https://portfolio-rouge-eight-48.vercel.app',
    siteName: 'Shantanu Dey Portfolio',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-teal-300 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
