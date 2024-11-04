'use client';

import React from 'react';
import Image from 'next/image'; // Next.js의 Image 컴포넌트 임포트
import { useRouter } from 'next/navigation'; // useRouter 훅 임포트

export default function HomePage() {
  const router = useRouter(); // useRouter 훅 사용

  const handleButtonClick = () => {
    router.push('/join'); // /join 페이지로 이동
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white border-4 border-gray-300 rounded-lg shadow-lg mx-auto max-w-sm animate-fadeIn">
      <div className="relative w-24 h-24 mb-1 mt-6"> {/* 로고 크기 조정 및 여백 추가 */}
        <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" /> {/* 이미지 최적화 및 적용 */}
      </div>
      <div className="relative w-56 h-24 mb-4"> {/* 텍스트 로고 크기 조정 */}
        <Image src="/text_logo.png" alt="Text Logo" layout="fill" objectFit="contain" /> {/* 이미지 최적화 및 적용 */}
      </div>
      <button
        onClick={handleButtonClick} // 클릭 이벤트 추가
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        지금 사용하러 가기
      </button>
    </div>
  );
}