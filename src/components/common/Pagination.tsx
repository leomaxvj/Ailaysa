import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      onPageChange(val);
    }
  };

  return (
    <div className={`flex items-center justify-center gap-3 py-3 bg-white border-t border-gray-150 select-none ${className}`}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-500 cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <input
          type="text"
          value={currentPage}
          onChange={handleInputChange}
          className="w-10 py-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm font-semibold text-gray-800"
        />
        <span>of {totalPages} pages</span>
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-500 cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
export default Pagination;
