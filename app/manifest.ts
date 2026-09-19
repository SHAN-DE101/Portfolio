import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shantanu Dey Portfolio',
    short_name: 'Shantanu Dey',
    description: 'Software Engineer & Cloud Security Architect',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1120',
    theme_color: '#2dd4bf',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
