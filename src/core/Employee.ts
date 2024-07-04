import { UUID } from 'mongodb';
import { BaseType } from './BaseType';
import { DocumentSchemaDefinitionType } from './DocumentSchemaDefinitionType';

export class Employee extends BaseType {
    firstNames: string;
    lastName: string;
    fullName: string;
    salutation: string;
    employeeNumber: number;
    grossSalary: number;
    colour: string;
    gender: string;

    constructor(firstNames: string, lastName:string, fullName: string,  salutation: string, employeeNumber: number, grossSalary: number, colour: string, gender: string){
        let _id = new UUID();
        super(_id);
        this.firstNames = firstNames;
        this.lastName = lastName;
        this.fullName = fullName;
        this.salutation = salutation;
        this.employeeNumber = employeeNumber;
        this.grossSalary = grossSalary;
        this.colour = colour;
        this.gender = gender;
    }
}

export const EmployeeDocumentSchemaDefinition: DocumentSchemaDefinitionType = {
    name: "employee",
    tableName: "employees",
    schemaDefinition: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        salutation: {
            type: String,
            required: true
        },
        colour: {
            type: String,
            required: true
        },
        employeeNumber: {
            type: Number,
            required: true
        },
        grossSalary: {
            type: Number,
            required: true
        }
    }
}
