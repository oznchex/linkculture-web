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
      className="xs:w-full w-[320px] h-[3rem] flex items-center justify-center rounded-xl text-white text-[1.2625rem] bg-blue60 disabled:bg-gray-200 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default RoutingButton;