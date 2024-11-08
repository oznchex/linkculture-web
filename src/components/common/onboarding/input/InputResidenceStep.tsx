'use client';

import { useState, useEffect } from 'react';
import RoutingButton from '@/components/common/button/RoutingButton';

interface InputResidenceStepProps {
  onNext: (name: string) => void;
  onBack: () => void;
}

export default function InputResidenceStep({ onNext, onBack }: InputResidenceStepProps) {
  const [district, setDistrict] = useState<string>('');
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);

  const seoulDistricts = [
    '동구', '서구', '남구', '북구', '광산구'
  ];

  const handleSubmit = () => {
    if (district) {
      onNext(district);
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
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">거주지가 어디신가요?</h1>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <label className="text-base text-gray-600">시/도</label>
              <span className="text-sm text-gray-400">*현재 시/도는 변경이 불가해요</span>
            </div>
            <div className="w-full rounded-[18px] border border-gray-200 px-4 py-4 text-base mt-2 bg-white text-gray-400">
              광주광역시
            </div>
          </div>

          <div>
            <label className="text-base text-gray-600">시/군/구</label>
            <div className="relative">
              <button
                type="button"
                className={`w-full rounded-[18px] border ${
                  isDistrictOpen ? 'border-blue60' : 'border-gray-200'
                } px-4 py-4 text-base mt-2 text-left flex justify-between items-center bg-white focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60 transition-colors`}
                onClick={() => setIsDistrictOpen(!isDistrictOpen)}
              >
                <span className={district ? 'text-gray-900' : 'text-gray-400'}>
                  {district || '전체'}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    isDistrictOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 드롭다운 메뉴 */}
              {isDistrictOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-[18px] shadow-lg max-h-60 overflow-y-auto">
                  {seoulDistricts.map((item) => (
                    <button
                      key={item}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50"
                      onClick={() => {
                        setDistrict(item);
                        setIsDistrictOpen(false);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Button Area */}
      <div className="h-[15%] flex items-center">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={!district}
          className="w-full rounded-xl py-4 text-base"
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}