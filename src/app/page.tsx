import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
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
        
        <Link 
          href="/login" 
          className="w-full bg-[#3366FF] text-white py-4 rounded-lg text-center"
        >
          다음
        </Link>
      </div>
    </div>
  )
}