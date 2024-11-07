'use client';

import { useState } from 'react';
import Image from 'next/image';
import RoutingButton from '@/components/common/button/RoutingButton';

interface SelectWheelChairAvailabilityStepProps {
  onNext: (data: { wheelChairAvailability: 'wheelchair' | 'crutches' | null, noPreference: boolean }) => void;
  onBack: () => void;
}

export default function SelectWheelChairAvailabilityStep({ onNext, onBack }: SelectWheelChairAvailabilityStepProps) {
  const [selectedWheelChairAvailability, setSelectedWheelChairAvailability] = useState<'wheelchair' | 'crutches' | null>(null);
  const [noWheelChairAvailabilityPreference, setNoWheelChairAvailabilityPreference] = useState(false);

  const handleWheelChairAvailabilitySelect = (wheelChairAvailability: 'wheelchair' | 'crutches') => {
    setSelectedWheelChairAvailability(wheelChairAvailability);
    setNoWheelChairAvailabilityPreference(false);
  };

  const handleNoPreferenceChange = (checked: boolean) => {
    setNoWheelChairAvailabilityPreference(checked);
    if (checked) setSelectedWheelChairAvailability(null);
  };

  const handleSubmit = () => {
    if (selectedWheelChairAvailability || noWheelChairAvailabilityPreference) {
      onNext({ 
        wheelChairAvailability: selectedWheelChairAvailability, 
        noPreference: noWheelChairAvailabilityPreference 
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
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
          <h1 className="text-2xl font-bold text-gray-900">휠체어 사용 여부에 대해<br/>선택해 주세요!</h1>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <button
            onClick={() => handleWheelChairAvailabilitySelect('wheelchair')}
            className={`flex items-center gap-4 p-6 rounded-3xl border w-full ${
              selectedWheelChairAvailability === 'wheelchair' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <Image src="/assets/onboarding/wheelchair.svg" alt="휠체어" width={70} height={70} />
            <span className="text-lg text-gray-700 text-left">전동 또는 수동 휠체어를<br/>사용하고 있습니다.</span>
          </button>

          <button
            onClick={() => handleWheelChairAvailabilitySelect('crutches')}
            className={`flex items-center gap-4 p-6 rounded-3xl border w-full ${
              selectedWheelChairAvailability === 'crutches' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <Image src="/assets/onboarding/crutches.svg" alt="목발" width={70} height={70} />
            <span className="text-lg text-gray-700 text-left">휠체어를 사용하지 않지만<br/>이동에 제약이 있습니다.</span>
          </button>
        </div>
        
        <label className="flex items-center gap-2 mt-4 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={noWheelChairAvailabilityPreference}
              onChange={(e) => handleNoPreferenceChange(e.target.checked)}
              className="sr-only"
            />
            <div 
              className={`w-5 h-5 rounded-full border-2 ${
                noWheelChairAvailabilityPreference 
                  ? 'border-blue-500 bg-blue-500' 
                  : 'border-gray-300 bg-white'
              }`}
            >
              {noWheelChairAvailabilityPreference && (
                <div className="absolute inset-1 bg-white rounded-full" />
              )}
            </div>
          </div>
          <span className="text-gray-600">해당 사항 없음</span>
        </label>
      </div>
      {/* 하단 버튼 섹션 */}
      <div className="flex justify-center mt-[9.75rem]">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={!noWheelChairAvailabilityPreference && !selectedWheelChairAvailability}  // 이동 보조기구 정보가 없거나 해당사항 없음이 체크되지 않은 경우 비활성화
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}