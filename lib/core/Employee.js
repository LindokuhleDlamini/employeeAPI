"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDocumentSchemaDefinition = exports.Employee = void 0;
const mongodb_1 = require("mongodb");
const BaseType_1 = require("./BaseType");
class Employee extends BaseType_1.BaseType {
    constructor(firstNames, lastName, fullName, salutation, employeeNumber, grossSalary, colour, gender) {
        let _id = new mongodb_1.UUID();
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
exports.Employee = Employee;
exports.EmployeeDocumentSchemaDefinition = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1wbG95ZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9FbXBsb3llZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBK0I7QUFDL0IseUNBQXNDO0FBR3RDLE1BQWEsUUFBUyxTQUFRLG1CQUFRO0lBVWxDLFlBQVksVUFBa0IsRUFBRSxRQUFlLEVBQUUsUUFBZ0IsRUFBRyxVQUFrQixFQUFFLGNBQXNCLEVBQUUsV0FBbUIsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUMvSixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQUksRUFBRSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQXRCRCw0QkFzQkM7QUFFWSxRQUFBLGdDQUFnQyxHQUFpQztJQUMxRSxJQUFJLEVBQUUsVUFBVTtJQUNoQixTQUFTLEVBQUUsV0FBVztJQUN0QixnQkFBZ0IsRUFBRTtRQUNkLFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtTQUNqQjtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtTQUNqQjtRQUNELGNBQWMsRUFBRTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO0tBQ0o7Q0FDSixDQUFBIn0=