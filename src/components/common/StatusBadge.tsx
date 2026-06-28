import React from 'react';

interface StatusBadgeProps {
  label: string;
  variant?: 'success' | 'info' | 'warning' | 'error' | 'gray';
  size?: 'sm' | 'md';
  pill?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = 'gray',
  size = 'sm',
  pill = true,
}) => {
  const baseStyle = 'inline-flex items-center font-medium';
  
  const variants = {
    success: 'bg-green-100 text-green-800 border-green-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    gray: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  const pureTextVariants = {
    success: 'text-green-600',
    info: 'text-blue-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    gray: 'text-gray-500',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
  };

  if (!pill) {
    return (
      <span className={`${pureTextVariants[variant]} text-xs font-semibold`}>
        {label}
      </span>
    );
  }

  return (
    <span className={`${baseStyle} ${variants[variant]} ${sizes[size]} rounded-full border`}>
      {label}
    </span>
  );
};
export default StatusBadge;
