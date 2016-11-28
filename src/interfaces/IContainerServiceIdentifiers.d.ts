import { interfaces } from 'inversify';

export interface IContainerServiceIdentifiers {
    'Factory<INodeTransformer[]>': interfaces.ServiceIdentifier<any>;
    INodeTransformersFactory: interfaces.ServiceIdentifier<any>;
    IObfuscationEventEmitter: interfaces.ServiceIdentifier<any>;
    IObfuscator: interfaces.ServiceIdentifier<any>;
    IOptions: interfaces.ServiceIdentifier<any>;
    IStackTraceAnalyzer: interfaces.ServiceIdentifier<any>;
    'IStorage<ICustomNode>': interfaces.ServiceIdentifier<any>;
    [key: string]: interfaces.ServiceIdentifier<any>;
}
