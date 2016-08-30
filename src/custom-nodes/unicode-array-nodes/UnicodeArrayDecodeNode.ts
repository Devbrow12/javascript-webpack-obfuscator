import 'format-unicorn';

import { INode } from "../../interfaces/nodes/INode";
import { IOptions } from "../../interfaces/IOptions";

import { TNodeWithBlockStatement } from "../../types/TNodeWithBlockStatement";

import { AppendState } from "../../enums/AppendState";

import { NO_CUSTOM_NODES_PRESET } from "../../preset-options/NoCustomNodesPreset";

import { AtobTemplate } from "../../templates/custom-nodes/AtobTemplate";
import { SelfDefendingTemplate } from "../../templates/custom-nodes/unicode-array-nodes/unicode-array-decode-node/SelfDefendingTemplate";
import { UnicodeArrayDecodeTemplate } from "../../templates/custom-nodes/unicode-array-nodes/unicode-array-decode-node/UnicodeArrayDecodeTemplate";

import { AbstractCustomNode } from '../AbstractCustomNode';
import { JavaScriptObfuscator } from '../../JavaScriptObfuscator';
import { NodeUtils } from "../../NodeUtils";
import { UnicodeArray } from "../../UnicodeArray";

export class UnicodeArrayDecodeNode extends AbstractCustomNode {
    /**
     * @type {AppendState}
     */
    protected appendState: AppendState = AppendState.AfterObfuscation;

    /**
     * @type {UnicodeArray}
     */
    private unicodeArray: UnicodeArray;

    /**
     * @type {string}
     */
    private unicodeArrayName: string;

    /**
     * @param unicodeArrayName
     * @param unicodeArray
     * @param options
     */
    constructor (
        unicodeArrayName: string,
        unicodeArray: UnicodeArray,
        options: IOptions
    ) {
        super(options);

        this.unicodeArrayName = unicodeArrayName;
        this.unicodeArray = unicodeArray;
    }

    /**
     * @param blockScopeNode
     */
    public appendNode (blockScopeNode: TNodeWithBlockStatement): void {
        if (!this.unicodeArray.getLength()) {
            return;
        }

        NodeUtils.insertNodeAtIndex(blockScopeNode.body, this.getNode(), 1);
    }

    /**
     * @returns {INode}
     */
    public getNode (): INode {
        return super.getNode();
    }

    /**
     * @returns {INode}
     */
    protected getNodeStructure (): INode {
        const forLoopFunctionName: string = 'forLoopFunc';

        let code: string;

        if (this.options.selfDefending) {
            code = SelfDefendingTemplate().formatUnicorn({
                forLoopFunctionName,
                unicodeArrayName: this.unicodeArrayName
            });
        } else {
            code = `${forLoopFunctionName}();`;
        }

        return NodeUtils.convertCodeToStructure(
            JavaScriptObfuscator.obfuscate(
                UnicodeArrayDecodeTemplate().formatUnicorn({
                    atobPolyfill: AtobTemplate(),
                    code,
                    forLoopFunctionName,
                    unicodeArrayName: this.unicodeArrayName
                }),
                NO_CUSTOM_NODES_PRESET
            ).getObfuscatedCode()
        );
    }
}
