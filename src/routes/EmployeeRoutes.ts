import * as express from 'express';
export const router = express.Router();

import { getAll, addEmployees } from '../controllers/EmployeeController';


router.get('/employee/all', getAll);
router.post('/employee/add', addEmployees);
//export default router;

module.exports = {router};

