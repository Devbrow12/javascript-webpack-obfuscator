'use strict';

import { NO_ADDITIONAL_NODES_PRESET } from '../../src/options/presets/NoCustomNodes';

(function () {
    const JavaScriptObfuscator: any = require('../../index');

    let obfuscatedCode: string = JavaScriptObfuscator.obfuscate(
        `
            const foo = 'foo';
            const bar = 'bar';
            
            function test1 () {
                const baz = 'baz';
                
                function test2() {
                    const bark = 'bark';
                    
                    console.log(bark);
                }
                
                console.log(baz);
                
                test2();
            }
            
            console.log(foo, bar);
            
            test1();
        `,
        {
            ...NO_ADDITIONAL_NODES_PRESET,
            compact: false,
            rotateStringArray: true,
            shuffleStringArray: true,
            stringArray: true,
            stringArrayIndexShift: true,
            stringArrayThreshold: 1,
            stringArrayWrappersCount: 2,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersType: 'function'
        }
    ).getObfuscatedCode();

    console.log(obfuscatedCode);
    console.log(eval(obfuscatedCode));
})();
