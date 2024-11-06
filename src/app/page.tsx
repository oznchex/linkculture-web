'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center justify-between h-full p-8"
  >
    <div className="flex flex-col items-center justify-between h-full p-8">
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <Image 
          src="/logo.svg" 
          alt="LinkCulture Icon" 
          width={80} 
          height={80}
        />
        <Image 
          src="/text_logo.svg" 
          alt="LinkCulture Text" 
          width={240} 
          height={60}
        />
      </div>
      
      <div className="w-full flex flex-col gap-4">
        <div className="relative flex justify-center">
          <Image 
            src="/assets/speech_bubble.svg" 
            alt="3초만에 시작하기" 
            width={160} 
            height={48}
            className="animate-float"
          />
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/onboarding" className="block bg-blue-500 text-white px-4 py-2 rounded-lg text-center">다음</Link>
        </motion.div>
      </div>
      </div>
    </motion.div>
  )
}