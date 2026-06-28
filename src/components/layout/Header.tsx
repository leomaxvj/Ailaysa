'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Cloud, Download, UserPlus, ChevronDown } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { updateProjectTargetLang } from '../../features/project/projectSlice';
import { changeTargetLanguage } from '../../features/translation/translationSlice';
import { LanguageSelector } from '../common/LanguageSelector';

interface HeaderProps {
  editorMode?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ editorMode = false }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.currentUser);
  const projectName = useAppSelector((state) => state.ui.activeProjectName);
  const currentProject = useAppSelector((state) => state.project.currentProject);

  const sourceLang = currentProject?.sourceLang || 'en';
  const targetLang = currentProject?.targetLang || 'ta';

  return (
    <header className="flex items-center justify-between h-14 px-6 bg-white border-b border-gray-150 shadow-xs shrink-0 select-none">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {editorMode && (
          <button
            onClick={() => router.push('/dashboard')}
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Back to projects"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Circular black icon with diagonal stripes */}
          <div className="flex items-center justify-center w-7 h-7 bg-black rounded-full text-white font-semibold text-sm overflow-hidden shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
              <line x1="4" y1="20" x2="20" y2="4" />
              <line x1="10" y1="20" x2="20" y2="10" />
              <line x1="4" y1="14" x2="14" y2="4" />
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-800 tracking-wide hidden sm:inline">Ailaysa Tiger</span>
        </div>
      </div>

      {/* Center (only in Editor Mode) */}
      {editorMode && (
        <div className="flex items-center gap-1.5 sm:gap-3">
          <span className="hidden md:inline text-xs font-semibold text-gray-400 max-w-[120px] truncate">
            {projectName}
          </span>
          <span className="hidden md:inline text-gray-300">
            <Cloud className="w-4 h-4 text-gray-400" />
          </span>
          <div className="flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-[#0070f3] shrink-0">
            <span>{sourceLang === 'en' ? 'English' : sourceLang}</span>
            <span className="text-blue-400 font-normal">→</span>
            <select
              value={targetLang}
              onChange={(e) => {
                const newLang = e.target.value;
                if (currentProject) {
                  dispatch(updateProjectTargetLang({ projectId: currentProject.id, targetLang: newLang }));
                }
                dispatch(changeTargetLanguage(newLang));
              }}
              className="bg-transparent border-none outline-none font-semibold text-[#0070f3] cursor-pointer pr-1 text-xs"
            >
              <option value="ta">Tamil</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
        </div>
      )}

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-3">
        {editorMode && (
          <>
            <button className="hidden sm:inline-flex p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer shrink-0">
              <Download className="w-4 h-4" />
            </button>

            {/* Avatar Stack Group */}
            <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-full px-2 py-0.5 bg-gray-50 shrink-0">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-700 text-[10px] font-bold text-white">
                4+
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <UserPlus className="w-3.5 h-3.5" />
              </button>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
          </>
        )}

        {/* User profile avatar */}
        {user && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-7 h-7 rounded-full object-cover border border-gray-200 shadow-xs"
          />
        )}
      </div>
    </header>
  );
};
export default Header;
