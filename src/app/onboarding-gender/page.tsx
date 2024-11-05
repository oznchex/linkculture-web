'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function GenderSelectionPage() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [noGenderPreference, setNoGenderPreference] = useState(false);

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    // 성별을 선택하면 '해당 사항 없음' 체크 해제
    setNoGenderPreference(false);
  };
  
  const handleNoPreferenceChange = (checked: boolean) => {
    setNoGenderPreference(checked);
    // '해당 사항 없음'을 체크하면 성별 선택 해제
    if (checked) {
      setSelectedGender(null);
    }
  };

  const handleNext = () => {
    if (selectedGender || noGenderPreference) {
      router.push('/next-page'); // 다음 페이지 경로로 수정해주세요
    }
  };

  return (
    <div className="p-6 h-screen flex flex-col">
      {/* 뒤로가기 버튼 */}
      <button 
          className="text-gray-700 w-fit"
          onClick={() => router.back()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

      {/* 제목 */}
      <h1 className="text-2xl font-bold mb-16">성별을 알려주세요!</h1>

      {/* 성별 선택 카드 */}
      <div className="flex justify-center gap-4 mb-8">
    <button
      onClick={() => handleGenderSelect('male')}
      className={`p-6 rounded-xl border ${
        selectedGender === 'male' ? 'border-blue-500' : 'border-gray-200'
      }`}
    >
      <Image src="/assets/onboarding/select_male.svg" alt="남성" width={80} height={80} />
      <p className="mt-4 text-center text-gray-500">남성</p>
    </button>

    <button
      onClick={() => handleGenderSelect('female')}
      className={`p-6 rounded-xl border ${
        selectedGender === 'female' ? 'border-blue-500' : 'border-gray-200'
      }`}
    >
      <Image src="/assets/onboarding/select_female.svg" alt="여성" width={80} height={80} />
      <p className="mt-4 text-center text-gray-500">여성</p>
        </button>
      </div>

      {/* 해당사항 없음 체크박스 */}
      <label className="flex items-center gap-2 mb-16">
    <input
      type="checkbox"
      checked={noGenderPreference}
      onChange={(e) => handleNoPreferenceChange(e.target.checked)}
      className="w-5 h-5 rounded-full border-gray-300"
    />
    <span className="text-gray-600">해당 사항 없음</span>
  </label>

      {/* 다음 버튼 */}
      <button
        onClick={handleNext}
        disabled={!selectedGender && !noGenderPreference}
        className={`mt-auto py-4 rounded-full text-white ${
          selectedGender || noGenderPreference
            ? 'bg-blue-500'
            : 'bg-gray-300'
        }`}
      >
        다음
      </button>
    </div>
  );
}
