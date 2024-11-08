'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Modal from '@/components/common/modal/Modal';
import RoutingButton from '@/components/common/button/RoutingButton';

interface CompleteOnboardingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function CompleteOnboardingStep({ onNext, onBack }: CompleteOnboardingStepProps) {
  const router = useRouter();

  const handleStart = () => {
    router.push('/home');
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
        <div className="mb-14">
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">축하드립니다!</h1>
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight">가입이 완료 되었어요.</h2>
          <p className="text-[1rem] text-gray-600 mt-2">본격적으로 서비스를 이용해 보세요!</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[240px] h-[240px] relative mb-8">
            <Image
              src="/assets/onboarding/congratulation.svg"
              alt="회원가입 완료"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Button Area */}
      <div className="h-[15%] flex items-center">
        <RoutingButton 
          onClick={handleStart}
          className="w-full rounded-xl py-4 text-base"
        >
          시작하기
        </RoutingButton>
      </div>
    </div>
  );
}