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
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">휠체어 사용 여부에 대해</h1>
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight">선택해 주세요!</h2>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleWheelChairAvailabilitySelect('wheelchair')}
            className={`flex items-center gap-4 p-6 rounded-3xl border w-full ${
              selectedWheelChairAvailability === 'wheelchair' 
                ? 'border-blue60 bg-blue50' 
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
                ? 'border-blue60 bg-blue50' 
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
                  ? 'border-blue60 bg-blue60' 
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

      {/* Button Area */}
      <div className="h-[15%] flex items-center">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={!noWheelChairAvailabilityPreference && !selectedWheelChairAvailability}
          className="w-full rounded-xl py-4 text-base"
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}