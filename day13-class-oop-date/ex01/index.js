console.log("================= Begin of assignment 01 - Quản lý Nhân sự =================\n");

// 1. Class Employee
class Employee {
    constructor(id, name, baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    calculateSalary() {
        return this.baseSalary;
    }
}

// 2. Class Developer kế thừa Employee
class Developer extends Employee {
    constructor(id, name, baseSalary, overtimeHours) {
        super(id, name, baseSalary);
        this.overtimeHours = overtimeHours;
    }

    calculateSalary() {
        return this.baseSalary + this.overtimeHours * 200000;
    }
}

// 3. Class Manager kế thừa Employee
class Manager extends Employee {
    constructor(id, name, baseSalary, bonus) {
        super(id, name, baseSalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}

// 4. Hàm tính tổng lương công ty
function calculateTotalSalary(employeeList) {
    return employeeList.reduce((total, employee) => total + employee.calculateSalary(), 0);
}

// 5. Hiển thị kết quả
console.log("--- Employee ---");
const employee = new Employee(1, "Nguyễn Văn A", 10000000);
console.log(employee.calculateSalary());

console.log("\n--- Developer ---");
const developer = new Developer(2, "Trần Thị B", 12000000, 10);
console.log(developer.calculateSalary());

console.log("\n--- Manager ---");
const manager = new Manager(3, "Lê Văn C", 20000000, 5000000);
console.log(manager.calculateSalary());

console.log("\n--- Tổng lương công ty ---");
const employees = [
    new Developer(1, "Nguyễn Văn A", 12000000, 10),
    new Developer(2, "Trần Thị B", 15000000, 5),
    new Manager(3, "Lê Văn C", 20000000, 5000000),
    new Manager(4, "Phạm Thị D", 18000000, 3000000),
];
const totalSalary = calculateTotalSalary(employees);
console.log(totalSalary);

console.log("\n================= End of assignment 01 =================");
