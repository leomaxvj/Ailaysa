'use client';

import React from 'react';
import { Menu, Sidebar, Undo2, Redo2, Bold, Italic, Underline, Subscript, Superscript } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleLeftSidebar, toggleRightSidebar } from '../../features/ui/uiSlice';

interface ToolbarProps {
  onSave?: () => void;
  onFormat?: (format: string) => void;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onSave,
  onFormat,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
}) => {
  const dispatch = useAppDispatch();
  const isLeftSidebarCollapsed = useAppSelector((state) => state.ui.isLeftSidebarCollapsed);
  const isRightSidebarCollapsed = useAppSelector((state) => state.ui.isRightSidebarCollapsed);

  const formats = [
    { name: 'bold', label: <Bold className="w-4 h-4" />, tooltip: 'Bold (Ctrl+B)' },
    { name: 'italic', label: <Italic className="w-4 h-4" />, tooltip: 'Italic (Ctrl+I)' },
    { name: 'underline', label: <Underline className="w-4 h-4" />, tooltip: 'Underline (Ctrl+U)' },
    { name: 'subscript', label: <span className="text-xs font-bold font-mono">x₂</span>, tooltip: 'Subscript' },
    { name: 'superscript', label: <span className="text-xs font-bold font-mono">x²</span>, tooltip: 'Superscript' },
  ];

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-white border-b border-gray-150 shrink-0 select-none">
      {/* Left Sidebar Toggle & Undo/Redo */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={() => dispatch(toggleLeftSidebar())}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            !isLeftSidebarCollapsed ? 'bg-blue-50 text-[#0070f3]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
          }`}
          title="Toggle Sections Sidebar"
        >
          <Menu className="w-4 h-4" />
        </button>
        
        <div className="h-4 w-px bg-gray-200" />

        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          title="Undo"
        >
          <Undo2 className="w-4 h-4" />
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          title="Redo"
        >
          <Redo2 className="w-4 h-4" />
        </button>
      </div>

      {/* Formatting Tools */}
      <div className="hidden sm:flex items-center gap-1 sm:gap-2">
        {formats.map((fmt) => (
          <button
            key={fmt.name}
            onClick={() => onFormat && onFormat(fmt.name)}
            className="p-1 sm:p-1.5 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold cursor-pointer"
            title={fmt.tooltip}
          >
            {fmt.label}
          </button>
        ))}
      </div>

      {/* Action Button & Right Sidebar Toggle */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={onSave}
          className="px-3 py-1.5 sm:px-4 sm:py-1.5 bg-[#0070f3] hover:bg-[#0051b3] active:bg-[#004099] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
        >
          Save & Continue
        </button>

        <div className="h-4 w-px bg-gray-200" />

        <button
          onClick={() => dispatch(toggleRightSidebar())}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            !isRightSidebarCollapsed ? 'bg-blue-50 text-[#0070f3]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
          }`}
          title="Toggle Memories Sidebar"
        >
          <Sidebar className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
