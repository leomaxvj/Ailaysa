'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export default function WorkspaceSelectionPage() {
  const router = useRouter();

  const handleSelectWorkspace = (workspaceName: string) => {
    // Navigate to project dashboard
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc] select-none">
      {/* Header bar with Ailaysa logo */}
      <header className="px-10 py-6 shrink-0">
        <div className="flex items-center gap-2">
          {/* Blue logo icon with "ai" */}
          <div className="flex items-center justify-center w-7 h-7 bg-[#0070f3] rounded-lg text-white font-bold text-sm tracking-tighter">
            ai
          </div>
          <span className="text-base font-bold text-gray-800 tracking-wide">Ailaysa</span>
        </div>
      </header>

      {/* Main body */}
      <main className="flex-1 flex flex-col items-center py-8 sm:py-16 px-4">
        <div className="text-center max-w-xl mb-12">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight sm:text-3xl">
            Choose your workspace
          </h1>
          <p className="text-sm text-gray-400 mt-2 font-medium">
            Start working smarter with Ailaysa&apos;s intelligent translation platform.
          </p>
        </div>

        {/* Workspace Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Card 1: Transeditor */}
          <div className="flex flex-col justify-between bg-white border border-gray-150 rounded-2xl p-4 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] bg-[#0070f3] rounded-xl text-white font-bold text-lg tracking-tighter shrink-0">
                  ai
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">Ailaysa Transeditor</h3>
              </div>
              <p className="text-xs text-gray-400 font-medium leading-relaxed mt-6">
                Edit, refine and perfect translations with the power of AI and your expertise. Built for translators and language professionals.
              </p>
            </div>
            <div className="mt-8">
              <button
                // onClick={() => handleSelectWorkspace('transeditor')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#0070f3] hover:bg-[#0051b3] active:bg-[#004099] text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get Started</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Tiger (New) */}
          <div className="flex flex-col justify-between bg-white border border-gray-150 rounded-2xl p-4 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  {/* Black circular logo with stripes */}
                  <div className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] bg-black rounded-full text-white overflow-hidden shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-2">
                      <line x1="4" y1="20" x2="20" y2="4" />
                      <line x1="10" y1="20" x2="20" y2="10" />
                      <line x1="4" y1="14" x2="14" y2="4" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Ailaysa Tiger</h3>
                    <span className="sm:hidden px-2 py-0.5 bg-[#107c41] text-white text-[10px] font-bold rounded-md shrink-0">
                      New
                    </span>
                  </div>
                </div>
                {/* Green New Badge (Desktop only) */}
                <span className="hidden sm:inline-block px-2.5 py-1 bg-[#107c41] text-white text-[10px] font-bold rounded-md shrink-0">
                  New
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium leading-relaxed mt-6">
                Edit, refine and perfect translations with the power of AI and your expertise. Built for translators and language professionals.
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => handleSelectWorkspace('tiger')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#0070f3] hover:bg-[#0051b3] active:bg-[#004099] text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get Started</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
