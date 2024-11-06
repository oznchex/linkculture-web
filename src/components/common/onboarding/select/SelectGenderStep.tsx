'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <h1 className="text-2xl font-bold text-gray-900">성별을 알려주세요!</h1>
        </div>

      {/* 성별 선택 카드 */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center gap-4 mt-8"
      >
        <button
          onClick={() => handleGenderSelect('male')}
          className={`p-6 rounded-xl border ${
            selectedGender === 'male' ? 'border-blue-500' : 'border-gray-200'
          }`}
        >
          <Image src="/assets/onboarding/select_male.svg" alt="남성" width={80} height={80} />
          <p className="mt-4 text-center text-gray-500">남성</p>
        </button>

        <button
          onClick={() => handleGenderSelect('female')}
          className={`p-6 rounded-xl border ${
            selectedGender === 'female' ? 'border-blue-500' : 'border-gray-200'
          }`}
        >
          <Image src="/assets/onboarding/select_female.svg" alt="여성" width={80} height={80} />
          <p className="mt-4 text-center text-gray-500">여성</p>
        </button>
      </motion.div>

      {/* 해당사항 없음 체크박스 */}
      {/* 해당사항 없음 체크박스 */}
      <motion.label 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2 mt-8 cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            checked={noGenderPreference}
            onChange={(e) => handleNoPreferenceChange(e.target.checked)}
            className="sr-only" // 원래 체크박스는 숨김
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
      </motion.label>
      </div>
    </div>
  );
}