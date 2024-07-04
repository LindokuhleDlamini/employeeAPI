"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const Employee_1 = require("../core/Employee");
const EmployeeRepository_1 = require("../database/repositories/EmployeeRepository");
class EmployeeService {
    constructor() {
        this.employeeRepository = new EmployeeRepository_1.EmployeeRepository();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.findMany({});
        });
    }
    createEmployee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ employee });
            let newUser = new Employee_1.Employee(employee.firstNames, employee.lastName, employee.fullName, employee.salutation, employee.employeeNumber, employee.grossSalary, employee.colour, employee.gender); //, user.lastName, user.username, user.address, user.password, user.hashedPassword, '');
            return this.employeeRepository.save(newUser);
        });
    }
    updateEmployee(id, employee) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.updateOne(id, employee);
        });
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1wbG95ZWVTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL0VtcGxveWVlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBNEM7QUFDNUMsb0ZBQWlGO0FBR2pGLE1BQWEsZUFBZTtJQUd4QjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVLLE1BQU07O1lBQ1IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxRQUFrQjs7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsd0ZBQXdGO1lBQ25SLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsRUFBUSxFQUFFLFFBQWtCOztZQUM3QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtDQUNKO0FBcEJELDBDQW9CQyJ9