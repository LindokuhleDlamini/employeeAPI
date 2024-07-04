import { UUID } from "mongodb";
export declare class BaseRepository<T> {
    protected documentModel: any;
    constructor(schemaName: string);
    save(obj: T): Promise<void>;
    findMany(keyValues: {
        [key: string]: any;
    } | {}): Promise<Array<T>>;
    findOne(keyValues: {
        [key: string]: any;
    }): any;
    updateOne(id: UUID, entity: any): any;
    updateMany(id: UUID, entity: any): any;
    deleteOne(keyValues: {
        [key: string]: any;
    }): any;
    deleteMany(keyValues: {
        [key: string]: any;
    }): any;
}
