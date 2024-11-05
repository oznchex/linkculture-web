'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RoutingButton from '@/components/common/button/RoutingButton';

export default function NameInput() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto w-full">
      {/* 진척도 바 */}
      <div className="w-full h-1 bg-gray-100">
        <div className="h-full bg-blue-600" style={{ width: '12.5%' }}></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
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
      <div className="mt-12 space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">만나서 반갑습니다!</h1>
        <h2 className="text-3xl font-bold text-gray-900">이름이 무엇인가요?</h2>
      </div>

      {/* 입력 폼 */}
      <div className="flex-1 flex flex-col justify-between mt-8">
        <div>
          <label className="block text-lg text-gray-600 mb-2">이름</label>
          <input
            type="text"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg"
            placeholder="링컬처"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* 다음 버튼 */}
        <RoutingButton 
  to="/onboarding-gender"
  disabled={!name.trim()} // 이름이 비어있으면 버튼 비활성화
>
  다음
</RoutingButton>
      </div>
    </div>
    </div>
  );
}