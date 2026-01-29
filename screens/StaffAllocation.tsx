
import React from 'react';
import { User, Screen, Allocation } from '../types';
import { IconPlus } from '../components/Icons';

interface StaffAllocationProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  allocations: Allocation[];
  setAllocations: React.Dispatch<React.SetStateAction<Allocation[]>>;
}

const StaffAllocation: React.FC<StaffAllocationProps> = ({ user, onNavigate, allocations }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Staff Allocation</h2>
          <p className="text-slate-500">Map faculty members to subjects, classes, and batches.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm hover:bg-slate-800">
          <IconPlus className="w-4 h-4" />
          Create New Mapping
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">Faculty Member</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">Subject</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-center">Sem/Sec</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-center">Type</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {allocations.map((alloc, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs uppercase">
                      {alloc.staffName.split(' ')[1]?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{alloc.staffName}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">ID: {alloc.staffId}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-slate-900">{alloc.subjectName}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{alloc.subjectCode}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-bold text-slate-700">{alloc.semester} - {alloc.section}</span>
                  {alloc.batch && <p className="text-[9px] font-bold text-blue-600 uppercase">Batch {alloc.batch}</p>}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                    alloc.batch ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {alloc.batch ? 'Laboratory' : 'Theory'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-slate-900 text-white rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-lg mb-1">Audit Log Required?</h4>
          <p className="text-slate-400 text-sm">Any changes to staff allocation are logged for accreditation purposes (NAAC/NBA). Final sync happens every weekend.</p>
        </div>
        <button className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-bold text-sm shadow-lg">
          Validate All Mappings
        </button>
      </div>
    </div>
  );
};

export default StaffAllocation;
