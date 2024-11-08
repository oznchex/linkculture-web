'use client';

import { useState, useEffect } from 'react';
import RoutingButton from '@/components/common/button/RoutingButton';
interface InputBirthDateStepProps {
  onNext: (name: string) => void;
  onBack: () => void;
}

export default function InputBirthDateStep({ onNext, onBack }: InputBirthDateStepProps) {
    const [birthDate, setBirthDate] = useState('');
  const formatBirthDate = (value: string) => {
    // 숫자가 아닌 문자 제거
    const numbers = value.replace(/[^\d]/g, '');
    
    // 최대 8자리까지만 입력 가능
    const limitedNumbers = numbers.slice(0, 8);
    
    // YYYY.MM.DD 형식으로 포맷팅
    if (limitedNumbers.length > 0) {
      let formatted = limitedNumbers;
      if (limitedNumbers.length > 4) {
        formatted = formatted.slice(0, 4) + '.' + formatted.slice(4);
      }
      if (limitedNumbers.length > 6) {
        formatted = formatted.slice(0, 7) + '.' + formatted.slice(7);
      }
      return formatted;
    }
    return limitedNumbers;
  };

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

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatBirthDate(e.target.value);
    setBirthDate(formatted);
  };

  const handleSubmit = () => {
    if (birthDate.length === 10) {
      onNext(birthDate);
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
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">생년월일을 입력해 주세요!</h1>
        </div>

        <div>
          <label className="block text-base text-gray-600">생년월일 (8자리)</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-gray-200 px-4 py-4 mt-2 focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60 transition-colors"
            placeholder="YYYY.MM.DD"
            value={birthDate}
            onChange={handleBirthDateChange}
            maxLength={10}
          />
        </div>
      </div>

      {/* Button Area */}
      <div className="h-[15%] flex items-center">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={birthDate.length !== 10}
          className="w-full rounded-xl py-4 text-base"
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}