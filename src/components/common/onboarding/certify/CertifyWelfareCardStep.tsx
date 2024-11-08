'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/common/modal/Modal';
import ManualWelfareCardInput from './ManualWelfareCardInput';
import RoutingButton from '@/components/common/button/RoutingButton';

interface CertifyWelfareCardStepProps {
  onNext: () => void;
  onBack: () => void;
  onManualInput: () => void;
}

export default function CertifyWelfareCardStep({ onNext, onBack, onManualInput }: CertifyWelfareCardStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasNoWelfareCard, setHasNoWelfareCard] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleManualSubmit = (data: { name: string; registrationNumber: string; cardNumber: string; expiryDate: string }) => {
    setIsVerified(true);
  };

  const handleSubmit = () => {
    if (hasNoWelfareCard || isVerified) {
      onNext();
    } else {
      setShowManualInput(true);
    }
  };

  if (showManualInput) {
    return (
      <ManualWelfareCardInput
        onSubmit={handleManualSubmit}
        onBack={() => setShowManualInput(false)}
      />
    );
  }

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
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">마지막으로 복지카드가 있다면</h1>
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight">인증을 진행해 주세요!</h2>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 p-8 rounded-2xl border border-gray-200 flex flex-col items-center"
          >
            <Image src="/assets/onboarding/photo.svg" alt="촬영하기" width={48} height={48} />
            <p className="mt-4 text-gray-500">촬영하기</p>
          </button>

          <button
            onClick={() => setShowManualInput(true)}
            className="relative flex-1 p-8 rounded-2xl border border-gray-200 flex flex-col items-center"
          >
            {isVerified && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EEF1FF] px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                <div className="w-3.5 h-3.5 bg-blue60 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue60">인증 완료</span>
              </div>
            )}
            <Image src="/assets/onboarding/input_inform.svg" alt="직접입력" width={48} height={48} />
            <p className="mt-4 text-gray-500">직접입력</p>
          </button>
        </div>

        <label className="flex items-center gap-2 mt-4 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={hasNoWelfareCard}
              onChange={(e) => setHasNoWelfareCard(e.target.checked)}
              className="sr-only"
            />
            <div 
              className={`w-5 h-5 rounded-full border-2 ${
                hasNoWelfareCard 
                  ? 'border-blue60 bg-blue60' 
                  : 'border-gray-300 bg-white'
              }`}
            >
              {hasNoWelfareCard && (
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
          disabled={!hasNoWelfareCard && !isVerified}
          className="w-full rounded-xl py-4 text-base"
        >
          다음
        </RoutingButton>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="촬영하기는 준비 중이에요!">
          <div className="text-center">
            <p className="text-gray-600 max-[320px]:whitespace-pre-line">
              {'인증을 원할 경우\n직접 입력으로 진행해 주세요.'}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}