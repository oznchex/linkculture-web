'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/common/modal/Modal';

interface CertifyWelfareCardStepProps {
  onNext: () => void;
  onBack: () => void;
  onManualInput: () => void;
}

export default function CertifyWelfareCardStep({ onNext, onBack, onManualInput }: CertifyWelfareCardStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasNoWelfareCard, setHasNoWelfareCard] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-between">
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
          <h1 className="text-2xl font-bold text-gray-900">복지카드를 인증해주세요!</h1>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors"
          >
            <Image src="/assets/onboarding/photo.svg" alt="촬영하기" width={80} height={80} />
            <p className="mt-4 text-center text-gray-500">촬영하기</p>
          </button>

          <button
            onClick={onManualInput}
            className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors"
          >
            <Image src="/assets/onboarding/input_inform.svg" alt="직접입력" width={80} height={80} />
            <p className="mt-4 text-center text-gray-500">직접입력</p>
          </button>
        </div>

        <label className="flex items-center gap-2 mt-8 cursor-pointer">
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
                  ? 'border-blue-500 bg-blue-500' 
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

        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)} title="서비스 준비중">
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">서비스 준비중</h3>
              <p className="text-gray-600">촬영을 통한 인증 서비스는 현재 준비중입니다.</p>
              <p className="text-gray-600">직접입력을 통해 인증을 진행해주세요.</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                확인
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}