export type UserRole =
  | 'Super Admin'
  | 'Principal'
  | 'Teacher'
  | 'Student'
  | 'Parent'
  | 'Accountant'
  | 'Librarian'
  | 'Security Guard';

export interface Student {
  id: string; // ID Card or registration number
  name: string;
  email: string;
  class: string;
  section: string;
  rollNo: number;
  gender: 'Male' | 'Female' | 'Other';
  dob: string;
  admissionDate: string;
  parentName: string;
  parentContact: string;
  status: 'Active' | 'Inactive' | 'Suspended' | 'Alumni';
  gpa?: number;
  faceRegistered?: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  classTeacherOf?: string; // Class name (e.g. "Grade 10-A")
  phone: string;
  joiningDate: string;
  salary: number;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
  method: 'Manual' | 'QR Code' | 'OCR Student ID' | 'Face Recognition';
  time: string;
}

export interface Exam {
  id: string;
  title: string;
  class: string;
  subject: string;
  date: string;
  time: string;
  type: 'Quiz' | 'Midterm' | 'Final' | 'Practical';
  maxMarks: number;
}

export interface ExamMark {
  id: string;
  examId: string;
  studentId: string;
  studentName: string;
  marksObtained: number;
  grade: string;
  gpa: number;
  feedback?: string;
}

export interface FeeReceipt {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  amount: number;
  category: 'Tuition' | 'Admission' | 'Library' | 'Transport' | 'Hostel' | 'Exam';
  dueDate: string;
  paymentDate?: string;
  paymentMethod?: 'Cash' | 'Bank Transfer' | 'Online Credit';
  status: 'Paid' | 'Unpaid' | 'Overdue';
  fineAmount?: number;
}

export interface TimetableEntry {
  id: string;
  className: string;
  subject: string;
  teacherName: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  startTime: string; // "09:00"
  endTime: string; // "10:00"
  room: string;
}

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  copiesTotal: number;
  copiesAvailable: number;
  issues: Array<{
    studentId: string;
    studentName: string;
    issueDate: string;
    dueDate: string;
    returnDate?: string;
    fine?: number;
  }>;
}

export interface TransportRoute {
  id: string;
  routeName: string;
  driverName: string;
  driverPhone: string;
  vehicleNo: string;
  stops: string[];
  studentsAllocated: string[]; // array of student IDs
}

export interface HostelRoom {
  id: string;
  roomNo: string;
  block: string;
  type: 'Single' | 'Double' | 'Quad';
  capacity: number;
  allocatedStudents: Array<{
    studentId: string;
    studentName: string;
    bedNo: number;
  }>;
  fee: number;
}

export interface BroadcastMessage {
  id: string;
  sender: string;
  role: string;
  target: 'All' | 'Teachers' | 'Students' | 'Parents';
  title: string;
  content: string;
  date: string;
  type: 'Alert' | 'Announcement' | 'Event';
}
