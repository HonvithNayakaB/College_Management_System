
import React, { useState } from 'react';
import { User, Screen, Student } from '../types';
import { IconUpload, IconPlus } from '../components/Icons';

interface StudentManagementProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const StudentManagement: React.FC<StudentManagementProps> = ({ user, onNavigate, students, setStudents }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      alert('Mock: Excel data parsed successfully. 50 new records detected.');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Student Records</h2>
          <p className="text-slate-500">Manage student enrollment and basic info.</p>
        </div>
        <div className="flex gap-3">
          <label className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm cursor-pointer hover:bg-slate-50">
            <IconUpload className="w-4 h-4 text-slate-500" />
            {isUploading ? 'Uploading...' : 'Bulk Excel Upload'}
            <input type="file" className="hidden" onChange={handleUpload} disabled={isUploading} />
          </label>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm hover:bg-slate-800">
            <IconPlus className="w-4 h-4" />
            Add Single Entry
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <div className="flex gap-4">
            <select className="border border-slate-200 rounded px-3 py-1.5 text-xs font-bold bg-white outline-none">
              <option>Semester 3</option>
              <option>Semester 5</option>
            </select>
            <select className="border border-slate-200 rounded px-3 py-1.5 text-xs font-bold bg-white outline-none">
              <option>Section A</option>
              <option>Section B</option>
            </select>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search USN or Name..." 
              className="pl-8 pr-4 py-1.5 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-emerald-500 outline-none w-64"
            />
            <span className="absolute left-2.5 top-1.5 opacity-30 text-xs font-bold">🔍</span>
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="bg-white border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">USN</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-slate-700">{student.rollNo}</td>
                <td className="px-6 py-4 text-sm text-slate-900">{student.name}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{student.semester} - {student.section}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold uppercase">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800 uppercase px-2">Edit</button>
                  <button className="text-[10px] font-bold text-red-400 hover:text-red-600 uppercase px-2">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <span className="text-xs text-slate-500 font-medium">Showing {students.length} of {students.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded text-xs bg-white text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border border-slate-900 rounded text-xs bg-slate-900 text-white font-bold">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-xs bg-white text-slate-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
