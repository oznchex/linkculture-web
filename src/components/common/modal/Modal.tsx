import React from 'react';

interface ModalProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ onClose, title, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* 모달 컨텐츠 */}
      <div className="relative bg-white rounded-2xl w-[90%] max-w-[400px] p-6">
        <div className="flex flex-col items-center">
          {/* 느낌표 아이콘 */}
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-gray-600">!</span>
          </div>
          
          {/* 텍스트 */}
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-center mb-6">
            {children}
          </p>
          
          {/* 확인 버튼 */}
          <button
            onClick={onClose}
            className="w-full py-4 bg-[#464C53] text-white rounded-lg font-medium"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}