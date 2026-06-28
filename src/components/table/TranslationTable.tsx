'use client';

import React, { useRef, useEffect } from 'react';
import { Flag, CheckCircle } from 'lucide-react';
import { TranslationSegment } from '../../types';

interface TranslationTableProps {
  segments: TranslationSegment[];
  activeIndex: number;
  onRowSelect: (index: number) => void;
  onTargetChange: (id: string, text: string) => void;
  onToggleComplete: (id: string, isCompleted: boolean) => void;
  onToggleFlag: (id: string, isFlagged: boolean) => void;
}

export const TranslationTable: React.FC<TranslationTableProps> = ({
  segments,
  activeIndex,
  onRowSelect,
  onTargetChange,
  onToggleComplete,
  onToggleFlag,
}) => {
  const activeTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Focus textarea when active row changes
  useEffect(() => {
    if (activeTextareaRef.current) {
      activeTextareaRef.current.focus();
    }
  }, [activeIndex]);

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-text">
      {/* Desktop / Tablet Table View */}
      <div className="hidden md:block flex-1 overflow-y-auto bg-white border border-gray-150 rounded-xl select-text">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b border-gray-150 text-[11px] font-bold text-gray-400 uppercase bg-gray-50/50 select-none">
              <th className="w-1/2 px-6 py-2.5 text-left font-semibold border-r border-gray-150">Source style</th>
              <th className="w-1/2 px-6 py-2.5 text-left font-semibold">Target style</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150">
            {segments.map((seg, idx) => {
              const isActive = idx === activeIndex;

              return (
                <tr
                  key={seg.id}
                  onClick={() => onRowSelect(idx)}
                  className={`transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'ring-2 ring-blue-500 ring-inset bg-blue-50/10'
                      : 'hover:bg-gray-50/40'
                  }`}
                >
                  {/* Source column */}
                  <td className="px-6 py-5 text-[13px] leading-relaxed text-gray-700 font-medium align-top border-r border-gray-100 whitespace-pre-wrap select-text">
                    {seg.sourceText}
                  </td>

                  {/* Target column */}
                  <td className="px-6 py-5 text-[13px] leading-relaxed align-top relative whitespace-pre-wrap select-text">
                    {isActive ? (
                      <div className="flex flex-col gap-2 h-full">
                        <textarea
                          ref={activeTextareaRef}
                          value={seg.targetText}
                          onChange={(e) => onTargetChange(seg.id, e.target.value)}
                          className="w-full text-[13px] leading-relaxed text-gray-800 font-semibold focus:outline-none bg-transparent resize-none border-none p-0 select-text"
                          rows={4}
                          placeholder="Type translation here..."
                        />
                        {/* Cell footer action icons inside target cell */}
                        <div className="flex items-center justify-end gap-3 mt-auto pt-2 text-gray-400 select-none">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleFlag(seg.id, !seg.isFlagged);
                            }}
                            className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                              seg.isFlagged ? 'text-red-500 hover:bg-red-50' : 'text-gray-400'
                            }`}
                            title="Flag this segment"
                          >
                            <Flag className="w-4 h-4 fill-current" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleComplete(seg.id, !seg.isCompleted);
                            }}
                            className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                              seg.isCompleted ? 'text-green-600 hover:bg-green-50' : 'text-gray-400'
                            }`}
                            title="Mark completed"
                          >
                            <CheckCircle className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-between h-full min-h-[40px]">
                        <span className={`text-gray-800 font-semibold ${seg.targetText ? '' : 'text-gray-300 italic'}`}>
                          {seg.targetText || 'Empty segment'}
                        </span>
                        {/* Small visual flags for completed/flagged cells */}
                        {(seg.isCompleted || seg.isFlagged) && (
                          <div className="flex justify-end gap-1.5 mt-2 text-gray-400 select-none">
                            {seg.isFlagged && <Flag className="w-3.5 h-3.5 text-red-500 fill-current" />}
                            {seg.isCompleted && <CheckCircle className="w-3.5 h-3.5 text-green-500 fill-current" />}
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View */}
      <div className="md:hidden flex-1 overflow-y-auto flex flex-col gap-4">
        {segments.map((seg, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={seg.id}
              onClick={() => onRowSelect(idx)}
              className={`p-4 bg-white border rounded-xl transition-all duration-150 flex flex-col gap-3 cursor-pointer ${
                isActive
                  ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Source</span>
                <p className="text-[13px] leading-relaxed text-gray-700 font-medium select-text">{seg.sourceText}</p>
              </div>
              <hr className="border-gray-100" />
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Target</span>
                {isActive ? (
                  <div className="flex flex-col gap-2">
                    <textarea
                      ref={activeTextareaRef}
                      value={seg.targetText}
                      onChange={(e) => onTargetChange(seg.id, e.target.value)}
                      className="w-full text-[13px] leading-relaxed text-gray-800 font-semibold focus:outline-none bg-transparent resize-none border-none p-0 select-text"
                      rows={3}
                      placeholder="Type translation here..."
                    />
                    <div className="flex items-center justify-end gap-3 pt-2 text-gray-400 select-none">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFlag(seg.id, !seg.isFlagged);
                        }}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                          seg.isFlagged ? 'text-red-500 hover:bg-red-50' : 'text-gray-400'
                        }`}
                        title="Flag segment"
                      >
                        <Flag className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleComplete(seg.id, !seg.isCompleted);
                        }}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                          seg.isCompleted ? 'text-green-600 hover:bg-green-50' : 'text-gray-400'
                        }`}
                        title="Mark completed"
                      >
                        <CheckCircle className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <p className={`text-[13px] leading-relaxed text-gray-800 font-semibold select-text min-h-[1.5rem] ${seg.targetText ? '' : 'text-gray-300 italic'}`}>
                      {seg.targetText || 'Empty segment'}
                    </p>
                    {(seg.isCompleted || seg.isFlagged) && (
                      <div className="flex justify-end gap-1.5 mt-2 text-gray-400 select-none">
                        {seg.isFlagged && <Flag className="w-3.5 h-3.5 text-red-500 fill-current" />}
                        {seg.isCompleted && <CheckCircle className="w-3.5 h-3.5 text-green-500 fill-current" />}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TranslationTable;
