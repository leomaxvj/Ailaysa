import React from 'react';

interface ProgressBarProps {
  progress: number;
  height?: string;
  showText?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 'h-1.5',
  showText = false,
  className = '',
}) => {
  const boundedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`flex items-center gap-2 w-full ${className}`}>
      <div className={`flex-1 w-full bg-gray-200 rounded-full overflow-hidden ${height}`}>
        <div
          className="bg-green-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${boundedProgress}%` }}
        />
      </div>
      {showText && (
        <span className="text-xs font-semibold text-gray-500 min-w-[28px] text-right">
          {boundedProgress}%
        </span>
      )}
    </div>
  );
};
export default ProgressBar;
