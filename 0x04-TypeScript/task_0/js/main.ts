interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

function createStudent(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    }
}

const student1 = createStudent({ firstname: 'Sam', lastname: "Dirk", age: 32, location: "FS"});
const student2 = createStudent({ firstname: 'Doe', lastname: "Druk", age: 30, location: "GP"});

const studentsList = [student1, student2];

const table = document.createElement("table");

studentsList.forEach(student => {
    const tr = document.createElement("tr");

    Object.values(student).forEach(value => {
        const td = document.createElement("td");
        td.textContent = String(value);
        tr.appendChild(td);
    });

    table.appendChild(tr);
});

document.body.appendChild(table);

