"use strict";

declare let module: any;

import { Obfuscator } from './src/Obfuscator';

let escodegen = require('escodegen'),
    esprima = require('esprima');

export class JavaScriptObfuscator {
    /**
     * @type any
     */
    private static escodegenParams: any = {
        format: {
            compact: true
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

        return JavaScriptObfuscator.generateCode(astTree, options);
    }

    /**
     * @param astTree
     * @param options
     */
    private static generateCode (astTree: any, options: any): string {
        let escodegenParams: any = Object.assign({}, JavaScriptObfuscator.escodegenParams);

        if (options.compact !== undefined) {
            escodegenParams.format.compact = options.compact;
        }

        return escodegen.generate(astTree, escodegenParams);
    }
}

module.exports = JavaScriptObfuscator;