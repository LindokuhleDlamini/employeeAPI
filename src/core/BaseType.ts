import { UUID } from "mongodb";

export class BaseType {
    _id: UUID

    constructor(_id: UUID) {
        this._id = _id;
    }
}