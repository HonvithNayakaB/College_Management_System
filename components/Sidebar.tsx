
import React from 'react';
import { Role, Screen } from '../types';
import { 
  IconCalendar, 
  IconReport, 
  IconUsers, 
  IconGraduation, 
  IconSettings, 
  IconLogOut, 
  IconPlus,
  IconLock
} from './Icons';

interface SidebarProps {
  role: Role;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, currentScreen, onNavigate, onLogout }) => {
  const menuItems = [
    { id: 'DASHBOARD', label: 'Dashboard', icon: <IconGraduation />, roles: ['STAFF', 'HOD', 'ADMIN'] },
    { id: 'ATTENDANCE_ENTRY', label: 'Attendance Entry', icon: <IconCalendar />, roles: ['STAFF', 'HOD', 'ADMIN'] },
    { id: 'CIE_ENTRY', label: 'CIE Entry', icon: <IconLock />, roles: ['STAFF', 'HOD', 'ADMIN'] },
    { id: 'REPORTS', label: 'Reports', icon: <IconReport />, roles: ['STAFF', 'HOD', 'ADMIN'] },
    { id: 'STUDENT_MANAGEMENT', label: 'Student Mgmt', icon: <IconUsers />, roles: ['HOD', 'ADMIN'] },
    { id: 'STAFF_ALLOCATION', label: 'Staff Allocation', icon: <IconPlus />, roles: ['HOD', 'ADMIN'] },
    { id: 'CONTROLS', label: 'System Controls', icon: <IconSettings />, roles: ['ADMIN'] },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col h-full shrink-0">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center font-bold text-xl">E</div>
          <span className="text-xl font-bold tracking-tight">EduChain</span>
        </div>
        <p className="text-xs text-slate-400 mt-1 font-medium tracking-widest uppercase">Academic Mgmt</p>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {menuItems.filter(item => item.roles.includes(role)).map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Screen)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              currentScreen === item.id 
                ? 'bg-emerald-600 text-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors"
        >
          <IconLogOut />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
