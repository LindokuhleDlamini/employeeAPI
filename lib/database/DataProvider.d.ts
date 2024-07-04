import { Db, Collection } from "mongodb";
export default class DataProvider {
    protected readonly db: Db;
    protected readonly collection: Collection;
    protected result?: any | undefined;
    constructor(db: Db, collection: Collection);
}
