'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/onboarding');
  };

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
        <button
          onClick={handleClick}
          className="w-[21.40694rem] h-[3.50356rem] flex items-center justify-center rounded-full text-white text-[1.5625rem] font-bold font-pretendard bg-blue60"
        >
          다음
        </button>
      </div>
      </div>
    </motion.div>
  )
}