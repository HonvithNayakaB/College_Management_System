
import React, { useState } from 'react';
import { Role } from '../types';

interface LoginScreenProps {
  onLogin: (role: Role) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [role, setRole] = useState<Role>('STAFF');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-slate-200 p-8">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg shadow-slate-200">
            E
          </div>
          <h1 className="text-2xl font-bold text-slate-900">EduChain Management</h1>
          <p className="text-slate-500 text-sm mt-1">Multi-Branch Academic Portal</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(role); }}>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Select Access Role</label>
            <div className="grid grid-cols-3 gap-2">
              {(['STAFF', 'HOD', 'ADMIN'] as Role[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-2 px-1 rounded-md text-[10px] font-bold transition-all border ${
                    role === r 
                      ? 'bg-slate-900 text-white border-slate-900' 
                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Employee ID / Username</label>
            <input 
              type="text" 
              placeholder="e.g. EMP001"
              className="w-full px-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-md shadow-md transition-colors"
          >
            Sign In to Portal
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-medium">
          <span>v2.4.0 Production</span>
          <a href="#" className="hover:text-slate-600 transition-colors">Forgot Password?</a>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-xs font-medium tracking-wide">
        &copy; 2024 EDUCHAIN ACADEMIC SOLUTIONS • ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default LoginScreen;
