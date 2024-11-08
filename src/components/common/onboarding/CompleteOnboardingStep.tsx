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

export default function CompleteOnboardingCardStep({ onBack }: CompleteOnboardingStepProps) {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/home');
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
        <div className="mt-auto mb-8">
          <RoutingButton 
            onClick={handleComplete}
            className="w-full"
          >
            다음
          </RoutingButton>
        </div>
      </div>
    </div>
  );
}