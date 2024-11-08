'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RoutingButton from '@/components/common/button/RoutingButton';

interface InputNameStepProps {
  onNext: (name: string) => void;
  onBack: () => void;
}

export default function InputNameStep({ onNext, onBack }: InputNameStepProps) {
  const [name, setName] = useState('');

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

  const handleSubmit = () => {
    if (name.trim()) {
      onNext(name);
    }
  };

  return (
    <div className="h-full flex flex-col px-5">
      {/* Back Button Area */}
      <div className="h-[10%] flex items-center">
        <button 
          onClick={onBack}
          className="p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Content Area */}
      <div className="h-[75%]">
        <div className="mb-10">
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">만나서 반갑습니다!</h1>
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight">이름이 무엇인가요?</h2>
        </div>

        <div>
          <label className="block text-base text-gray-600">이름</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-gray-200 px-4 py-4 mt-2 focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60 transition-colors"
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {/* Button Area */}
      <div className="h-[15%] flex items-center justify-center">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={!name.trim()}
          className="w-full rounded-xl py-4 text-base"
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}