import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  requiredAsterisk?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, requiredAsterisk = false, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        {label && (
          <label className="text-xs font-semibold text-gray-700">
            {label}
            {requiredAsterisk && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 resize-none ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-red-500 font-medium mt-0.5">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
