import { UUID } from "mongodb";
import { Employee } from "../core/Employee";
import { EmployeeRepository } from "../database/repositories/EmployeeRepository";


export class EmployeeService {
    private employeeRepository: EmployeeRepository

    constructor() {
        this.employeeRepository = new EmployeeRepository();
    }

    async getAll() {
        return this.employeeRepository.findMany({});
    }

    async createEmployee(employee: Employee) {
        console.log({employee});
        let newUser = new Employee(employee.firstNames,employee.lastName, employee.fullName, employee.salutation, employee.employeeNumber, employee.grossSalary, employee.colour, employee.gender) //, user.lastName, user.username, user.address, user.password, user.hashedPassword, '');
        return this.employeeRepository.save(newUser);
    }

    async updateEmployee(id: UUID, employee: Employee) {
        return this.employeeRepository.updateOne(id, employee);
    }
}

