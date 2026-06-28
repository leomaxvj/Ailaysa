'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Header } from '../../components/layout/Header';
import { Dropdown } from '../../components/common/Dropdown';
import { UploadArea } from '../../components/upload/UploadArea';
import { FileCard } from '../../components/upload/FileCard';
import { ProjectTable } from '../../components/table/ProjectTable';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addProject, setCurrentProject, deleteProjectFile } from '../../features/project/projectSlice';
import { LANGUAGES } from '../../constants/languages';
import { Project, ProjectFile } from '../../types';

// Zod validation schema
const projectSchema = z.object({
  name: z.string().min(2, 'Project name must be at least 2 characters'),
  sourceLang: z.string().min(1, 'Source language is required'),
  targetLang: z.string().min(1, 'Target language is required'),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function ProjectDashboardPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.project.projects);

  const [uploadedFiles, setUploadedFiles] = useState<ProjectFile[]>([]);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: 'Untitled Project',
      sourceLang: '',
      targetLang: '',
    },
  });

  // Handle file drops / browse selection
  const handleFilesSelected = async (files: File[]) => {
    setFileError('');
    
    const newFilesPromise = files.map(async (file) => {
      let content = '';
      if (file.name.toLowerCase().endsWith('.txt')) {
        content = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve((e.target?.result as string) || '');
          reader.readAsText(file);
        });
      }
      return {
        id: `f-new-${Date.now()}-${file.name}`,
        name: file.name,
        date: new Date().toLocaleDateString('en-GB'),
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        progress: 0,
        status: 'uploading' as const,
        content: content || undefined,
      };
    });

    const newFiles = await Promise.all(newFilesPromise);

    setUploadedFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress ticks
    newFiles.forEach((newF) => {
      let prog = 0;
      const interval = setInterval(() => {
        prog += Math.floor(Math.random() * 20) + 10;
        if (prog >= 100) {
          prog = 100;
          clearInterval(interval);
          setUploadedFiles((prev) =>
            prev.map((f) =>
              f.id === newF.id ? { ...f, progress: 100, status: 'completed' } : f
            )
          );
        } else {
          setUploadedFiles((prev) =>
            prev.map((f) => (f.id === newF.id ? { ...f, progress: prog } : f))
          );
        }
      }, 400);
    });
  };

  const handleCancelFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const handleDeleteFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const onSubmit = async (data: ProjectFormData) => {
    if (uploadedFiles.length === 0) {
      setFileError('At least one file must be uploaded');
      return;
    }

    const hasUploading = uploadedFiles.some((f) => f.status === 'uploading');
    if (hasUploading) {
      setFileError('Please wait for file uploads to complete');
      return;
    }

    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newProject: Project = {
      id: `p-${Date.now()}`,
      name: data.name,
      sourceLang: data.sourceLang,
      targetLang: data.targetLang,
      createdOn: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
      files: uploadedFiles,
    };

    dispatch(addProject(newProject));
    setIsSubmitting(false);

    // Reset Form
    reset({
      name: 'Untitled Project',
      sourceLang: '',
      targetLang: '',
    });
    setUploadedFiles([]);
  };

  const handleOpenProject = (project: Project) => {
    dispatch(setCurrentProject(project));
    // Route to Translation Workspace Editor
    router.push(`/editor/${project.id}`);
  };

  const handleDeleteProject = (projectId: string) => {
    // Delete project logic can be handled simply via state filter
    // We can dispatch or keep it simple. Let's just alert for now or implement direct delete
    alert('Project delete action triggered.');
  };

  const langOptions = LANGUAGES.map((l) => ({ value: l.code, label: l.name }));

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc]">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-8 flex flex-col gap-8">
        {/* Project Form Area Container */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border border-gray-150 rounded-2xl p-4 sm:p-8 shadow-xs flex flex-col gap-6"
        >
          {/* Top Row: Editable project title input + cancel/create buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div className="w-full sm:w-1/2 max-w-sm">
              <input
                type="text"
                {...register('name')}
                placeholder="Untitled Project"
                className="w-full text-base font-semibold text-gray-800 border border-transparent hover:border-gray-200 focus:border-gray-300 px-2 py-1 rounded-lg focus:outline-none transition-all"
              />
              {errors.name && (
                <span className="text-xs text-red-500 font-medium ml-2">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setUploadedFiles([]);
                }}
                className="w-full sm:w-auto px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 text-xs font-bold rounded-lg transition-colors cursor-pointer text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2 bg-[#0070f3] hover:bg-[#0051b3] disabled:opacity-50 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer text-center"
              >
                {isSubmitting ? 'Creating...' : 'Create'}
              </button>
            </div>
          </div>

          {/* Languages Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="sourceLang"
              control={control}
              render={({ field }) => (
                <Dropdown
                  label="Source language"
                  placeholder="Select source language"
                  options={langOptions}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.sourceLang?.message}
                />
              )}
            />

            <Controller
              name="targetLang"
              control={control}
              render={({ field }) => (
                <Dropdown
                  label="Target Language"
                  placeholder="Select target language"
                  options={langOptions}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.targetLang?.message}
                />
              )}
            />
          </div>

          {/* File Upload Section */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-700">
              Upload file(s)<span className="text-red-500 ml-0.5">*</span>
            </label>
            <UploadArea onFilesSelected={handleFilesSelected} error={fileError} />

            {/* List of files being uploaded / completed */}
            {uploadedFiles.length > 0 && (
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold px-1 uppercase">
                  <span>Files</span>
                  <span>
                    {uploadedFiles.filter((f) => f.status === 'completed').length}/
                    {uploadedFiles.length} uploaded
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {uploadedFiles.map((file) => (
                    <FileCard
                      key={file.id}
                      file={file}
                      onCancel={handleCancelFile}
                      onDelete={handleDeleteFile}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </form>

        {/* My Projects List Table Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-base font-bold text-gray-800 px-1">My Projects</h2>
          <ProjectTable
            projects={projects}
            onOpen={handleOpenProject}
            onDelete={handleDeleteProject}
          />
        </section>
      </main>
    </div>
  );
}
