import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Галерея',
  description: 'Фотографии с праздников и мероприятий московской сангхи',
}

export default function GallaryLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}