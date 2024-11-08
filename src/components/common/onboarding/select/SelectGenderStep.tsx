'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RoutingButton from '@/components/common/button/RoutingButton';

interface SelectGenderStepProps {
  onNext: (data: { gender: 'male' | 'female' | null, noPreference: boolean }) => void;
  onBack: () => void;
}

export default function SelectGenderStep({ onNext, onBack }: SelectGenderStepProps) {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [noGenderPreference, setNoGenderPreference] = useState(false);

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    setNoGenderPreference(false);
  };
  
  const handleNoPreferenceChange = (checked: boolean) => {
    setNoGenderPreference(checked);
    if (checked) setSelectedGender(null);
  };

  const handleSubmit = () => {
    if (selectedGender || noGenderPreference) {
      onNext({ 
        gender: selectedGender, 
        noPreference: noGenderPreference 
      });
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
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">성별을 알려주세요!</h1>
        </div>

        {/* 기존 성별 선택 카드와 해당사항 없음 체크박스는 그대로 유지 */}
        <div className="flex justify-center gap-10 mt-8">
          <button
            onClick={() => handleGenderSelect('male')}
            className={`p-7 w-40 rounded-xl border ${
              selectedGender === 'male' ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <div className="flex flex-col items-center">
              <Image src="/assets/onboarding/select_male.svg" alt="남성" width={95} height={90} />
              <p className="mt-4 text-gray-500">남성</p>
            </div>
          </button>

          <button
            onClick={() => handleGenderSelect('female')}
            className={`p-7 w-40 rounded-xl border ${
              selectedGender === 'female' ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <div className="flex flex-col items-center">
              <Image src="/assets/onboarding/select_female.svg" alt="여성" width={75}height={80} />
              <p className="mt-4 text-gray-500">여성</p>
            </div>
          </button>
        </div>
      
        {/* 해당사항 없음 체크박스 */}
        <label className="flex items-center gap-2 mt-8 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={noGenderPreference}
              onChange={(e) => handleNoPreferenceChange(e.target.checked)}
              className="sr-only"
            />
            <div 
              className={`w-5 h-5 rounded-full border-2 ${
                noGenderPreference 
                  ? 'border-blue-500 bg-blue-500' 
                  : 'border-gray-300 bg-white'
              }`}
            >
              {noGenderPreference && (
                <div className="absolute inset-1 bg-white rounded-full" />
              )}
            </div>
          </div>
          <span className="text-gray-600">해당 사항 없음</span>
        </label>
      </div>

      {/* Button Area */}
      <div className="h-[15%] flex items-center">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={!selectedGender && !noGenderPreference}
          className="w-full rounded-xl py-4 text-base"
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}