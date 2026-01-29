
import React from 'react';
import { User, Screen } from '../types';
import { IconLock, IconUnlock } from '../components/Icons';

interface ControlScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  isCieLocked: boolean;
  setIsCieLocked: (v: boolean) => void;
  isAttendanceLocked: boolean;
  setIsAttendanceLocked: (v: boolean) => void;
}

const ControlScreen: React.FC<ControlScreenProps> = ({ 
  user, onNavigate, isCieLocked, setIsCieLocked, isAttendanceLocked, setIsAttendanceLocked 
}) => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">System Controls</h2>
        <p className="text-slate-500">Enable or disable entry modules globally for all faculty.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-10">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Daily Attendance Entry
                {!isAttendanceLocked ? 
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase font-bold">Active</span> :
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded uppercase font-bold">Closed</span>
                }
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Controls whether faculty members can record or edit daily attendance. Typically closed after 11:59 PM each day.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-4">
              <div className="flex items-center">
                <button 
                  onClick={() => setIsAttendanceLocked(!isAttendanceLocked)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${!isAttendanceLocked ? 'bg-emerald-600' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${!isAttendanceLocked ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>
              <div className="w-10 flex justify-center">
                {!isAttendanceLocked ? <IconUnlock className="text-emerald-600" /> : <IconLock className="text-red-600" />}
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-100"></div>

          <div className="flex items-center justify-between">
            <div className="flex-1 pr-10">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Internal Assessment (CIE) Marks
                {!isCieLocked ? 
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase font-bold">Open</span> :
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded uppercase font-bold">Locked</span>
                }
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Enable this during active testing periods. Faculty will be able to synchronize marks for all assigned subjects.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-4">
              <button 
                onClick={() => setIsCieLocked(!isCieLocked)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${!isCieLocked ? 'bg-emerald-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${!isCieLocked ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <div className="w-10 flex justify-center">
                {!isCieLocked ? <IconUnlock className="text-emerald-600" /> : <IconLock className="text-red-600" />}
              </div>
            </div>
          </div>
          
          <div className="h-px bg-slate-100"></div>

          <div className="space-y-4">
             <h3 className="text-lg font-bold text-slate-900">Branch Configuration</h3>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Primary Branch</p>
                  <p className="text-sm font-bold text-slate-900">Main Campus, Tech City</p>
                  <p className="text-xs text-slate-500 mt-1">IP Restrict: Enabled</p>
                </div>
                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Secondary Branch</p>
                  <p className="text-sm font-bold text-slate-900">North Campus, Hills</p>
                  <p className="text-xs text-slate-500 mt-1">IP Restrict: Disabled</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 flex justify-between items-center">
          <p className="text-xs font-medium text-slate-500 italic">Last system-wide sync: 10 mins ago by Admin</p>
          <button className="bg-slate-900 text-white px-6 py-2 rounded font-bold text-sm shadow hover:bg-slate-800 transition-colors">
            Broadcast Status Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlScreen;
