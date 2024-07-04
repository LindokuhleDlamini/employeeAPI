import DataProvider from "./DataProvider";
export declare class MongoClientFactory {
    private static instance;
    private static closeConnection;
    static readonly documentModelsRegistry: {
        employee: () => DataProvider;
    };
    constructor();
    static connectMongoServer(): Promise<void>;
    private static ensureConnected;
    private static registerDocumentSchema;
    private static initializeDocumentSchemaModels;
    static getDocumentModel(schemaName: string): any;
}
