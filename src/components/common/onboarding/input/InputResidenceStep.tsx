'use client';

import { useState, useEffect } from 'react';

interface InputResidenceStepProps {
  onNext: (name: string) => void;
  onBack: () => void;
}

export default function InputResidenceStep({ onNext, onBack }: InputResidenceStepProps) {
    const [district, setDistrict] = useState<string>('');
    const [isDistrictOpen, setIsDistrictOpen] = useState(false);

    const seoulDistricts = [
        '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구',
        '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구',
        '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
      ];
  
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
          <h1 className="text-2xl font-bold text-gray-900">거주지가 어디신가요?</h1>
        </div>

        <div className="mt-12 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <label className="text-base text-gray-600">시/도</label>
            <span className="text-sm text-gray-400">*현재 시/도는 변경이 불가해요</span>
          </div>
          <div className="w-full rounded-[18px] border border-gray-200 px-4 py-4 text-base mt-2 bg-white text-gray-400">
            광주광역시
          </div>
        </div>
        {/* 시/군/구 선택 드롭다운 */}
        <div>
          <label className="text-base text-gray-600">시/군/구</label>
          <div className="relative">
            <button
              type="button"
              className={`w-full rounded-[18px] border ${
                isDistrictOpen ? 'border-blue-500' : 'border-gray-200'
              } px-4 py-4 text-base mt-2 text-left flex justify-between items-center bg-white`}
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
    </div>
  );
}