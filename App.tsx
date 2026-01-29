
import React, { useState, useEffect } from 'react';
import { User, Role, Screen, Student, Allocation } from './types';
import LoginScreen from './screens/LoginScreen';
import StaffDashboard from './screens/StaffDashboard';
import HodDashboard from './screens/HodDashboard';
import AttendanceEntry from './screens/AttendanceEntry';
import CieEntry from './screens/CieEntry';
import ReportsScreen from './screens/ReportsScreen';
import StudentManagement from './screens/StudentManagement';
import StaffAllocation from './screens/StaffAllocation';
import ControlScreen from './screens/ControlScreen';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');
  const [isCieLocked, setIsCieLocked] = useState(true);
  const [isAttendanceLocked, setIsAttendanceLocked] = useState(false);

  // Mock data persistence for demo
  const [allocations, setAllocations] = useState<Allocation[]>([
    { staffId: '1', staffName: 'Dr. Sarah Wilson', subjectCode: 'CS301', subjectName: 'Data Structures', semester: 3, section: 'A' },
    { staffId: '1', staffName: 'Dr. Sarah Wilson', subjectCode: 'CS302', subjectName: 'Object Oriented Programming Lab', semester: 3, section: 'A', batch: 'B1' },
    { staffId: '2', staffName: 'Prof. James Bond', subjectCode: 'CS501', subjectName: 'Operating Systems', semester: 5, section: 'B' },
  ]);

  const [students, setStudents] = useState<Student[]>([
    { id: '1', rollNo: 'CS001', name: 'Alice Thompson', semester: 3, section: 'A' },
    { id: '2', rollNo: 'CS002', name: 'Bob Richards', semester: 3, section: 'A' },
    { id: '3', rollNo: 'CS003', name: 'Charlie Davis', semester: 3, section: 'A' },
    { id: '4', rollNo: 'CS004', name: 'Diana Prince', semester: 3, section: 'A' },
    { id: '5', rollNo: 'CS005', name: 'Ethan Hunt', semester: 3, section: 'A' },
  ]);

  const handleLogin = (role: Role) => {
    const mockUser: User = {
      id: role === 'STAFF' ? '1' : (role === 'HOD' ? '101' : '999'),
      name: role === 'STAFF' ? 'Dr. Sarah Wilson' : (role === 'HOD' ? 'Dr. Robert Brown' : 'Admin User'),
      role,
      branch: 'Main Campus',
      department: 'Computer Science & Engineering'
    };
    setUser(mockUser);
    setCurrentScreen('DASHBOARD');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('LOGIN');
  };

  const renderScreen = () => {
    if (currentScreen === 'LOGIN') {
      return <LoginScreen onLogin={handleLogin} />;
    }

    const commonProps = {
      user: user!,
      onNavigate: setCurrentScreen,
    };

    switch (currentScreen) {
      case 'DASHBOARD':
        return user?.role === 'HOD' || user?.role === 'ADMIN' ? 
          <HodDashboard {...commonProps} isCieLocked={isCieLocked} isAttendanceLocked={isAttendanceLocked} /> : 
          <StaffDashboard {...commonProps} isCieLocked={isCieLocked} isAttendanceLocked={isAttendanceLocked} />;
      case 'ATTENDANCE_ENTRY':
        return <AttendanceEntry {...commonProps} isLocked={isAttendanceLocked} />;
      case 'CIE_ENTRY':
        return <CieEntry {...commonProps} students={students} isLocked={isCieLocked} />;
      case 'REPORTS':
        return <ReportsScreen {...commonProps} />;
      case 'STUDENT_MANAGEMENT':
        return <StudentManagement {...commonProps} students={students} setStudents={setStudents} />;
      case 'STAFF_ALLOCATION':
        return <StaffAllocation {...commonProps} allocations={allocations} setAllocations={setAllocations} />;
      case 'CONTROLS':
        return (
          <ControlScreen 
            {...commonProps} 
            isCieLocked={isCieLocked} 
            setIsCieLocked={setIsCieLocked} 
            isAttendanceLocked={isAttendanceLocked} 
            setIsAttendanceLocked={setIsAttendanceLocked} 
          />
        );
      default:
        return <StaffDashboard {...commonProps} isCieLocked={isCieLocked} isAttendanceLocked={isAttendanceLocked} />;
    }
  };

  if (currentScreen === 'LOGIN') return renderScreen();

  return (
    <div className="flex h-screen bg-white">
      <Sidebar 
        role={user?.role || 'STAFF'} 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen} 
        onLogout={handleLogout} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user!} />
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
};

export default App;
