"use strict";

declare let module: any;

import { Obfuscator } from './src/Obfuscator';
import { UnicodeArrayNodesGroup } from './src/node-groups/UnicodeArrayNodesGroup';
import { Utils } from './src/Utils';

let escodegen = require('escodegen'),
    esprima = require('esprima'),
    RawSource: any = require('webpack-core/lib/RawSource');

export class JavaScriptObfuscator {
    /**
     * @type any
     */
    private static escodegenParams: any = {
        format: {
            //compact: true
        },
        verbatim: 'x-verbatim-property'
    };

    /**
     * @param sourceCode
     * @param options
     */
    public static obfuscate (sourceCode: string, options: any): string {
        let astTree: any = esprima.parse(sourceCode),
            obfuscator: Obfuscator = new Obfuscator(options);

        obfuscator.obfuscateNode(astTree);

        return JavaScriptObfuscator.generateCode(astTree);
    }

    /**
     * @param astTree
     */
    private static generateCode (astTree: any): string {
        return new RawSource(escodegen.generate(astTree, JavaScriptObfuscator.escodegenParams));
    }
}

module.exports = JavaScriptObfuscator;