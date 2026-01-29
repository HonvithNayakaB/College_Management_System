
export type Role = 'STAFF' | 'HOD' | 'ADMIN';

export type Screen = 
  | 'LOGIN' 
  | 'DASHBOARD' 
  | 'ATTENDANCE_ENTRY' 
  | 'CIE_ENTRY' 
  | 'REPORTS' 
  | 'STUDENT_MANAGEMENT' 
  | 'STAFF_ALLOCATION' 
  | 'CONTROLS';

export interface User {
  id: string;
  name: string;
  role: Role;
  branch: string;
  department: string;
}

export interface Student {
  id: string;
  rollNo: string;
  name: string;
  semester: number;
  section: string;
  attendanceStatus?: 'P' | 'A';
  cieMarks?: number;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  isLab: boolean;
}

export interface Allocation {
  staffId: string;
  staffName: string;
  subjectCode: string;
  subjectName: string;
  semester: number;
  section: string;
  batch?: string;
}
