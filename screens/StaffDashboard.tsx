
import React from 'react';
import { User, Screen } from '../types';
import { IconCalendar, IconLock, IconReport, IconGraduation } from '../components/Icons';

interface StaffDashboardProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  isCieLocked: boolean;
  isAttendanceLocked: boolean;
}

const StaffDashboard: React.FC<StaffDashboardProps> = ({ user, onNavigate, isCieLocked, isAttendanceLocked }) => {
  const subjects = [
    { code: 'CS301', name: 'Data Structures', class: '3-A', sessions: 42, lock: isAttendanceLocked },
    { code: 'CS302', name: 'OOP Lab', class: '3-A (B1)', sessions: 12, lock: isAttendanceLocked },
    { code: 'CS504', name: 'Theory of Computation', class: '5-B', sessions: 38, lock: isAttendanceLocked },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-1">Welcome back, {user.name}</h2>
        <p className="text-slate-500">You have 3 active subjects assigned for this semester.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
            <IconCalendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Attendance Status</p>
            <p className="text-lg font-bold text-slate-900">{isAttendanceLocked ? 'Locked' : 'Open'}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
            <IconLock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">CIE Portal</p>
            <p className="text-lg font-bold text-slate-900">{isCieLocked ? 'Locked' : 'Active'}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <IconReport className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Active Allocations</p>
            <p className="text-lg font-bold text-slate-900">{subjects.length} Subjects</p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">Assigned Subjects & Loading</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {subjects.map((sub, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-5 border-b border-slate-100">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase tracking-wider">{sub.code}</span>
                {sub.lock ? 
                  <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 uppercase"><IconLock className="w-3 h-3"/> Locked</span> :
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase"><IconCalendar className="w-3 h-3"/> Entry Open</span>
                }
              </div>
              <h4 className="font-bold text-slate-900">{sub.name}</h4>
              <p className="text-xs text-slate-500 font-medium">Class: {sub.class}</p>
            </div>
            <div className="p-4 bg-slate-50 flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <div className="text-center flex-1">
                  <p className="text-xl font-bold text-slate-900">{sub.sessions}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Total Periods</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-center flex-1">
                  <p className="text-xl font-bold text-slate-900">88%</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Avg Attendance</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => onNavigate('ATTENDANCE_ENTRY')}
                  disabled={sub.lock}
                  className={`flex-1 py-2 rounded text-xs font-bold transition-colors ${
                    sub.lock ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Enter Attendance
                </button>
                <button 
                  onClick={() => onNavigate('CIE_ENTRY')}
                  disabled={isCieLocked}
                  className={`flex-1 py-2 rounded text-xs font-bold transition-colors border ${
                    isCieLocked ? 'bg-slate-100 text-slate-300 border-slate-200' : 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Marks Entry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffDashboard;
