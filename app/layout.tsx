"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ChainId,ThirdwebProvider} from "@thirdweb-dev/react";

const activeChainId = ChainId.Mumbai;

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'ThirdScape',
  description: 'Find the best 3d assets for your project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider 
      activeChain={activeChainId}
      clientId="a1c5c5b1a5e4bc480ec728a2418d63b5"
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThirdwebProvider>
  )
}
