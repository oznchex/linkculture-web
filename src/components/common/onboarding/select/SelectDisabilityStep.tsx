'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RoutingButton from '@/components/common/button/RoutingButton';

interface SelectDisabilityStepProps {
  onNext: (name: string) => void;
  onBack: () => void;
}

export default function SelectDisabilityStep({ onNext, onBack }: SelectDisabilityStepProps) {

    const [disabilityType, setDisabilityType] = useState('');
    const [disabilityLevel, setDisabilityLevel] = useState('');
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isLevelOpen, setIsLevelOpen] = useState(false);
    const [noDisabilityPreference, setNoDisabilityPreference] = useState(false);
  
    // 장애 유형과 정도 옵션
    const disabilityTypes = ['간기능장애', '간질장애', '뇌병변장애', '뇌전증장애', '시각장애', '신장장애', '심장장애', '안면장애', '언어장애', '자폐성장애', '장루요루장애', '정신장애', '지적장애', '지체장애', '호흡기장애'];
    const disabilityLevels = ['심한 장애', '심하지 않은 장애'];
  
    useEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    
        const handleResize = () => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  const handleNoPreferenceChange = (checked: boolean) => {
    setNoDisabilityPreference(checked);
    if (checked) {
      setDisabilityType('');
      setDisabilityLevel('');
    }
  };

  const handleSubmit = () => {
    if (noDisabilityPreference) {
      onNext('');
    } else if (disabilityType && disabilityLevel) {
      onNext(`${disabilityType} ${disabilityLevel}`);
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
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">상태를 알려주시면</h1>
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight">이에 맞는 정보를 알려 드릴게요!</h2>
        </div>

        <div className="space-y-4">
          {/* 장애 유형 드롭다운 */}
          <div>
            <label className="text-base text-gray-600">장애 유형</label>
            <div className="relative">
              <button
                type="button"
                className={`w-full rounded-[18px] border ${
                  isTypeOpen ? 'border-blue60' : 'border-gray-200'
                } px-4 py-4 text-base mt-2 text-left flex justify-between items-center bg-white ${
                  !noDisabilityPreference ? 'focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60' : ''
                } transition-colors ${noDisabilityPreference ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !noDisabilityPreference && setIsTypeOpen(!isTypeOpen)}
                disabled={noDisabilityPreference}
              >
                <span className={disabilityType ? 'text-gray-900' : 'text-gray-400'}>
                  {disabilityType || '선택해주세요'}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${isTypeOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isTypeOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-[18px] shadow-lg max-h-60 overflow-y-auto">
                  {disabilityTypes.map((type) => (
                    <button
                      key={type}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50"
                      onClick={() => {
                        setDisabilityType(type);
                        setIsTypeOpen(false);
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 장애 정도 드롭다운 */}
          <div>
            <label className="text-base text-gray-600">장애 정도</label>
            <div className="relative">
              <button
                type="button"
                className={`w-full rounded-[18px] border ${
                  isLevelOpen ? 'border-blue60' : 'border-gray-200'
                } px-4 py-4 text-base mt-2 text-left flex justify-between items-center bg-white ${
                  !noDisabilityPreference ? 'focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60' : ''
                } transition-colors ${noDisabilityPreference ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !noDisabilityPreference && setIsLevelOpen(!isLevelOpen)}
                disabled={noDisabilityPreference}
              >
                <span className={disabilityLevel ? 'text-gray-900' : 'text-gray-400'}>
                  {disabilityLevel || '선택해주세요'}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${isLevelOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLevelOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-[18px] shadow-lg max-h-60 overflow-y-auto">
                  {disabilityLevels.map((level) => (
                    <button
                      key={level}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50"
                      onClick={() => {
                        setDisabilityLevel(level);
                        setIsLevelOpen(false);
                      }}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 해당사항 없음 체크박스 */}
          <label className="flex items-center gap-2 mt-8 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={noDisabilityPreference}
                onChange={(e) => handleNoPreferenceChange(e.target.checked)}
                className="sr-only"
              />
              <div 
                className={`w-5 h-5 rounded-full border-2 ${
                  noDisabilityPreference 
                    ? 'border-blue60 bg-blue60' 
                    : 'border-gray-300 bg-white'
                }`}
              >
                {noDisabilityPreference && (
                  <div className="absolute inset-1 bg-white rounded-full" />
                )}
              </div>
            </div>
            <span className="text-gray-600">해당 사항 없음</span>
          </label>
        </div>
      </div>

      {/* Button Area */}
      <div className="h-[15%] flex items-center">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={!noDisabilityPreference && (!disabilityType || !disabilityLevel)}
          className="w-full rounded-xl py-4 text-base"
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}