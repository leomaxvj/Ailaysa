import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
  className = '',
  ...props
}) => {
  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <span className="absolute left-3 text-gray-400">
        <Search className="w-4 h-4" />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-8 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        {...props}
      />
      {value && (
        <button
          type="button"
          onClick={onClear ? onClear : () => onChange('')}
          className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
export default SearchInput;
