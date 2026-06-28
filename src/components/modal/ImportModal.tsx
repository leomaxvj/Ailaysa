'use client';

import React, { useState } from 'react';
import { Download, FileText, X, Info } from 'lucide-react';
import { Modal } from './Modal';
import { UploadArea } from '../upload/UploadArea';
import { FileCard } from '../upload/FileCard';
import { ProjectFile } from '../../types';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  onExtract: (files: File[]) => void;
  templateName?: string;
}

export const ImportModal: React.FC<ImportModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  onExtract,
  templateName = 'Template.xlsx',
}) => {
  const [selectedFiles, setSelectedFiles] = useState<ProjectFile[]>([]);
  const [actualFiles, setActualFiles] = useState<File[]>([]);
  const [error, setError] = useState('');

  const handleFilesSelected = (files: File[]) => {
    setError('');
    const newProjectFiles: ProjectFile[] = files.map((file) => ({
      id: `imp-${Date.now()}-${file.name}`,
      name: file.name,
      date: new Date().toLocaleDateString(),
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      progress: 100,
      status: 'completed',
    }));
    
    setSelectedFiles(newProjectFiles);
    setActualFiles(files);
  };

  const handleRemoveFile = () => {
    setSelectedFiles([]);
    setActualFiles([]);
  };

  const handleExtractClick = () => {
    if (actualFiles.length === 0) {
      setError('Please select a file to extract.');
      return;
    }
    onExtract(actualFiles);
    handleRemoveFile();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <div className="p-6 flex flex-col gap-4">
        {/* Header Title & Subtitle */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        </div>

        {/* Upload Section Header */}
        <div className="flex items-center justify-between mt-2">
          <label className="text-xs font-semibold text-gray-700">
            Upload file(s)<span className="text-red-500 ml-0.5">*</span>
          </label>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert(`Downloading ${templateName}...`);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-xs font-semibold text-gray-600 rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-gray-400" />
            <span>Download template</span>
          </a>
        </div>

        {/* Drop & Drop file area */}
        {selectedFiles.length === 0 ? (
          <UploadArea onFilesSelected={handleFilesSelected} error={error} />
        ) : (
          <div className="space-y-2">
            {selectedFiles.map((file) => (
              <FileCard key={file.id} file={file} onDelete={handleRemoveFile} />
            ))}
          </div>
        )}

        {/* Template Note */}
        <p className="text-[10px] text-gray-400 font-semibold italic">
          Note: Download the above MS Office Excel template, fill up data and upload
        </p>

        {/* Footer actions */}
        <div className="flex justify-end border-t border-gray-100 pt-4 mt-2">
          <button
            onClick={handleExtractClick}
            disabled={selectedFiles.length === 0}
            className="px-6 py-2 bg-[#0070f3] hover:bg-[#0051b3] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Extract
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ImportModal;
