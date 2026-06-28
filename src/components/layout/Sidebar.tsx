'use client';

import React, { useState } from 'react';
import { Check, FileText, Plus, ChevronDown, ChevronUp, Sparkles, Scissors, AlignLeft, MoreHorizontal, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setAddGlossaryOpen, setAddExampleOpen, setLeftSidebarCollapsed, setRightSidebarCollapsed } from '../../features/ui/uiSlice';
import { BOOK_CHAPTERS } from '../../constants/chapters';
import { setActivePage } from '../../features/translation/translationSlice';

// --- LEFT SIDEBAR ---
interface LeftSidebarProps {
  onAddFile?: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ onAddFile }) => {
  const dispatch = useAppDispatch();
  const isCollapsed = useAppSelector((state) => state.ui.isLeftSidebarCollapsed);
  const activeFileId = useAppSelector((state) => state.translation.activeFileId);
  const files = useAppSelector((state) => state.translation.files);

  const activePage = useAppSelector((state) => state.translation.activePage);

  // Find active chapter based on page index
  const activeChapterId = BOOK_CHAPTERS.reduce((prev, curr) => {
    if (activePage >= curr.page) return curr.id;
    return prev;
  }, BOOK_CHAPTERS[0].id);

  const handleSelectChapter = (page: number) => {
    dispatch(setActivePage(page));
  };

  if (isCollapsed) return null;

  return (
    <aside className="w-56 bg-white border-r border-gray-150 flex flex-col h-full shrink-0 select-none md:relative absolute left-0 top-0 z-30 shadow-xl md:shadow-none">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sections</h3>
        <button
          onClick={() => dispatch(setLeftSidebarCollapsed(true))}
          className="md:hidden p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          title="Close Sidebar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        <nav className="space-y-0.5 px-2">
          {BOOK_CHAPTERS.map((sec) => {
            const isActive = sec.id === activeChapterId;
            return (
              <div
                key={sec.id}
                onClick={() => handleSelectChapter(sec.page)}
                className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors group cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-[#0070f3] font-semibold border-l-2 border-[#0070f3] rounded-l-none'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {sec.isDoc ? (
                    <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  ) : (
                    <div className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-blue-500 text-blue-500 shrink-0">
                      {sec.checked && <Check className="w-2.5 h-2.5" />}
                    </div>
                  )}
                  <span className="truncate">{sec.name}</span>
                </div>
                {isActive && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Add file button */}
      <div className="p-3 border-t border-gray-100">
        <button
          onClick={onAddFile}
          className="flex items-center justify-center gap-1.5 w-full py-2 bg-transparent hover:bg-blue-50/50 text-[#0070f3] text-xs font-bold rounded-lg border border-dashed border-blue-300 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add File</span>
        </button>
      </div>
    </aside>
  );
};

// --- RIGHT SIDEBAR ---
export const RightSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCollapsed = useAppSelector((state) => state.ui.isRightSidebarCollapsed);
  const glossary = useAppSelector((state) => state.glossary.terms);
  const examples = useAppSelector((state) => state.example.examples);

  const [openAccordions, setOpenAccordions] = useState({
    memories: false,
    examples: true,
    glossary: true,
    reference: false,
    styleguide: false,
  });

  const toggleAccordion = (key: keyof typeof openAccordions) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (isCollapsed) return null;

  return (
    <aside className="w-56 bg-white border-l border-gray-150 flex flex-col h-full shrink-0 select-none md:relative absolute right-0 top-0 z-30 shadow-xl md:shadow-none">
      {/* Mobile Close Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between md:hidden">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Context & Memories</h3>
        <button
          onClick={() => dispatch(setRightSidebarCollapsed(true))}
          className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          title="Close Sidebar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Memories Section */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => toggleAccordion('memories')}
            className="flex items-center justify-between w-full px-4 py-3 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <span>Memories</span>
            {openAccordions.memories ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {openAccordions.memories && (
            <div className="px-4 pb-3 text-[11px] text-gray-400">
              No matching translation memories found.
            </div>
          )}
        </div>

        {/* Translation Examples Section */}
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between hover:bg-gray-50 transition-colors pr-2">
            <button
              onClick={() => toggleAccordion('examples')}
              className="flex-1 flex items-center justify-between px-4 py-3 text-xs font-semibold text-gray-600"
            >
              <span>Translation example</span>
            </button>
            <button
              onClick={() => dispatch(setAddExampleOpen(true))}
              className="p-1 rounded text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
              title="Add example"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          {openAccordions.examples && (
            <div className="px-4 pb-3 space-y-2">
              {examples.slice(0, 2).map((item) => (
                <div key={item.id} className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-[10px] text-gray-600 font-medium leading-relaxed">{item.sourceExample}</p>
                  <p className="text-[10px] text-blue-600 font-semibold leading-relaxed mt-1">{item.targetExample}</p>
                </div>
              ))}
              {examples.length === 0 && (
                <p className="text-[10px] text-gray-400">No examples added.</p>
              )}
            </div>
          )}
        </div>

        {/* Glossary Section */}
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between hover:bg-gray-50 transition-colors pr-2">
            <button
              onClick={() => toggleAccordion('glossary')}
              className="flex-1 flex items-center justify-between px-4 py-3 text-xs font-semibold text-gray-600"
            >
              <span>Glossary</span>
            </button>
            <button
              onClick={() => dispatch(setAddGlossaryOpen(true))}
              className="p-1 rounded text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
              title="Add glossary term"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          {openAccordions.glossary && (
            <div className="px-4 pb-3 space-y-1.5">
              {glossary.slice(0, 3).map((item) => (
                <div key={item.id} className="flex justify-between items-center text-[10px] p-1.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-semibold text-gray-600">{item.sourceWord}</span>
                  <span className="text-blue-600 font-bold">{item.targetWord}</span>
                </div>
              ))}
              {glossary.length === 0 && (
                <p className="text-[10px] text-gray-400">No glossary terms.</p>
              )}
            </div>
          )}
        </div>

        {/* Reference Translations Section */}
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between hover:bg-gray-50 transition-colors pr-2">
            <button
              onClick={() => toggleAccordion('reference')}
              className="flex-1 flex items-center justify-between px-4 py-3 text-xs font-semibold text-gray-600"
            >
              <span>Reference translations</span>
            </button>
            <button className="p-1 rounded text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          {openAccordions.reference && (
            <div className="px-4 pb-3 text-[11px] text-gray-400">
              No reference translations loaded.
            </div>
          )}
        </div>

        {/* Style Guide Section */}
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between hover:bg-gray-50 transition-colors pr-2">
            <button
              onClick={() => toggleAccordion('styleguide')}
              className="flex-1 flex items-center justify-between px-4 py-3 text-xs font-semibold text-gray-600"
            >
              <span>Style Guide</span>
            </button>
            <button className="p-1 rounded text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          {openAccordions.styleguide && (
            <div className="px-4 pb-3 text-[11px] text-gray-400">
              No style guide defined.
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions Drawer */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">Actions</h4>
        <div className="space-y-1.5">
          <button className="flex items-center gap-2 w-full px-3 py-2 bg-white border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-xs font-semibold text-gray-600 rounded-lg shadow-2xs transition-all cursor-pointer text-left">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Rewrite</span>
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 bg-white border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-xs font-semibold text-gray-600 rounded-lg shadow-2xs transition-all cursor-pointer text-left">
            <Scissors className="w-3.5 h-3.5 text-orange-500" />
            <span>Shorten</span>
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 bg-white border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-xs font-semibold text-gray-600 rounded-lg shadow-2xs transition-all cursor-pointer text-left">
            <AlignLeft className="w-3.5 h-3.5 text-green-500" />
            <span>Simplify</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
