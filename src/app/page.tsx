'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import RoutingButton from '@/components/common/button/RoutingButton'

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/onboarding');
  };

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center justify-between h-full w-full">
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
          
          <div className="mt-4 text-center text-gray-600 text-sm">
            <p>*본 서비스는 체험용 프로토타입입니다.</p>
            <p className="mt-1">**입력된 정보는 체험 후 즉시 삭제되며,</p>
            <p>별도로 저장되지 않으니 안심하셔도 됩니다.</p>
          </div>
        </div>
        <div className="relative flex justify-center">
            <Image 
              src="/assets/speech_bubble.svg" 
              alt="3초만에 시작하기" 
              width={160} 
              height={48}
              className="animate-float"
            />
          </div>
        <div className="w-full h-[14%] flex items-center justify-center gap-4 px-5">
          <RoutingButton
            onClick={handleClick}
            className="w-full"
          >
            다음
          </RoutingButton>
        </div>
      </div>
    </div>
  )
}