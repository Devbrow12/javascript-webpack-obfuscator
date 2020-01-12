import { inject, injectable, } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as estraverse from 'estraverse';
import * as ESTree from 'estree';

import { TStringArrayStorage } from '../../types/storages/TStringArrayStorage';

import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStringArrayStorageAnalyzer } from '../../interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer';
import { IStringArrayStorageItemData } from '../../interfaces/storages/string-array-storage/IStringArrayStorageItem';

import { NodeGuards } from '../../node/NodeGuards';
import { NodeMetadata } from '../../node/NodeMetadata';

/**
 * Adds values of literal nodes to the string array storage
 */
@injectable()
export class StringArrayStorageAnalyzer implements IStringArrayStorageAnalyzer {
    /**
     * @type {number}
     */
    private static readonly minimumLengthForStringArray: number = 3;

    /**
     * @type {IOptions}
     */
    private readonly options: IOptions;

    /**
     * @type {randomGenerator}
     */
    private readonly randomGenerator: IRandomGenerator;

    /**
     * @type {TStringArrayStorage}
     */
    private readonly stringArrayStorage: TStringArrayStorage;

    /**
     * @type {Map<ESTree.Literal, IStringArrayStorageItemData>}
     */
    private readonly stringArrayStorageData: Map<ESTree.Literal, IStringArrayStorageItemData> = new Map();

    /**
     * @param {TStringArrayStorage} stringArrayStorage
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     */
    constructor (
        @inject(ServiceIdentifiers.TStringArrayStorage) stringArrayStorage: TStringArrayStorage,
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions,
    ) {
        this.stringArrayStorage = stringArrayStorage;
        this.randomGenerator = randomGenerator;
        this.options = options;
    }

    /**
     * @param {Program} astTree
     */
    public analyze (astTree: ESTree.Program): void {
        estraverse.traverse(astTree, {
            enter: (node: ESTree.Node): estraverse.VisitorOption | void => {
                if (NodeMetadata.isIgnoredNode(node)) {
                    return estraverse.VisitorOption.Skip;
                }

                if (!NodeGuards.isLiteralNode(node)) {
                    return;
                }

                this.analyzeLiteralNode(node);
            }
        });
    }

    /**
     * @param {Literal} literalNode
     * @returns {IStringArrayStorageItemData | undefined}
     */
    public getItemDataForLiteralNode (literalNode: ESTree.Literal): IStringArrayStorageItemData | undefined {
        return this.stringArrayStorageData.get(literalNode);
    }

    /**
     * @param {Literal} literalNode
     */
    private analyzeLiteralNode (literalNode: ESTree.Literal): void {
        if (typeof literalNode.value !== 'string') {
            return;
        }

        if (!this.shouldAddValueToStringArray(literalNode.value)) {
            return;
        }

        this.stringArrayStorageData.set(
            literalNode,
            this.stringArrayStorage.getOrThrow(literalNode.value)
        );
    }

    /**
     * @param {string} value
     * @returns {boolean}
     */
    private shouldAddValueToStringArray (value: string): boolean {
        return value.length >= StringArrayStorageAnalyzer.minimumLengthForStringArray
            && this.randomGenerator.getMathRandom() <= this.options.stringArrayThreshold;
    }
}
