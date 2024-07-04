import { Employee, EmployeeDocumentSchemaDefinition } from "../../core/Employee";
import { BaseRepository } from "./BaseRepository";


export class EmployeeRepository extends BaseRepository<Employee> {
    constructor() {
        super(EmployeeDocumentSchemaDefinition.name);
    }

}

export default new EmployeeRepository();

