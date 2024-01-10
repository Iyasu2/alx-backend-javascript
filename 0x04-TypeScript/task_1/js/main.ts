interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class TeacherImpl implements Teacher {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public fullTimeEmployee: boolean,
    public yearsOfExperience?: number,
    public location: string,
  ) {}
}

const teacher: Teacher = new TeacherImpl(
  'John',
  'Doe',
  true,
  5,
  'New York',
);

teacher.fullTimeEmployee = false; // Allowed
teacher.yearsOfExperience = 10; // Allowed
teacher.location = 'London'; // Allowed

teacher.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property

teacher.contract = true; // Allowed
teacher.salary = 5000; // Allowed

console.log(teacher);
