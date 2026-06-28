'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { Header } from '../../../components/layout/Header';
import { LeftSidebar, RightSidebar } from '../../../components/layout/Sidebar';
import { Toolbar } from '../../../components/layout/Toolbar';
import { TranslationTable } from '../../../components/table/TranslationTable';
import { Pagination } from '../../../components/common/Pagination';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';
import { TableSkeleton } from '../../../components/common/Skeleton';

// Modals
import { GlossaryModal } from '../../../components/modal/GlossaryModal';
import { ExampleModal } from '../../../components/modal/ExampleModal';
import { ImportModal } from '../../../components/modal/ImportModal';

// Hooks & Actions
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  setCurrentProject,
} from '../../../features/project/projectSlice';
import {
  updateSegmentTargetText,
  toggleSegmentCompleted,
  toggleSegmentFlagged,
  setActiveSegmentIndex,
  syncProjectFiles,
  setActivePage,
  fetchPageTranslations,
} from '../../../features/translation/translationSlice';
import {
  setAddGlossaryOpen,
  setImportGlossaryOpen,
  setAddExampleOpen,
  setImportExampleOpen,
  setActiveProjectName,
  setLeftSidebarCollapsed,
  setRightSidebarCollapsed,
} from '../../../features/ui/uiSlice';
import { addMultipleGlossaryTerms } from '../../../features/glossary/glossarySlice';
import { addMultipleExamples } from '../../../features/examples/exampleSlice';

export default function TranslationWorkspacePage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const projectId = params.id as string;

  // Selectors
  const projects = useAppSelector((state) => state.project.projects);
  const currentProject = useAppSelector((state) => state.project.currentProject);
  const segments = useAppSelector((state) => state.translation.segments);
  const activeIndex = useAppSelector((state) => state.translation.activeSegmentIndex);
  const activePage = useAppSelector((state) => state.translation.activePage);
  const totalPages = useAppSelector((state) => state.translation.totalPages);
  const targetLanguage = useAppSelector((state) => state.translation.targetLanguage);
  const loading = useAppSelector((state) => state.translation.loading);

  // Modal UI Selectors
  const isAddGlossaryOpen = useAppSelector((state) => state.ui.isAddGlossaryOpen);
  const isImportGlossaryOpen = useAppSelector((state) => state.ui.isImportGlossaryOpen);
  const isAddExampleOpen = useAppSelector((state) => state.ui.isAddExampleOpen);
  const isImportExampleOpen = useAppSelector((state) => state.ui.isImportExampleOpen);

  // Load project details
  useEffect(() => {
    if (projectId) {
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        dispatch(setCurrentProject(project));
        dispatch(setActiveProjectName(project.name));
        dispatch(
          syncProjectFiles({
            projectFiles: project.files,
            sourceLang: project.sourceLang,
            targetLang: project.targetLang,
          })
        );
      }
    }
  }, [projectId, projects, dispatch]);

  // Load page segments when page or target language changes
  useEffect(() => {
    if (activePage && targetLanguage) {
      dispatch(fetchPageTranslations({ page: activePage, targetLang: targetLanguage }));
    }
  }, [activePage, targetLanguage, dispatch]);

  // Automatically collapse sidebars on mobile/tablet viewports on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch(setLeftSidebarCollapsed(true));
        dispatch(setRightSidebarCollapsed(true));
      } else {
        dispatch(setLeftSidebarCollapsed(false));
        dispatch(setRightSidebarCollapsed(false));
      }
    };
    
    // Run initially
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  const handleRowSelect = (index: number) => {
    dispatch(setActiveSegmentIndex(index));
  };

  const handleTargetChange = (id: string, text: string) => {
    dispatch(updateSegmentTargetText({ id, targetText: text }));
  };

  const handleToggleComplete = (id: string, isCompleted: boolean) => {
    dispatch(toggleSegmentCompleted({ id, isCompleted }));
  };

  const handleToggleFlag = (id: string, isFlagged: boolean) => {
    dispatch(toggleSegmentFlagged({ id, isFlagged }));
  };

  const handleSaveAndContinue = () => {
    if (segments.length === 0) return;

    // Mark current active row as completed
    const currentSegment = segments[activeIndex];
    if (currentSegment) {
      dispatch(toggleSegmentCompleted({ id: currentSegment.id, isCompleted: true }));
    }

    // Go to next row if not at the end
    if (activeIndex < segments.length - 1) {
      dispatch(setActiveSegmentIndex(activeIndex + 1));
    }
  };

  // Mock excel extractions
  const handleGlossaryExtract = (files: File[]) => {
    alert(`Extracting glossary terms from: ${files[0]?.name}`);
    dispatch(
      addMultipleGlossaryTerms([
        { id: `g-imp-${Date.now()}-1`, sourceWord: 'Transaction', targetWord: 'பரிவர்த்தனை', partOfSpeech: 'Noun' },
        { id: `g-imp-${Date.now()}-2`, sourceWord: 'Interest rate', targetWord: 'வட்டி விகிதம்', partOfSpeech: 'Noun' },
      ])
    );
  };

  const handleExamplesExtract = (files: File[]) => {
    alert(`Extracting translation examples from: ${files[0]?.name}`);
    dispatch(
      addMultipleExamples([
        {
          id: `e-imp-${Date.now()}-1`,
          sourceExample: 'Pay your balance in full every single month.',
          targetExample: 'ஒவ்வொரு மாதமும் உங்கள் நிலுவைத் தொகையை முழுமையாகச் செலுத்துங்கள்.',
        },
      ])
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#fafbfc]">
      {/* Header bar */}
      <Header editorMode />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Outline Sections */}
        <LeftSidebar onAddFile={() => alert('Adding new file outline segment...')} />

        {/* Center translation editor column */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#fafbfc]">
          {/* Format Toolbar */}
          <Toolbar onSave={handleSaveAndContinue} />

          {/* Side by side columns editor */}
          <div className="flex-1 overflow-hidden p-6 flex flex-col">
            {loading ? (
              <div className="flex-1 bg-white border border-gray-150 rounded-xl p-8 overflow-y-auto">
                <TableSkeleton />
              </div>
            ) : (
              <TranslationTable
                segments={segments}
                activeIndex={activeIndex}
                onRowSelect={handleRowSelect}
                onTargetChange={handleTargetChange}
                onToggleComplete={handleToggleComplete}
                onToggleFlag={handleToggleFlag}
              />
            )}
          </div>

          {/* Footer pagination */}
          <Pagination
            currentPage={activePage}
            totalPages={totalPages}
            onPageChange={(page) => dispatch(setActivePage(page))}
          />
        </div>

        {/* Right context side bar */}
        <RightSidebar />
      </div>

      {/* Glossary Overlays */}
      <GlossaryModal isOpen={isAddGlossaryOpen} onClose={() => dispatch(setAddGlossaryOpen(false))} />
      <ImportModal
        isOpen={isImportGlossaryOpen}
        onClose={() => dispatch(setImportGlossaryOpen(false))}
        title="Glossary > Import terms"
        subtitle="Add, edit, and organize glossary terms for better translation quality."
        onExtract={handleGlossaryExtract}
        templateName="GlossaryTemplate.xlsx"
      />

      {/* Example Overlays */}
      <ExampleModal isOpen={isAddExampleOpen} onClose={() => dispatch(setAddExampleOpen(false))} />
      <ImportModal
        isOpen={isImportExampleOpen}
        onClose={() => dispatch(setImportExampleOpen(false))}
        title="Translation example > Import example"
        subtitle="Add, edit, and organize style terms for better translation quality."
        onExtract={handleExamplesExtract}
        templateName="ExampleTemplate.xlsx"
      />
    </div>
  );
}
