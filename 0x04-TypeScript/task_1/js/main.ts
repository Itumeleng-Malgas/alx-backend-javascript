interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow adding any attribute dynamically
}

class TeacherClass implements Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalAttributes: Partial<Teacher> = {}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        Object.assign(this, additionalAttributes);
    }
}

const teacher = new TeacherClass("John", "Doe", true, "New York", { contract: true });
console.log(teacher);

////////////////////////////////////////////////////////////////////////////////////////////////////

interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
    firstName: "Alice",
    lastName: "Smith",
    fullTimeEmployee: true,
    location: "Los Angeles",
    numberOfReports: 5
};

console.log(director);

/////////////////////////////////////////////////////////////////////////////////////////////////////

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstLetter}. ${fullLastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

///////////////////////////////////////////////////////////////////////////////////////////////////////

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
