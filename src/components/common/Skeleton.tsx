import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rect' | 'circle';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rect',
}) => {
  const baseStyle = 'bg-gray-200 animate-pulse';
  
  const variants = {
    text: 'h-3 w-3/4 rounded',
    rect: 'h-12 w-full rounded-xl',
    circle: 'rounded-full shrink-0',
  };

  return <div className={`${baseStyle} ${variants[variant]} ${className}`} />;
};

export const TableSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex gap-4">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/4" />
      </div>
      <hr className="border-gray-100" />
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex gap-4 items-center">
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-10 w-1/6" />
          <Skeleton className="h-10 w-1/6" />
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-white">
      <div className="flex items-center gap-3">
        <Skeleton variant="circle" className="w-10 h-10" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-1/2" />
          <Skeleton variant="text" className="w-1/4 h-2" />
        </div>
      </div>
      <Skeleton className="h-2 w-full" />
    </div>
  );
};

export const SidebarSkeleton: React.FC = () => {
  return (
    <div className="space-y-3 p-4">
      <Skeleton variant="text" className="w-1/3 h-4 mb-4" />
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <Skeleton variant="circle" className="w-3.5 h-3.5" />
          <Skeleton variant="text" className="flex-1 h-3" />
        </div>
      ))}
    </div>
  );
};
export default Skeleton;
