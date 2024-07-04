import { UUID } from "mongodb";
import { Employee } from "../core/Employee";
export declare class EmployeeService {
    private employeeRepository;
    constructor();
    getAll(): Promise<Employee[]>;
    createEmployee(employee: Employee): Promise<void>;
    updateEmployee(id: UUID, employee: Employee): Promise<any>;
}
