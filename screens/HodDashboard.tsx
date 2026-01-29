
import React from 'react';
import { User, Screen } from '../types';
import { IconUsers, IconCalendar, IconLock, IconGraduation, IconReport } from '../components/Icons';

interface HodDashboardProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  isCieLocked: boolean;
  isAttendanceLocked: boolean;
}

const HodDashboard: React.FC<HodDashboardProps> = ({ user, onNavigate, isCieLocked, isAttendanceLocked }) => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-1">Department Overview</h2>
            <p className="text-slate-400">Head of Department: {user.name}</p>
          </div>
          <div className="bg-emerald-600/20 text-emerald-400 px-4 py-2 rounded border border-emerald-600/30 text-sm font-bold">
            Academic Year 2023-24 (Even)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Faculty</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-900">24</span>
            <IconUsers className="w-8 h-8 text-blue-100" />
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between text-[10px] font-bold text-emerald-600 uppercase">
            <span>22 Present</span>
            <span>2 On Leave</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Students</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-900">482</span>
            <IconGraduation className="w-8 h-8 text-emerald-100" />
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 text-[10px] font-bold text-slate-400 uppercase">
            6 Active Batches (A & B Sec)
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Attendance</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-900">84%</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isAttendanceLocked ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
              {isAttendanceLocked ? <IconLock className="w-4 h-4" /> : <IconCalendar className="w-4 h-4" />}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 text-[10px] font-bold text-slate-400 uppercase">
            {isAttendanceLocked ? 'Entry Period Expired' : 'Entry active for Day 42'}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pending CIE</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-900">03</span>
            <IconReport className="w-8 h-8 text-red-100" />
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 text-[10px] font-bold text-red-600 uppercase">
            Faculty submissions due
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Faculty Entry Compliance</h3>
            <button className="text-[10px] font-bold text-emerald-600 uppercase hover:underline">View Detail</button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                { name: 'Dr. Sarah Wilson', sub: 'CS301', status: 'Completed', color: 'emerald' },
                { name: 'Prof. James Bond', sub: 'CS501', status: 'Pending', color: 'red' },
                { name: 'Dr. Michael Chen', sub: 'CS702', status: 'Completed', color: 'emerald' },
                { name: 'Prof. Lisa Ray', sub: 'CS304', status: 'Completed', color: 'emerald' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                      {item.name.split(' ')[1].charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{item.sub}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                    item.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="p-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Quick Actions</h3>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <button 
              onClick={() => onNavigate('STUDENT_MANAGEMENT')}
              className="w-full text-left p-3 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <IconUsers className="w-5 h-5 text-slate-600" />
                <span className="text-sm font-bold text-slate-800">Add New Students</span>
              </div>
              <span className="text-lg text-slate-300">→</span>
            </button>
            <button 
              onClick={() => onNavigate('STAFF_ALLOCATION')}
              className="w-full text-left p-3 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <IconCalendar className="w-5 h-5 text-slate-600" />
                <span className="text-sm font-bold text-slate-800">Modify Allocation</span>
              </div>
              <span className="text-lg text-slate-300">→</span>
            </button>
            <button 
              onClick={() => onNavigate('REPORTS')}
              className="w-full text-left p-3 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <IconReport className="w-5 h-5 text-slate-600" />
                <span className="text-sm font-bold text-slate-800">Semester Summary</span>
              </div>
              <span className="text-lg text-slate-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HodDashboard;
