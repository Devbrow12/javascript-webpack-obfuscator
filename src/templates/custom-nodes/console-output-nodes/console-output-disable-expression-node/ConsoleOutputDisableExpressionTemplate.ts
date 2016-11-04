/**
 * @returns {string}
 */
export function ConsoleOutputDisableExpressionTemplate (): string {
    return `
        var {consoleLogDisableFunctionName} = {singleNodeCallControllerFunctionName}(this, function () { 
            var _ = '(\u0004\u0006\u0003\u0005[]' + '["filter"]["\u0007tructor"]' + '("return this")()' + '.' + '\u0003;\u0006\u0002\u0005\u0004};' + '_\u0003.log\u0001.in' + 'fo\u0001.' + 'war' + 'n\u0001.er' + 'r' + 'or\u0001})();' + '\u0001\u0005_\u0002;' + '_\u0003\u0002function' + '\u0003\u0007ole\u0004\u0002 ()' + '{\u0005 = \u0006var ' + '_\u0007cons', 
                Y, 
                $;
            
            for (Y in $ = "\u0007\u0006\u0005\u0004\u0003\u0002\u0001") {
              var arr = _.split($[Y]);
              _ = arr.join(arr.pop());
            }
            
            []["filter"]["constructor"](_)();
        });
        
        {consoleLogDisableFunctionName}();
    `;
}
