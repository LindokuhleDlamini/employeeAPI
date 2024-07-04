import { BaseType } from './BaseType';
import { DocumentSchemaDefinitionType } from './DocumentSchemaDefinitionType';
export declare class Employee extends BaseType {
    firstNames: string;
    lastName: string;
    fullName: string;
    salutation: string;
    employeeNumber: number;
    grossSalary: number;
    colour: string;
    gender: string;
    constructor(firstNames: string, lastName: string, fullName: string, salutation: string, employeeNumber: number, grossSalary: number, colour: string, gender: string);
}
export declare const EmployeeDocumentSchemaDefinition: DocumentSchemaDefinitionType;
