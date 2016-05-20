import * as estraverse from 'estraverse';

import { INode } from './interfaces/INode';
import { INodeObfuscator } from './interfaces/INodeObfuscator';
import { INodesGroup } from './interfaces/INodesGroup';
import { ITreeNode } from './interfaces/nodes/ITreeNode';

import { AppendState } from './enums/AppendState';

import { CatchClauseObfuscator } from "./node-obfuscators/CatchClauseObfuscator";
import { FunctionDeclarationObfuscator } from './node-obfuscators/FunctionDeclarationObfuscator';
import { FunctionObfuscator } from './node-obfuscators/FunctionObfuscator';
import { LiteralObfuscator } from './node-obfuscators/LiteralObfuscator';
import { MemberExpressionObfuscator } from './node-obfuscators/MemberExpressionObfuscator';
import { MethodDefinitionObfuscator } from './node-obfuscators/MethodDefinitionObfuscator';
import { ObjectExpressionObfuscator } from './node-obfuscators/ObjectExpressionObfuscator';
import { UnicodeArrayNode } from './nodes/UnicodeArrayNode';
import { UnicodeArrayNodesGroup } from './node-groups/UnicodeArrayNodesGroup';
import { Utils } from './Utils';
import { VariableDeclarationObfuscator } from './node-obfuscators/VariableDeclarationObfuscator';

export class Obfuscator {
    /**
     * @type {Map<string, Node>}
     */
    private nodes: Map <string, INode> = new Map <string, INode> ();

    /**
     * @type {Map<string, Function[]>}
     */
    private nodeObfuscators: Map <string, Function[]> = new Map <string, Function[]> ([
        ['ClassDeclaration', [FunctionDeclarationObfuscator]],
        ['CatchClause', [CatchClauseObfuscator]],
        ['FunctionDeclaration', [
            FunctionDeclarationObfuscator,
            FunctionObfuscator
        ]],
        ['ArrowFunctionExpression', [FunctionObfuscator]],
        ['FunctionExpression', [FunctionObfuscator]],
        ['MethodDefinition', [MethodDefinitionObfuscator]],
        ['VariableDeclaration', [VariableDeclarationObfuscator]],
        ['ObjectExpression', [ObjectExpressionObfuscator]],
        ['MemberExpression', [MemberExpressionObfuscator]],
        ['Literal', [LiteralObfuscator]]
    ]);

    /**
     * @type any
     */
    private options: any;

    /**
     * @param options
     */
    constructor (options: any = {}) {
        this.options = options;
    }

    /**
     * @param node
     */
    public obfuscateNode (node: ITreeNode): void {
        if (this.options['rotateUnicodeArray']) {
            this.setNodesGroup(new UnicodeArrayNodesGroup(node));
        } else {
            this.setNode(
                'unicodeArrayNode',
                new UnicodeArrayNode(node, Utils.getRandomVariableName(UnicodeArrayNode.UNICODE_ARRAY_RANDOM_LENGTH))
            );
        }

        this.beforeObfuscation(node);

        estraverse.replace(node, {
            enter: (node: ITreeNode, parent: ITreeNode): any => this.nodeControllerFirstPass(node, parent)
        });

        estraverse.replace(node, {
            leave: (node: ITreeNode, parent: ITreeNode): any => this.nodeControllerSecondPass(node, parent)
        });

        this.afterObfuscation(node);
    }

    /**
     * @param nodeName
     * @param node
     */
    public setNode (nodeName: string, node: INode): void {
        this.nodes.set(nodeName, node);
    }

    /**
     * @param nodesGroup
     */
    public setNodesGroup (nodesGroup: INodesGroup): void {
        let nodes: Map <string, INode> = nodesGroup.getNodes();

        nodes.forEach((node: INode, key: string) => {
            this.nodes.set(key, node);
        });
    }

    /**
     * @param node
     */
    private afterObfuscation (node: ITreeNode): void {
        this.nodes.forEach((node: INode) => {
            if (node.getAppendState() === AppendState.AfterObfuscation) {
                node.appendNode();
            }
        });
    }

    /**
     * @param node
     */
    private beforeObfuscation (node: ITreeNode): void {
        this.nodes.forEach((node: INode) => {
            if (node.getAppendState() === AppendState.BeforeObfuscation) {
                node.appendNode();
            }
        });
    };

    /**
     * @param node
     * @param parent
     */
    private nodeControllerFirstPass (node: ITreeNode, parent: ITreeNode): void {
        Object.defineProperty(node, 'parentNode', {
            configurable: true,
            enumerable: true,
            value: parent || node,
            writable: true
        });
    }

    /**
     * @param node
     * @param parent
     */
    private nodeControllerSecondPass (node: ITreeNode, parent: ITreeNode): void {
        switch (node.type) {
            default:
                this.initializeNodeObfuscators(node, parent);
        }
    }

    /**
     * @param node
     * @param parent
     */
    private initializeNodeObfuscators (node: ITreeNode, parent: ITreeNode): void {
        if (!this.nodeObfuscators.has(node.type)) {
            return;
        }

        this.nodeObfuscators.get(node.type).forEach((obfuscator: Function) => {
            new (<INodeObfuscator> obfuscator(this.nodes)).obfuscateNode(node, parent);
        });
    }
}