import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LANGUAGES } from '../../constants/languages';

interface LanguageSelectorProps {
  sourceCode: string;
  targetCode: string;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  sourceCode,
  targetCode,
  className = '',
}) => {
  const sourceName = LANGUAGES.find(l => l.code === sourceCode)?.name || sourceCode;
  const targetName = LANGUAGES.find(l => l.code === targetCode)?.name || targetCode;

  return (
    <div className={`inline-flex items-center gap-1 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-[#0070f3] ${className}`}>
      <span>{sourceName}</span>
      <ArrowRight className="w-3 h-3 mx-0.5 text-blue-400" />
      <span>{targetName}</span>
    </div>
  );
};
export default LanguageSelector;
