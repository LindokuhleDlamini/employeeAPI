import { UUID } from "mongodb";
import { MongoClientFactory } from "../MongoClient";
const documentModelsRegistry = MongoClientFactory.documentModelsRegistry as any;

export class BaseRepository<T> {
    protected documentModel: any;
    //protected mongoClientFactory: MongoClientFactory

    constructor(schemaName: string) {
        //this.mongoClientFactory = new MongoClientFactory();
        console.log({documentModelsRegistry: documentModelsRegistry, name: 'Base', schemaName});
        this.documentModel = documentModelsRegistry[schemaName];
        console.log({documentModelsRegistry: documentModelsRegistry, name: 'Base', schemaName, documentModel: this.documentModel});
    }

    public save(obj: T): Promise<void> {
        return this.documentModel().collection.insertOne(obj);
    }

    public findMany(keyValues: {[key: string]: any} | {}): Promise<Array<T>> {
        return this.documentModel().collection.find(keyValues).toArray();
    }

    public findOne(keyValues: {[key: string]: any}) {
        return this.documentModel().collection.findOne(keyValues);
    }

    public updateOne(id: UUID, entity: any) {
        delete entity._id;
        return this.documentModel().collection.updateOne({'_id': new UUID(id)}, {"$set": entity});
    }

    public updateMany(id: UUID, entity: any) {
        delete entity._id;
        return this.documentModel().collection.updateMany({'_id': new UUID(id)}, {"$set": entity});
    }

    public deleteOne(keyValues: {[key: string]: any}) {
        return this.documentModel().collection.deleteOne(keyValues);
    }

    public deleteMany(keyValues: {[key: string]: any}) {
        return this.documentModel().collection.deleteMany(keyValues);   
    }

}