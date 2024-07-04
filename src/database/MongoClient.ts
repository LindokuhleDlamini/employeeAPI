import { AllDocumentSchemaDefinitionTypes } from "../core/DocumentSchema";
import { DocumentSchemaDefinitionType } from "../core/DocumentSchemaDefinitionType";
import { MongoClient, Db } from "mongodb";
import DataProvider from "./DataProvider";

export class MongoClientFactory {
    private static instance: Db | null ;
    private static closeConnection: null | ((force?: boolean) => Promise<void>);

    static readonly documentModelsRegistry = {
        employee: () => {
            MongoClientFactory.ensureConnected();
            return new DataProvider(MongoClientFactory.instance!, MongoClientFactory.instance!.collection('employees'))
        }
    }

    constructor() {
    }

    static async connectMongoServer() {
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

        const client = await MongoClient.connect(connectionString, options);
        MongoClientFactory.closeConnection = client.close.bind(client);
        MongoClientFactory.instance = client.db();
        //MongoClientFactory.documentModelsRegistry = await MongoClientFactory.initializeDocumentSchemaModels();
        //console.log({documentModelsRegistry: MongoClientFactory.documentModelsRegistry});
    }

    private static  ensureConnected() {
        if (!MongoClientFactory.instance) {
          throw {
            type: 'NoDatabaseConnectionError',
            message: 'Invalid attempt to get a instance before connection is established'
          };
        }
    }

    private static registerDocumentSchema(documentSchemaDefinition: DocumentSchemaDefinitionType, collections: any) {
        let collection = MongoClientFactory.instance!.collection(documentSchemaDefinition.tableName);
        let dataProvider = new DataProvider(MongoClientFactory.instance!, collection);
        collections[documentSchemaDefinition.name] = dataProvider;
        console.log({documentModelsRegistry: collections.documentModelsRegistry});
        return collections;
    }

    private static async initializeDocumentSchemaModels() {
        this.ensureConnected();
        let collections = {};
        AllDocumentSchemaDefinitionTypes.forEach(function(documentSchemaDefinition: DocumentSchemaDefinitionType) {
            collections = MongoClientFactory.registerDocumentSchema(documentSchemaDefinition, collections);
        });
        return collections;
        //MongoClientFactory.documentModelsRegistry = collections;

    }

    static getDocumentModel(schemaName: string): any {

        return //MongoClientFactory.documentModelsRegistry[schemaName]
    }
}