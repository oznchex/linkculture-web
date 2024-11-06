'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Modal from '@/components/common/modal/Modal';

interface CompleteOnboardingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function CompleteOnboardingCardStep({ onNext, onBack }: CompleteOnboardingStepProps) {
  const [hasNoWelfareCard, setHasNoWelfareCard] = useState(false);

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
          <h1 className="text-2xl font-bold text-gray-900">축하드립니다!</h1>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">가입이 완료 되었어요.</h2>
          <p className="text-gray-600 mt-4">본격적으로 서비스를 이용해 보세요!</p>
        </div>

        {/* 일러스트레이션 섹션 추가 */}
        <div className="flex justify-center my-12 px-8">
          <Image
            src="/assets/onboarding/congratulation.svg"
            alt="온보딩 완료 일러스트레이션"
            width={320}
            height={320}
            priority
            className="w-full max-w-[320px]"
          />
        </div>

        {/* 하단 버튼
        <button
          onClick={onNext}
          className="w-full bg-blue-600 text-white py-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
        >
          둘러보러 가기
        </button> */}
      </div>
    </div>
  );
}