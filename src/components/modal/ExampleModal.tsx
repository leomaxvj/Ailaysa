'use client';

import React, { useState } from 'react';
import { Modal } from './Modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addExample } from '../../features/examples/exampleSlice';
import { setImportExampleOpen } from '../../features/ui/uiSlice';
import { SearchInput } from '../common/SearchInput';

interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExampleModal: React.FC<ExampleModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const examples = useAppSelector((state) => state.example.examples);

  const [search, setSearch] = useState('');
  const [newSource, setNewSource] = useState('');
  const [newTarget, setNewTarget] = useState('');

  const handleAddExample = () => {
    if (!newSource.trim() || !newTarget.trim()) return;
    dispatch(
      addExample({
        id: `e-${Date.now()}`,
        sourceExample: newSource.trim(),
        targetExample: newTarget.trim(),
      })
    );
    setNewSource('');
    setNewTarget('');
  };

  const filteredExamples = examples.filter(
    (item) =>
      item.sourceExample.toLowerCase().includes(search.toLowerCase()) ||
      item.targetExample.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <div className="p-6 flex flex-col h-full gap-4 max-h-[85vh]">
        {/* Header section with search and import */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Add translation examples</h2>
            <p className="text-xs text-gray-500 mt-1">
              Effortlessly Create your board: Add, Edit, and Manage Fields with Ease
            </p>
          </div>
          <div className="flex items-center gap-2 self-end md:self-auto w-full md:w-auto">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search example"
              className="w-48"
            />
            <button
              onClick={() => dispatch(setImportExampleOpen(true))}
              className="px-4 py-2 bg-[#0070f3] hover:bg-[#0051b3] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              Import example
            </button>
          </div>
        </div>

        {/* Table representation */}
        <div className="flex-1 overflow-y-auto border border-gray-150 rounded-xl bg-gray-50/50">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-150 text-[11px] font-bold text-gray-400 uppercase bg-gray-50">
                <th className="px-4 py-3 text-left w-1/2">Source example</th>
                <th className="px-4 py-3 text-left w-1/2">Target example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredExamples.map((item) => (
                <tr key={item.id} className="hover:bg-white transition-colors">
                  <td className="px-4 py-2.5">
                    <textarea
                      value={item.sourceExample}
                      readOnly
                      rows={2}
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none text-gray-700 resize-none"
                    />
                  </td>
                  <td className="px-4 py-2.5">
                    <textarea
                      value={item.targetExample}
                      readOnly
                      rows={2}
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none text-gray-700 font-semibold resize-none"
                    />
                  </td>
                </tr>
              ))}
              {filteredExamples.length === 0 && (
                <tr>
                  <td colSpan={2} className="px-4 py-8 text-center text-xs text-gray-400">
                    No examples found. Add one below!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom add fields */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white border-t border-gray-100 pt-4">
          <input
            type="text"
            placeholder="Source example"
            value={newSource}
            onChange={(e) => setNewSource(e.target.value)}
            className="flex-1 w-full px-3 py-2.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Target example"
            value={newTarget}
            onChange={(e) => setNewTarget(e.target.value)}
            className="flex-1 w-full px-3 py-2.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-semibold"
          />
          <button
            onClick={handleAddExample}
            disabled={!newSource.trim() || !newTarget.trim()}
            className="w-full md:w-auto px-6 py-2.5 bg-[#0060cf] hover:bg-[#0050b3] disabled:opacity-50 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Add example
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ExampleModal;
