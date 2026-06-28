import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  label,
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 p-6 ${className}`}>
      <Loader2 className={`${sizes[size]} animate-spin text-[#0070f3]`} />
      {label && <span className="text-xs font-medium text-gray-500">{label}</span>}
    </div>
  );
};
export default LoadingSpinner;
