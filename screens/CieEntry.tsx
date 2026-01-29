
import React, { useState } from 'react';
import { User, Screen, Student } from '../types';
import { IconLock } from '../components/Icons';

interface CieEntryProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  students: Student[];
  isLocked: boolean;
}

const CieEntry: React.FC<CieEntryProps> = ({ user, onNavigate, students, isLocked }) => {
  const [marks, setMarks] = useState<Record<string, string>>(
    students.reduce((acc, s) => ({ ...acc, [s.id]: '25' }), {})
  );

  const handleMarksChange = (id: string, value: string) => {
    if (isLocked) return;
    setMarks(prev => ({ ...prev, [id]: value }));
  };

  const isValid = (val: string) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 0 && num <= 30;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">CIE Marks Entry</h2>
          <p className="text-slate-500">Internal assessment marks for current active tests.</p>
        </div>
        {isLocked && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm">
            <IconLock className="w-4 h-4" />
            CIE MARKS PORTAL IS CURRENTLY CLOSED
          </div>
        )}
      </div>

      <div className={`bg-white p-6 rounded-lg shadow-sm border border-slate-200 ${isLocked ? 'opacity-60 grayscale' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Academic Year</label>
            <div className="p-2 border border-slate-100 bg-slate-50 text-sm font-medium rounded">2023-24</div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Assessment Type</label>
            <select className="w-full border border-slate-200 rounded p-2 text-sm font-medium" disabled={isLocked}>
              <option>CIE Test 01</option>
              <option>CIE Test 02</option>
              <option>Assignment 01</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Max Marks</label>
            <div className="p-2 border border-slate-100 bg-slate-50 text-sm font-bold rounded text-slate-900">30.00</div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">USN</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right w-40">Obtained Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-3 text-sm font-bold text-slate-700">{student.rollNo}</td>
                  <td className="px-6 py-3 text-sm text-slate-900">{student.name}</td>
                  <td className="px-6 py-3 text-right">
                    <input 
                      type="number"
                      max={30}
                      min={0}
                      value={marks[student.id]}
                      onChange={(e) => handleMarksChange(student.id, e.target.value)}
                      disabled={isLocked}
                      className={`w-24 px-3 py-1.5 text-right font-bold border rounded focus:outline-none transition-all ${
                        !isValid(marks[student.id]) 
                          ? 'border-red-500 bg-red-50 text-red-600' 
                          : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-700 leading-relaxed">
          <strong>Validation Rule:</strong> Marks must be between 0.0 and 30.0. Any value outside this range will block submission. Ensure all fields are filled before final synchronization.
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="px-6 py-2 rounded text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200" disabled={isLocked}>
            Sync & Finalize
          </button>
        </div>
      </div>
    </div>
  );
};

export default CieEntry;
