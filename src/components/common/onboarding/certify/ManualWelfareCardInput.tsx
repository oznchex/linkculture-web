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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, registrationNumber, cardNumber, expiryDate });
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
    </div>
  );
}
