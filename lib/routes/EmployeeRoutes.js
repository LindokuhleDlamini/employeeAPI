"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
exports.router = express.Router();
const EmployeeController_1 = require("../controllers/EmployeeController");
exports.router.get('/employee/all', EmployeeController_1.getAll);
exports.router.post('/employee/add', EmployeeController_1.addEmployees);
//export default router;
module.exports = { router: exports.router };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1wbG95ZWVSb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL0VtcGxveWVlUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUN0QixRQUFBLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFdkMsMEVBQXlFO0FBR3pFLGNBQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDJCQUFNLENBQUMsQ0FBQztBQUNwQyxjQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxpQ0FBWSxDQUFDLENBQUM7QUFDM0Msd0JBQXdCO0FBRXhCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBQyxNQUFNLEVBQU4sY0FBTSxFQUFDLENBQUMifQ==