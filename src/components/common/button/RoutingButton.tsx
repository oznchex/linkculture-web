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
      className={`w-full py-4 rounded-2xl text-white text-base font-medium
        ${disabled 
          ? 'bg-gray-200 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-700'
        } 
        ${className}`}
    >
      {children}
    </button>
  );
};

export default RoutingButton;