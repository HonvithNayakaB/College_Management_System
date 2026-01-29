
import React, { useState } from 'react';
import { User, Screen } from '../types';
import { IconLock, IconCalendar } from '../components/Icons';

interface AttendanceEntryProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  isLocked: boolean;
}

const AttendanceEntry: React.FC<AttendanceEntryProps> = ({ user, onNavigate, isLocked }) => {
  const [selectedSubject, setSelectedSubject] = useState('CS301');
  const [attendance, setAttendance] = useState<Record<string, boolean>>({
    'CS001': true, 'CS002': true, 'CS003': false, 'CS004': true, 'CS005': true
  });

  const students = [
    { id: 'CS001', name: 'Alice Thompson' },
    { id: 'CS002', name: 'Bob Richards' },
    { id: 'CS003', name: 'Charlie Davis' },
    { id: 'CS004', name: 'Diana Prince' },
    { id: 'CS005', name: 'Ethan Hunt' },
  ];

  const toggleAttendance = (id: string) => {
    if (isLocked) return;
    setAttendance(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Attendance Entry</h2>
          <p className="text-slate-500">Record daily attendance for assigned sections.</p>
        </div>
        {isLocked && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm">
            <IconLock className="w-4 h-4" />
            ATTENDANCE PERIOD LOCKED BY ADMINISTRATION
          </div>
        )}
      </div>

      <div className={`bg-white p-6 rounded-lg shadow-sm border border-slate-200 ${isLocked ? 'opacity-60 grayscale' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Date</label>
            <input type="date" className="w-full border border-slate-200 rounded p-2 text-sm font-medium" defaultValue="2024-05-20" disabled={isLocked} />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Semester</label>
            <select className="w-full border border-slate-200 rounded p-2 text-sm font-medium" disabled={isLocked}>
              <option>3rd Semester</option>
              <option>5th Semester</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Subject</label>
            <select 
              className="w-full border border-slate-200 rounded p-2 text-sm font-medium" 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)}
              disabled={isLocked}
            >
              <option value="CS301">CS301 - Data Structures</option>
              <option value="CS302">CS302 - OOP Lab</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Period</label>
            <select className="w-full border border-slate-200 rounded p-2 text-sm font-medium" disabled={isLocked}>
              <option>Period 1 (09:00 - 10:00)</option>
              <option>Period 2 (10:00 - 11:00)</option>
              <option>Period 3 (11:15 - 12:15)</option>
            </select>
          </div>
          {selectedSubject === 'CS302' && (
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Lab Batch</label>
              <select className="w-full border border-slate-200 rounded p-2 text-sm font-medium" disabled={isLocked}>
                <option>Batch B1</option>
                <option>Batch B2</option>
              </select>
            </div>
          )}
        </div>

        <div className="border border-slate-200 rounded-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">USN / Roll No</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-32">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-3 text-sm font-bold text-slate-700">{student.id}</td>
                  <td className="px-6 py-3 text-sm text-slate-900">{student.name}</td>
                  <td className="px-6 py-3 text-center">
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      disabled={isLocked}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all uppercase tracking-wide border ${
                        attendance[student.id]
                          ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                          : 'bg-red-100 text-red-700 border-red-200'
                      }`}
                    >
                      {attendance[student.id] ? 'Present' : 'Absent'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="px-6 py-2 rounded text-sm font-bold text-slate-500 hover:bg-slate-50 border border-slate-200" disabled={isLocked}>
            Save Draft
          </button>
          <button className="px-6 py-2 rounded text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700" disabled={isLocked}>
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceEntry;
