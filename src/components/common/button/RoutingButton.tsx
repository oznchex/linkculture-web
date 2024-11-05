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
      className={`w-full py-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default RoutingButton;