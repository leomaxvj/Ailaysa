'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Modal } from './Modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addGlossaryTerm, deleteGlossaryTerm } from '../../features/ui/../glossary/glossarySlice';
import { setImportGlossaryOpen } from '../../features/ui/uiSlice';
import { SearchInput } from '../common/SearchInput';
import { Dropdown } from '../common/Dropdown';
import { Button } from '../common/Button';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const terms = useAppSelector((state) => state.glossary.terms);

  const [search, setSearch] = useState('');
  const [newSource, setNewSource] = useState('');
  const [newTarget, setNewTarget] = useState('');
  const [newPOS, setNewPOS] = useState('Noun');

  const partOfSpeechOptions = [
    { value: 'Noun', label: 'Noun' },
    { value: 'Verb', label: 'Verb' },
    { value: 'Adjective', label: 'Adjective' },
    { value: 'Adverb', label: 'Adverb' },
  ];

  const handleAddTerm = () => {
    if (!newSource.trim() || !newTarget.trim()) return;
    dispatch(
      addGlossaryTerm({
        id: `g-${Date.now()}`,
        sourceWord: newSource.trim(),
        targetWord: newTarget.trim(),
        partOfSpeech: newPOS,
      })
    );
    setNewSource('');
    setNewTarget('');
    setNewPOS('Noun');
  };

  const filteredTerms = terms.filter(
    (item) =>
      item.sourceWord.toLowerCase().includes(search.toLowerCase()) ||
      item.targetWord.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <div className="p-6 flex flex-col h-full gap-4 max-h-[85vh]">
        {/* Header section with search and import */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Add Glossary</h2>
            <p className="text-xs text-gray-500 mt-1">
              Effortlessly Create your board: Add, Edit, and Manage Fields with Ease
            </p>
          </div>
          <div className="flex items-center gap-2 self-end md:self-auto w-full md:w-auto">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search terms"
              className="w-48"
            />
            <button
              onClick={() => dispatch(setImportGlossaryOpen(true))}
              className="px-4 py-2 bg-[#0070f3] hover:bg-[#0051b3] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              Import terms
            </button>
          </div>
        </div>

        {/* Table representation */}
        <div className="flex-1 overflow-y-auto border border-gray-150 rounded-xl bg-gray-50/50">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-150 text-[11px] font-bold text-gray-400 uppercase bg-gray-50">
                <th className="px-4 py-3 text-left w-2/5">Source word</th>
                <th className="px-4 py-3 text-left w-2/5">Target word</th>
                <th className="px-4 py-3 text-left w-1/5">Parts of speech</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTerms.map((item) => (
                <tr key={item.id} className="hover:bg-white transition-colors">
                  <td className="px-4 py-2.5">
                    <input
                      type="text"
                      value={item.sourceWord}
                      readOnly
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none text-gray-700"
                    />
                  </td>
                  <td className="px-4 py-2.5">
                    <input
                      type="text"
                      value={item.targetWord}
                      readOnly
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none text-gray-700 font-semibold"
                    />
                  </td>
                  <td className="px-4 py-2.5">
                    <select
                      value={item.partOfSpeech}
                      disabled
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-white text-gray-600 appearance-none focus:outline-none"
                    >
                      <option>{item.partOfSpeech}</option>
                    </select>
                  </td>
                </tr>
              ))}
              {filteredTerms.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-8 text-center text-xs text-gray-400">
                    No terms found. Add one below!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom add fields matching screenshot 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white border-t border-gray-100 pt-4">
          <input
            type="text"
            placeholder="Charge"
            value={newSource}
            onChange={(e) => setNewSource(e.target.value)}
            className="flex-1 w-full px-3 py-2.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="குற்றச்சாட்டு"
            value={newTarget}
            onChange={(e) => setNewTarget(e.target.value)}
            className="flex-1 w-full px-3 py-2.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-semibold"
          />
          <div className="w-full md:w-44">
            <select
              value={newPOS}
              onChange={(e) => setNewPOS(e.target.value)}
              className="w-full px-3 py-2.5 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 appearance-none cursor-pointer"
            >
              {partOfSpeechOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddTerm}
            disabled={!newSource.trim() || !newTarget.trim()}
            className="w-full md:w-auto px-6 py-2.5 bg-[#0060cf] hover:bg-[#0050b3] disabled:opacity-50 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Add term
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default GlossaryModal;
