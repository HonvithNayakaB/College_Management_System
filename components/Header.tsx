
import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
      <div>
        <h1 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{user.branch}</h1>
        <p className="text-lg font-bold text-slate-900">{user.department}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-bold text-slate-900 leading-none">{user.name}</p>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
            user.role === 'ADMIN' ? 'bg-red-100 text-red-700' :
            user.role === 'HOD' ? 'bg-blue-100 text-blue-700' :
            'bg-emerald-100 text-emerald-700'
          }`}>
            {user.role}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold">
          {user.name.charAt(0)}
        </div>
      </div>
    </header>
  );
};

export default Header;
