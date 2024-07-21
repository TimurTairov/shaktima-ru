import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Махашиваратри | блог',
  description: 'Великая ночь Шивы',
}
export default function MahashivaratriLayout({ children }: { children: React.ReactNode }) {
  return <div>
    {children}
  </div>
}