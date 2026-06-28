import React from 'react';
import { FileText, Trash2, X } from 'lucide-react';
import { ProjectFile } from '../../types';
import { ProgressBar } from '../common/ProgressBar';

interface FileCardProps {
  file: ProjectFile;
  onDelete?: (id: string) => void;
  onCancel?: (id: string) => void;
}

export const FileCard: React.FC<FileCardProps> = ({
  file,
  onDelete,
  onCancel,
}) => {
  const isPDF = file.name.toLowerCase().endsWith('.pdf');
  const isWord = file.name.toLowerCase().endsWith('.doc') || file.name.toLowerCase().endsWith('.docx');

  return (
    <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-xs transition-shadow hover:shadow-sm">
      {/* Red PDF / Word icon */}
      <div className={`p-2.5 rounded-lg shrink-0 ${isPDF ? 'bg-red-50 text-red-500' : isWord ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-500'}`}>
        <FileText className="w-6 h-6" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-semibold text-gray-800 truncate">{file.name}</h4>
          {file.status === 'uploading' ? (
            onCancel && (
              <button
                type="button"
                onClick={() => onCancel(file.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )
          ) : (
            onDelete && (
              <button
                type="button"
                onClick={() => onDelete(file.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )
          )}
        </div>

        <div className="flex gap-4 mt-1 text-[10px] text-gray-400">
          <span>Date : {file.date}</span>
          <span>Size : {file.size}</span>
        </div>

        {file.status === 'uploading' && (
          <div className="flex items-center gap-4 mt-2">
            <ProgressBar progress={file.progress} height="h-1" />
            <span className="text-[10px] font-semibold text-gray-500 shrink-0">
              {file.progress}%
            </span>
          </div>
        )}

        {file.status === 'completed' && (
          <div className="mt-1">
            <span className="text-[10px] font-semibold text-green-600">Completed</span>
          </div>
        )}

        {file.status === 'failed' && (
          <div className="mt-1">
            <span className="text-[10px] font-semibold text-red-500">Upload failed</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default FileCard;
