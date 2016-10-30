'use strict';

if (!(<any>global)._babelPolyfill) {
    require('babel-polyfill');
}

const JavaScriptObfuscator: any = require("../../index");

let obfuscatedCode: string = JavaScriptObfuscator.obfuscate(
    `
    var start = new Date();
    var log = console.log;
    console.log = function () {};

    (function(){
        var result = 1,
            term1 = 0,
            term2 = 1,
            i = 1;
        while(i < 10)
        {
            var test = 10;
            result = term1 + term2;
            console.log(result);
            term1 = term2;
            term2 = result;
            i++;
        }

        console.log(test);
        
        var test = function (test) {
            console.log(test);
            
            if (true) {
                var test = 5
            }
            
            return test;
        }
        
        console.log(test(1));
        
        function test2 (abc) {
            function test1 () {
              console.log('inside', abc.item);
            }
            
            console.log('тест', abc);
            
            var abc = {};
            
            return abc.item = 15, test1();
        };
        
        var regexptest = /version\\/(\\d+)/i;
        console.log(regexptest);
        
        test2(22);
        console.log(105.4);
        console.log(true, false);
        
        var sA = 'shorthand1';
        var sB = 'shorthand2';
        
        console.log({sA, sB});
        
        try {
        } catch (error) {
            console.log(error);
        } 
    })();
    
    console.log = log;
    console.log(new Date() - start);
    `,
    {
        disableConsoleOutput: false,
        unicodeArrayEncoding: 'rc4'
    }
).getObfuscatedCode();

console.log(eval(obfuscatedCode));
