"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const mongodb_1 = require("mongodb");
const MongoClient_1 = require("../MongoClient");
const documentModelsRegistry = MongoClient_1.MongoClientFactory.documentModelsRegistry;
class BaseRepository {
    //protected mongoClientFactory: MongoClientFactory
    constructor(schemaName) {
        //this.mongoClientFactory = new MongoClientFactory();
        console.log({ documentModelsRegistry: documentModelsRegistry, name: 'Base', schemaName });
        this.documentModel = documentModelsRegistry[schemaName];
        console.log({ documentModelsRegistry: documentModelsRegistry, name: 'Base', schemaName, documentModel: this.documentModel });
    }
    save(obj) {
        return this.documentModel().collection.insertOne(obj);
    }
    findMany(keyValues) {
        return this.documentModel().collection.find(keyValues).toArray();
    }
    findOne(keyValues) {
        return this.documentModel().collection.findOne(keyValues);
    }
    updateOne(id, entity) {
        delete entity._id;
        return this.documentModel().collection.updateOne({ '_id': new mongodb_1.UUID(id) }, { "$set": entity });
    }
    updateMany(id, entity) {
        delete entity._id;
        return this.documentModel().collection.updateMany({ '_id': new mongodb_1.UUID(id) }, { "$set": entity });
    }
    deleteOne(keyValues) {
        return this.documentModel().collection.deleteOne(keyValues);
    }
    deleteMany(keyValues) {
        return this.documentModel().collection.deleteMany(keyValues);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzL0Jhc2VSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUErQjtBQUMvQixnREFBb0Q7QUFDcEQsTUFBTSxzQkFBc0IsR0FBRyxnQ0FBa0IsQ0FBQyxzQkFBNkIsQ0FBQztBQUVoRixNQUFhLGNBQWM7SUFFdkIsa0RBQWtEO0lBRWxELFlBQVksVUFBa0I7UUFDMUIscURBQXFEO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO0lBQy9ILENBQUM7SUFFTSxJQUFJLENBQUMsR0FBTTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxTQUFvQztRQUNoRCxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFTSxPQUFPLENBQUMsU0FBK0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sU0FBUyxDQUFDLEVBQVEsRUFBRSxNQUFXO1FBQ2xDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksY0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRU0sVUFBVSxDQUFDLEVBQVEsRUFBRSxNQUFXO1FBQ25DLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksY0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRU0sU0FBUyxDQUFDLFNBQStCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLFVBQVUsQ0FBQyxTQUErQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FFSjtBQXpDRCx3Q0F5Q0MifQ==