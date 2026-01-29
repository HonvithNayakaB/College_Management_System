
import React from 'react';
import { User, Screen } from '../types';
import { IconDownload, IconReport } from '../components/Icons';

interface ReportsScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
}

const ReportsScreen: React.FC<ReportsScreenProps> = ({ user, onNavigate }) => {
  const reportTypes = [
    'Consolidated Attendance Report',
    'Subject-wise CIE Summary',
    'Below 75% Attendance List',
    'Semester Toppers (Internal)',
    'Faculty Workload Analysis'
  ];

  const mockData = [
    { usn: 'CS001', name: 'Alice Thompson', att: '92%', cie: '28/30' },
    { usn: 'CS002', name: 'Bob Richards', att: '88%', cie: '24/30' },
    { usn: 'CS003', name: 'Charlie Davis', att: '64%', cie: '18/30' },
    { usn: 'CS004', name: 'Diana Prince', att: '95%', cie: '29/30' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Academic Reports</h2>
          <p className="text-slate-500">Generate and export administrative records.</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm hover:bg-emerald-700">
          <IconDownload className="w-4 h-4" />
          Export Current View (PDF)
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Report Type</label>
            <select className="w-full border border-slate-200 rounded p-2 text-sm font-medium">
              {reportTypes.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Semester</label>
            <select className="w-full border border-slate-200 rounded p-2 text-sm font-medium">
              <option>All Semesters</option>
              <option>Semester 3</option>
              <option>Semester 5</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Subject</label>
            <select className="w-full border border-slate-200 rounded p-2 text-sm font-medium">
              <option>All Subjects</option>
              <option>CS301 - Data Structures</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-slate-900 text-white py-2 rounded font-bold text-sm">Generate Preview</button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Total Students</p>
            <p className="text-2xl font-bold text-slate-900">124</p>
          </div>
          <div className="p-4 bg-red-50 rounded border border-red-100">
            <p className="text-[10px] font-bold text-red-400 uppercase">Critical Attendance</p>
            <p className="text-2xl font-bold text-red-600">8 Students</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded border border-emerald-100">
            <p className="text-[10px] font-bold text-emerald-400 uppercase">Average Marks</p>
            <p className="text-2xl font-bold text-emerald-600">24.2 / 30</p>
          </div>
        </div>

        <div className="border border-slate-200 rounded-md overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-bold text-slate-500 uppercase">USN</th>
                <th className="px-4 py-3 font-bold text-slate-500 uppercase">Name</th>
                <th className="px-4 py-3 font-bold text-slate-500 uppercase">Attendance %</th>
                <th className="px-4 py-3 font-bold text-slate-500 uppercase">CIE Score</th>
                <th className="px-4 py-3 font-bold text-slate-500 uppercase">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {mockData.map((row) => (
                <tr key={row.usn} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">{row.usn}</td>
                  <td className="px-4 py-3 text-slate-900">{row.name}</td>
                  <td className={`px-4 py-3 ${parseInt(row.att) < 75 ? 'text-red-600 font-bold' : 'text-slate-600'}`}>{row.att}</td>
                  <td className="px-4 py-3 text-slate-600">{row.cie}</td>
                  <td className="px-4 py-3">
                    {parseInt(row.att) < 75 ? <span className="text-[9px] px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full font-bold uppercase">Shortage</span> : '--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsScreen;
