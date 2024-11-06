'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    const disabilityTypes = ['지체장애', '시각장애', '청각장애', '언어장애', '지적장애', '자폐성장애'];
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
          <h1 className="text-2xl font-bold text-gray-900">상태를 알려주시면<br/>이에 맞는 정보를 알려 드릴게요!</h1>
        </div>

        <div className="mt-12 space-y-4">
        {/* 장애 유형 드롭다운 */}
        <div>
          <label className="text-base text-gray-600">장애 유형</label>
          <div className="relative">
            <button
              type="button"
              className={`w-full rounded-[18px] border ${
                isTypeOpen ? 'border-blue-500' : 'border-gray-200'
              } px-4 py-4 text-base mt-2 text-left flex justify-between items-center bg-white`}
              onClick={() => setIsTypeOpen(!isTypeOpen)}
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
                isLevelOpen ? 'border-blue-500' : 'border-gray-200'
              } px-4 py-4 text-base mt-2 text-left flex justify-between items-center bg-white`}
              onClick={() => setIsLevelOpen(!isLevelOpen)}
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

        {/* 해당 사항 없음 버튼 */}
      </div>
    </div>
    </div>
    );
}