'use client';

import { useState } from 'react';

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

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <div className="flex-1 flex flex-col">
      <button 
        className="text-gray-700"
        onClick={onBack}
      >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
      </button>

      <div className="mt-8">
        <h1 className="text-2xl font-bold">복지카드에 있는 내용을<br />입력해 주세요.</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-3 space-y-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            이름
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 placeholder-gray-300"
            placeholder="주석영"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            주민등록번호
          </label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 placeholder-gray-300"
            placeholder="123456-1******"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            카드 고유 번호
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 placeholder-gray-300"
            placeholder="123456-1234567"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            유효 기간
          </label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 placeholder-gray-300"
            placeholder="2024.01.01"
            required
          />
        </div>
      </form>
      <div className="mt-auto mb-8">
        <button 
          onClick={() => {
            setShowModal(true);
          }}
          disabled={!name || !registrationNumber || !cardNumber || !expiryDate}
          className="w-full bg-blue-500 text-white py-4 rounded-xl disabled:bg-gray-300"
        >
          인증하기
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl w-[320px] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
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
