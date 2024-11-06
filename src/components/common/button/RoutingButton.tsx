'use client';

import { useRouter } from 'next/navigation';

interface RoutingButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const RoutingButton = ({ 
  children, 
  to, 
  onClick, 
  className = '',
  disabled = false 
}: RoutingButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      router.push(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-[21.40694rem] h-[3.50356rem] flex items-center justify-center rounded-full text-white text-[1.5625rem] font-bold font-pretendard leading-[120%] mb-2
        ${disabled 
          ? 'bg-gray-200 cursor-not-allowed' 
          : 'bg-blue60 hover:bg-blue80'
        } 
        ${className}`}
    >
      {children}
    </button>
  );
};

export default RoutingButton;