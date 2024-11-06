'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <div className="flex-1 flex flex-col justify-between">
      {/* 상단 섹션 */}
      <div>
        <button 
          className="text-gray-700 mt-6"
          onClick={onBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900">만나서 반갑습니다!</h1>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">이름이 무엇인가요?</h2>
        </div>

        <div className="mt-12">
          <label className="block text-base text-gray-600">이름</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-base mt-2"
            placeholder="링컬처"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}