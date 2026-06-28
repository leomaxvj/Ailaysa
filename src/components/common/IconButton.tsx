import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'outline' | 'text' | 'filled';
  size?: 'sm' | 'md';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'text',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-lg transition-all focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    text: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
    outline: 'border border-gray-300 text-gray-600 hover:bg-gray-50 bg-white shadow-sm',
    filled: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
  };

  const sizes = {
    sm: 'p-1.5',
    md: 'p-2',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
export default IconButton;
