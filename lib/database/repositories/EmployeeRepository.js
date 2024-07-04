"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepository = void 0;
const Employee_1 = require("../../core/Employee");
const BaseRepository_1 = require("./BaseRepository");
class EmployeeRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(Employee_1.EmployeeDocumentSchemaDefinition.name);
    }
}
exports.EmployeeRepository = EmployeeRepository;
exports.default = new EmployeeRepository();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1wbG95ZWVSZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL3JlcG9zaXRvcmllcy9FbXBsb3llZVJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQWlGO0FBQ2pGLHFEQUFrRDtBQUdsRCxNQUFhLGtCQUFtQixTQUFRLCtCQUF3QjtJQUM1RDtRQUNJLEtBQUssQ0FBQywyQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBRUo7QUFMRCxnREFLQztBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQyJ9