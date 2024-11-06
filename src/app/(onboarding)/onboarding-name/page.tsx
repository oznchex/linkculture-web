'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RoutingButton from '@/components/common/button/RoutingButton';
import { motion } from 'framer-motion';

export default function NameInput() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [name, setName] = useState('');
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col">
      {/* 진척도 바 */}
      <div className="w-full h-1 bg-gray-100">
        <motion.div 
          className="h-full bg-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: "12.5%" }}
          transition={{ 
            duration: 1,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 px-6 flex flex-col justify-between">
        {/* 상단 섹션 */}
        <div>
          <button 
            className="text-gray-700 mt-6"
            onClick={() => router.back()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="mt-24 space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">만나서 반갑습니다!</h1>
            <h2 className="text-3xl font-bold text-gray-900">이름이 무엇인가요?</h2>
          </div>

          <div className="mt-8">
            <label className="block text-lg text-gray-600 mb-2">이름</label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg"
              placeholder="링컬처"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="mb-8">
          <RoutingButton 
            to="/onboarding-profile"
            disabled={!name.trim()}
          >
            다음
          </RoutingButton>
        </div>
      </div>
    </div>
  );
}