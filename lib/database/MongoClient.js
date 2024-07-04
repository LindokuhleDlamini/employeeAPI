"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClientFactory = void 0;
const DocumentSchema_1 = require("../core/DocumentSchema");
const mongodb_1 = require("mongodb");
const DataProvider_1 = require("./DataProvider");
class MongoClientFactory {
    constructor() {
    }
    static connectMongoServer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (MongoClientFactory.instance) {
                return;
            }
            let password = encodeURIComponent('test1');
            let username = encodeURIComponent('test');
            const options = {
                serverSelectionTimeoutMS: 6000,
                connectTimeoutMS: 6000
            };
            const connectionString = `mongodb+srv://${username}:${password}@bpldata.uwunt26.mongodb.net/`;
            const client = yield mongodb_1.MongoClient.connect(connectionString, options);
            MongoClientFactory.closeConnection = client.close.bind(client);
            MongoClientFactory.instance = client.db();
            //MongoClientFactory.documentModelsRegistry = await MongoClientFactory.initializeDocumentSchemaModels();
            //console.log({documentModelsRegistry: MongoClientFactory.documentModelsRegistry});
        });
    }
    static ensureConnected() {
        if (!MongoClientFactory.instance) {
            throw {
                type: 'NoDatabaseConnectionError',
                message: 'Invalid attempt to get a instance before connection is established'
            };
        }
    }
    static registerDocumentSchema(documentSchemaDefinition, collections) {
        let collection = MongoClientFactory.instance.collection(documentSchemaDefinition.tableName);
        let dataProvider = new DataProvider_1.default(MongoClientFactory.instance, collection);
        collections[documentSchemaDefinition.name] = dataProvider;
        console.log({ documentModelsRegistry: collections.documentModelsRegistry });
        return collections;
    }
    static initializeDocumentSchemaModels() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ensureConnected();
            let collections = {};
            DocumentSchema_1.AllDocumentSchemaDefinitionTypes.forEach(function (documentSchemaDefinition) {
                collections = MongoClientFactory.registerDocumentSchema(documentSchemaDefinition, collections);
            });
            return collections;
            //MongoClientFactory.documentModelsRegistry = collections;
        });
    }
    static getDocumentModel(schemaName) {
        return; //MongoClientFactory.documentModelsRegistry[schemaName]
    }
}
exports.MongoClientFactory = MongoClientFactory;
MongoClientFactory.documentModelsRegistry = {
    employee: () => {
        MongoClientFactory.ensureConnected();
        return new DataProvider_1.default(MongoClientFactory.instance, MongoClientFactory.instance.collection('employees'));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uZ29DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2UvTW9uZ29DbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBFO0FBRTFFLHFDQUEwQztBQUMxQyxpREFBMEM7QUFFMUMsTUFBYSxrQkFBa0I7SUFXM0I7SUFDQSxDQUFDO0lBRUQsTUFBTSxDQUFPLGtCQUFrQjs7WUFDM0IsSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsT0FBTztZQUNYLENBQUM7WUFFRCxJQUFJLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxJQUFJLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUcxQyxNQUFNLE9BQU8sR0FBRztnQkFDWix3QkFBd0IsRUFBRSxJQUFJO2dCQUM5QixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3pCLENBQUM7WUFDRixNQUFNLGdCQUFnQixHQUFHLGlCQUFpQixRQUFRLElBQUksUUFBUSwrQkFBK0IsQ0FBQztZQUU5RixNQUFNLE1BQU0sR0FBRyxNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLHdHQUF3RztZQUN4RyxtRkFBbUY7UUFDdkYsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFFLGVBQWU7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU07Z0JBQ0osSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsT0FBTyxFQUFFLG9FQUFvRTthQUM5RSxDQUFDO1FBQ0osQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNLENBQUMsc0JBQXNCLENBQUMsd0JBQXNELEVBQUUsV0FBZ0I7UUFDMUcsSUFBSSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsUUFBUyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RixJQUFJLFlBQVksR0FBRyxJQUFJLHNCQUFZLENBQUMsa0JBQWtCLENBQUMsUUFBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLHNCQUFzQixFQUFFLFdBQVcsQ0FBQyxzQkFBc0IsRUFBQyxDQUFDLENBQUM7UUFDMUUsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVPLE1BQU0sQ0FBTyw4QkFBOEI7O1lBQy9DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsaURBQWdDLENBQUMsT0FBTyxDQUFDLFVBQVMsd0JBQXNEO2dCQUNwRyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbkcsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLFdBQVcsQ0FBQztZQUNuQiwwREFBMEQ7UUFFOUQsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQWtCO1FBRXRDLE9BQU0sQ0FBQyx1REFBdUQ7SUFDbEUsQ0FBQzs7QUFuRUwsZ0RBb0VDO0FBaEVtQix5Q0FBc0IsR0FBRztJQUNyQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ1gsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsT0FBTyxJQUFJLHNCQUFZLENBQUMsa0JBQWtCLENBQUMsUUFBUyxFQUFFLGtCQUFrQixDQUFDLFFBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUMvRyxDQUFDO0NBQ0osQ0FBQSJ9