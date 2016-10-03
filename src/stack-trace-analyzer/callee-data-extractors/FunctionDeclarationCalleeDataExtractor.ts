import * as estraverse from 'estraverse';
import * as ESTree from 'estree';

import { TNodeWithBlockStatement } from '../../types/TNodeWithBlockStatement';

import { ICalleeData } from '../../interfaces/stack-trace-analyzer/ICalleeData';
import { ICalleeDataExtractor } from '../../interfaces/stack-trace-analyzer/ICalleeDataExtractor';

import { Nodes } from '../../Nodes';
import { NodeUtils } from '../../NodeUtils';

export class FunctionDeclarationCalleeDataExtractor implements ICalleeDataExtractor {
    /**
     * @type {ESTree.Node[]}
     */
    private blockScopeBody: ESTree.Node[];

    /**
     * @type {ESTree.Identifier}
     */
    private callee: ESTree.Identifier;

    /**
     * @param blockScopeBody
     * @param callee
     */
    constructor (blockScopeBody: ESTree.Node[], callee: ESTree.Identifier) {
        this.blockScopeBody = blockScopeBody;
        this.callee = callee;
    }

    /**
     * @returns {ICalleeData|null}
     */
    public extract (): ICalleeData|null {
        let calleeBlockStatement: TNodeWithBlockStatement|null = null;

        if (Nodes.isIdentifierNode(this.callee)) {
            calleeBlockStatement = this.getCalleeBlockStatement(
                NodeUtils.getBlockScopeOfNode(this.blockScopeBody[0]),
                this.callee.name
            );
        }

        if (!calleeBlockStatement) {
            return null;
        }

        return {
            callee: calleeBlockStatement,
            name: this.callee.name
        };
    }

    /**
     * @param node
     * @param name
     * @returns {TNodeWithBlockStatement|null}
     */
    private getCalleeBlockStatement (node: ESTree.Node, name: string): TNodeWithBlockStatement|null {
        let calleeBlockStatement: TNodeWithBlockStatement|null = null;

        estraverse.traverse(node, {
            enter: (node: ESTree.Node): any => {
                if (Nodes.isFunctionDeclarationNode(node) && node.id.name === name) {
                    calleeBlockStatement = node.body;

                    return estraverse.VisitorOption.Break;
                }
            }
        });

        return calleeBlockStatement;
    }
}
