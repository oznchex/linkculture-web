'use client';

import { useState } from 'react';
import RoutingButton from '@/components/common/button/RoutingButton';

interface ManualWelfareCardInputProps {
  onSubmit: (data: { name: string; registrationNumber: string; cardNumber: string; expiryDate: string }) => void;
  onBack: () => void;
}

export default function ManualWelfareCardInput({ onSubmit, onBack }: ManualWelfareCardInputProps) {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  // 주민등록번호 포맷팅 (123456-1******)
  const handleRegistrationNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 13) {
      const formatted = value.length > 6 
        ? `${value.slice(0, 6)}-${value.slice(6, 7)}${'*'.repeat(6)}` 
        : value;
      setRegistrationNumber(formatted);
    }
  };

  // 카드번호 포맷팅 (123456-1234567)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 13) {
      const formatted = value.length > 6 
        ? `${value.slice(0, 6)}-${value.slice(6)}` 
        : value;
      setCardNumber(formatted);
    }
  };

  // 유효기간 포맷팅 (YYYY.MM.DD)
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 8) {
      let formatted = value;
      if (value.length > 4) {
        formatted = `${value.slice(0, 4)}.${value.slice(4)}`;
      }
      if (value.length > 6) {
        formatted = `${value.slice(0, 4)}.${value.slice(4, 6)}.${value.slice(6)}`;
      }
      setExpiryDate(formatted);
    }
  };

  const handleSubmit = () => {
    setShowModal(true);
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
        <div className="mb-14">
          <h1 className="text-[26px] font-bold text-gray-900 leading-tight">복지카드에 있는 내용을</h1>
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight">입력해 주세요.</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-base text-gray-600 mb-1">이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-[18px] border border-gray-200 px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60 transition-colors"
              placeholder="홍길동"
              maxLength={10}
              required
            />
          </div>

          <div>
            <label className="block text-base text-gray-600 mb-1">주민등록번호</label>
            <input
              type="text"
              value={registrationNumber}
              onChange={handleRegistrationNumberChange}
              className="w-full rounded-[18px] border border-gray-200 px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60 transition-colors"
              placeholder="123456-1******"
              required
            />
          </div>

          <div>
            <label className="block text-base text-gray-600 mb-1">카드 고유 번호</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full rounded-[18px] border border-gray-200 px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60 transition-colors"
              placeholder="123456-1234567"
              required
            />
          </div>

          <div>
            <label className="block text-base text-gray-600 mb-1">유효 기간</label>
            <input
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              className="w-full rounded-[18px] border border-gray-200 px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60 transition-colors"
              placeholder="YYYY.MM.DD"
              required
            />
          </div>
        </div>
      </div>

      {/* Button Area */}
      <div className="h-[15%] flex items-center">
        <RoutingButton 
          onClick={handleSubmit}
          disabled={!name || !registrationNumber || !cardNumber || !expiryDate}
          className="w-full rounded-xl py-4 text-base"
        >
          인증하기
        </RoutingButton>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl w-[320px] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue60 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">인증이 완료되었습니다!</h2>
            <p className="text-gray-600 mb-6">회원가입을 마저 진행해 주세요.</p>
            <button 
              onClick={() => {
                onSubmit({ name, registrationNumber, cardNumber, expiryDate });
                setShowModal(false);
                onBack();
              }}
              className="w-full bg-[#464D57] text-white py-3 rounded-xl"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
