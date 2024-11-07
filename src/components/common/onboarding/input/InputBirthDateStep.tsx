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
    <div className="flex-1 flex flex-col justify-between">
      {/* 상단 섹션 */}
      <div className="flex flex-col">
        <button 
          className="text-gray-700"
          onClick={onBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900">생년월일을 입력해 주세요!</h1>
        </div>

        <div className="mt-12">
          <label className="block text-base text-gray-600">생년월일 (8자리)</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-base mt-2"
            placeholder="YYYY.MM.DD"
            value={birthDate}
            onChange={handleBirthDateChange}
            maxLength={10} // YYYY.MM.DD 형식으로 최대 10자
          />
        </div>
      </div>
            {/* 하단 버튼 섹션 */}
            <div className="flex justify-center mt-[23.9rem]">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={birthDate.length !== 10}  // YYYY.MM.DD 형식의 길이(10자)가 아니면 버튼 비활성화
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}