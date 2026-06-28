'use client';

import React from 'react';
import { Project } from '../../types';
import { ActionMenu } from '../common/ActionMenu';
import { LanguageSelector } from '../common/LanguageSelector';

interface ProjectTableProps {
  projects: Project[];
  onOpen: (project: Project) => void;
  onDelete?: (projectId: string) => void;
}

export const ProjectTable: React.FC<ProjectTableProps> = ({
  projects,
  onOpen,
  onDelete,
}) => {
  return (
    <div className="w-full overflow-x-auto select-none">
      {/* Desktop / Tablet Table */}
      <table className="hidden md:table w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="text-[11px] font-bold text-gray-400 uppercase">
            <th className="px-6 py-2 text-left font-semibold">Project Name</th>
            <th className="px-6 py-2 text-left font-semibold">Language pair</th>
            <th className="px-6 py-2 text-left font-semibold">Created on</th>
            <th className="px-6 py-2 text-right font-semibold pr-16">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            const menuItems = [
              { label: 'Open Project', onClick: () => onOpen(project) },
              ...(onDelete ? [{ label: 'Delete Project', onClick: () => onDelete(project.id), danger: true }] : []),
            ];

            return (
              <tr
                key={project.id}
                className="bg-white border border-gray-200 hover:border-blue-300 focus-within:border-blue-400 transition-all rounded-xl shadow-xs group"
              >
                {/* Project Name */}
                <td className="px-6 py-4 border-y border-l border-gray-200 rounded-l-xl font-semibold text-xs text-gray-700">
                  {project.name}
                </td>

                {/* Language pair */}
                <td className="px-6 py-4 border-y border-gray-200 text-xs">
                  <div className="inline-flex items-center gap-1 text-[#0060df] font-bold">
                    <span>{project.sourceLang === 'en' ? 'English' : project.sourceLang}</span>
                    <span className="text-blue-400 font-normal">→</span>
                    <span>{project.targetLang === 'ta' ? 'Tamil' : project.targetLang}</span>
                  </div>
                </td>

                {/* Created on */}
                <td className="px-6 py-4 border-y border-gray-200 text-xs text-gray-500">
                  {project.createdOn}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 border-y border-r border-gray-200 rounded-r-xl text-right pr-6">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => onOpen(project)}
                      className="px-4 py-1.5 bg-[#0070f3] hover:bg-[#0051b3] active:bg-[#004099] text-white text-[11px] font-bold rounded-lg shadow-2xs transition-colors cursor-pointer"
                    >
                      Open
                    </button>
                    <ActionMenu items={menuItems} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Mobile Card Stack */}
      <div className="md:hidden flex flex-col gap-3">
        {projects.map((project) => {
          const menuItems = [
            { label: 'Open Project', onClick: () => onOpen(project) },
            ...(onDelete ? [{ label: 'Delete Project', onClick: () => onDelete(project.id), danger: true }] : []),
          ];

          return (
            <div
              key={project.id}
              className="flex flex-col gap-3 p-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl shadow-xs"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-gray-700 truncate">{project.name}</h4>
                <ActionMenu items={menuItems} />
              </div>

              <div className="flex flex-col gap-1 items-start text-xs">
                <div className="inline-flex items-center gap-1 text-[#0060df] font-bold">
                  <span>{project.sourceLang === 'en' ? 'English' : project.sourceLang}</span>
                  <span className="text-blue-400 font-normal">→</span>
                  <span>{project.targetLang === 'ta' ? 'Tamil' : project.targetLang}</span>
                </div>
                <span className="text-[10px] text-gray-400">{project.createdOn}</span>
              </div>

              <button
                onClick={() => onOpen(project)}
                className="w-full py-2 bg-[#0070f3] hover:bg-[#0051b3] text-white text-[11px] font-bold rounded-lg shadow-2xs transition-colors cursor-pointer"
              >
                Open
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectTable;
