// app/layout.tsx

import { Metadata } from 'next'
import localFont from 'next/font/local'

import "./globals.css";

export const metadata: Metadata = {
  title: 'LinkCulture',
  description: '장애인과 시니어를 위한 배리어프리 서비스',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'LinkCulture',
    description: '장애인과 시니어를 위한 배리어프리 서비스',
    siteName: 'LinkCulture',
    locale: 'ko_KR',
    type: 'website',
    url: 'https://linkculture.kr',
    images: {
      url: '/logo.png',
    },
  }
}

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const museomoderno = localFont({
  src: './fonts/MuseoModerno-VariableFont_wght.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-museomoderno',
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${museomoderno.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`${pretendard.className} bg-[#fff]`}>
          <div className="bg-[#F4F6FA]">{children}</div>
      </body>
    </html>
  )
}
