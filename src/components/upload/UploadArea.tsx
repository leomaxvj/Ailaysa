import React, { useState, useRef } from 'react';
import { UploadCloud, Info } from 'lucide-react';

interface UploadAreaProps {
  onFilesSelected: (files: File[]) => void;
  error?: string;
}

export const UploadArea: React.FC<UploadAreaProps> = ({ onFilesSelected, error }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const validateAndSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const validFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split('.').pop()?.toLowerCase();
      // Allow pdf, txt, doc, docx
      if (['pdf', 'txt', 'doc', 'docx'].includes(ext || '')) {
        validFiles.push(file);
      }
    }
    
    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    validateAndSelect(e.dataTransfer.files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndSelect(e.target.files);
  };

  const onBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={onBrowseClick}
        className={`flex flex-col items-center justify-center border border-dashed rounded-xl p-8 transition-all cursor-pointer ${
          isDragActive
            ? 'border-blue-500 bg-blue-50/50'
            : error
            ? 'border-red-400 bg-red-50/10 hover:bg-red-50/30'
            : 'border-gray-300 bg-white hover:border-gray-400'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".txt,.doc,.docx,.pdf"
          onChange={handleFileInputChange}
          className="hidden"
        />

        {/* Upload icon */}
        <div className="p-3 bg-blue-50 text-blue-500 rounded-full mb-3">
          <UploadCloud className="w-6 h-6" />
        </div>

        <p className="text-xs text-gray-500 font-semibold mb-1">
          Drop your files here or <span className="text-blue-600 underline">browse</span>
        </p>

        <p className="text-[10px] text-gray-400 text-center mt-2 leading-relaxed">
          Supported format: TXT, DOCS, PDF
          <br />
          Limit: <span className="font-medium text-gray-600">1 file upload</span> | Recommended max words per file: <span className="font-medium text-gray-600">50,000</span> | Maximum size of a file: <span className="font-medium text-gray-600">100 MB</span>
        </p>
      </div>

      {error && <p className="text-xs text-red-500 font-semibold mt-0.5">{error}</p>}

      {/* Info Banner */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 text-[11px] font-semibold">
        <Info className="w-4 h-4 text-blue-500 shrink-0" />
        <span>For best results, please upload your book chapter by chapter</span>
      </div>
    </div>
  );
};
export default UploadArea;
