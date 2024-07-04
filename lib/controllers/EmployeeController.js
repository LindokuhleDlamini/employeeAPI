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
exports.getAll = getAll;
exports.addEmployees = addEmployees;
const EmployeeService_1 = require("../services/EmployeeService");
const employeeService = new EmployeeService_1.EmployeeService();
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let employees = yield employeeService.getAll();
        return res.status(200).json(employees);
    });
}
function addEmployees(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { employees } = req.body;
        let updates = [];
        for (let i = 0; i < employees.length; i++) {
            let employee = employees[i];
            if (employee._id) {
                console.log({ employee });
                updates.push(yield employeeService.updateEmployee(employee._id, employee));
            }
            else {
                yield employeeService.createEmployee(employee);
            }
        }
        console.log({ updates });
        return res.status(200).json({ msg: 'Successful' });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1wbG95ZWVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL0VtcGxveWVlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUtBLHdCQUdDO0FBRUQsb0NBbUJDO0FBNUJELGlFQUE4RDtBQUU5RCxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUU5QyxTQUFzQixNQUFNLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxJQUFTOztRQUN0RCxJQUFJLFNBQVMsR0FBRyxNQUFNLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FBQTtBQUVELFNBQXNCLFlBQVksQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLElBQVM7O1FBQzVELE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO1FBQzlCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1QixJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLGVBQWUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRS9FLENBQUM7aUJBQU0sQ0FBQztnQkFDSixNQUFNLGVBQWUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsQ0FBQztRQUVMLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtRQUV0QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUFBIn0=