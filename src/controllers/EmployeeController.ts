import { EmployeeService } from "../services/EmployeeService";

const employeeService = new EmployeeService();

export async function getAll(req: any, res: any, next: any) {
    let employees = await employeeService.getAll();
    return res.status(200).json(employees);
}

export async function addEmployees(req: any, res: any, next: any) {
    const { employees } = req.body
    let updates = [];

    for (let i = 0; i< employees.length; i++) {
        let employee = employees[i];
        
        if (employee._id) {
            updates.push(await employeeService.updateEmployee(employee._id, employee));
            
        } else {
            await employeeService.createEmployee(employee);
        }

    }
    console.log({updates})

    return res.status(200).json({msg: 'Successful'});
}




