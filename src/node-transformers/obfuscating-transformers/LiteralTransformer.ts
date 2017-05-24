import { injectable, inject } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { TLiteralObfuscatingReplacerFactory } from '../../types/container/node-transformers/TLiteralObfuscatingReplacerFactory';

import { IOptions } from '../../interfaces/options/IOptions';
import { IVisitor } from '../../interfaces/IVisitor';

import { LiteralObfuscatingReplacers } from '../../enums/container/node-transformers/LiteralObfuscatingReplacers';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { Node } from '../../node/Node';

@injectable()
export class LiteralTransformer extends AbstractNodeTransformer {
    /**
     * @type {TLiteralObfuscatingReplacerFactory}
     */
    private readonly literalObfuscatingReplacerFactory: TLiteralObfuscatingReplacerFactory;

    /**
     * @param literalObfuscatingReplacerFactory
     * @param options
     */
    constructor (
        @inject(ServiceIdentifiers.Factory__IObfuscatingReplacer)
            literalObfuscatingReplacerFactory: TLiteralObfuscatingReplacerFactory,
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        super(options);

        this.literalObfuscatingReplacerFactory = literalObfuscatingReplacerFactory;
    }

    /**
     * @return {IVisitor}
     */
    public getVisitor (): IVisitor {
        return {
            enter: (node: ESTree.Node, parentNode: ESTree.Node) => {
                if (Node.isLiteralNode(node) && !node.obfuscatedNode) {
                    return this.transformNode(node, parentNode);
                }
            }
        };
    }

    /**
     * @param literalNode
     * @param parentNode
     * @returns {ESTree.Node}
     */
    public transformNode (literalNode: ESTree.Literal, parentNode: ESTree.Node): ESTree.Node {
        if (Node.isPropertyNode(parentNode) && parentNode.key === literalNode) {
            return literalNode;
        }

        switch (typeof literalNode.value) {
            case 'boolean':
                return this.literalObfuscatingReplacerFactory(LiteralObfuscatingReplacers.BooleanLiteralObfuscatingReplacer)
                    .replace(<boolean>literalNode.value);

            case 'number':
                return this.literalObfuscatingReplacerFactory(LiteralObfuscatingReplacers.NumberLiteralObfuscatingReplacer)
                    .replace(<number>literalNode.value);

            case 'string':
                return this.literalObfuscatingReplacerFactory(LiteralObfuscatingReplacers.StringLiteralObfuscatingReplacer)
                    .replace(<string>literalNode.value);

            default:
                return literalNode;
        }
    }
}
