'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/onboarding');
  };

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center justify-between h-full">
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
          <div className="relative flex justify-center mt-2">
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
            className="mx-auto xs:w-[360px] w-[290px] h-[3rem] flex items-center justify-center rounded-xl text-white text-[1.2625rem] bg-blue60 mb-10">
            다음
          </button>
        </div>
      </div>
    </div>
  )
}