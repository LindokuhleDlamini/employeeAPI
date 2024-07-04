import { Db, Collection } from "mongodb";


export default class DataProvider {
    protected result?: any | undefined = undefined;

    constructor(protected readonly db: Db, protected readonly collection: Collection) {

    }
}