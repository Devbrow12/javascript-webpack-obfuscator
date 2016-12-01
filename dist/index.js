/*
Copyright (C) 2016 Timofey Kachalov <sanex3339@yandex.ru>

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

require("source-map-support").install();

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("inversify");

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.ServiceIdentifiers = {
    'Factory<ICalleeDataExtractor>': Symbol('Factory<ICalleeDataExtractor>'),
    'Factory<IControlFlowReplacer>': Symbol('Factory<IControlFlowReplacer>'),
    'Factory<INodeTransformer[]>': Symbol('Factory<INodeTransformer[]>'),
    'Factory<IObfuscationResult>': Symbol('Factory<IObfuscationResult>'),
    'Factory<IReplacer>': Symbol('Factory<IReplacer>'),
    ICalleeDataExtractor: Symbol('ICalleeDataExtractor'),
    IControlFlowReplacer: Symbol('IControlFlowReplacer'),
    IJavaScriptObfuscator: Symbol('IJavaScriptObfuscator'),
    INodeTransformer: Symbol('INodeTransformer'),
    IObfuscationEventEmitter: Symbol('IObfuscationEventEmitter'),
    IObfuscationResult: Symbol('IObfuscationResult'),
    IObfuscator: Symbol('IObfuscator'),
    IOptions: Symbol('IOptions'),
    IReplacer: Symbol('IReplacer'),
    ISourceMapCorrector: Symbol('ISourceMapCorrector'),
    IStackTraceAnalyzer: Symbol('IStackTraceAnalyzer'),
    'IStorage<ICustomNode>': Symbol('IStorage<ICustomNode>')
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chance_1 = __webpack_require__(107);
var JSFuck_1 = __webpack_require__(22);
var isEqual = __webpack_require__(112);

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'arrayContains',
        value: function arrayContains(array, searchElement) {
            return array.indexOf(searchElement) >= 0;
        }
    }, {
        key: 'arrayRotate',
        value: function arrayRotate(array, times) {
            if (!array.length) {
                throw new ReferenceError('Cannot rotate empty array.');
            }
            if (times <= 0) {
                return array;
            }
            var newArray = array,
                temp = void 0;
            while (times--) {
                temp = newArray.pop();
                newArray.unshift(temp);
            }
            return newArray;
        }
    }, {
        key: 'btoa',
        value: function btoa(string) {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var output = '';
            string = encodeURIComponent(string).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode(parseInt('' + Utils.hexadecimalPrefix + p1));
            });
            for (var block, charCode, idx = 0, map = chars; string.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                charCode = string.charCodeAt(idx += 3 / 4);
                if (charCode > 0xFF) {
                    throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                }
                block = block << 8 | charCode;
            }
            return output;
        }
    }, {
        key: 'decToHex',
        value: function decToHex(dec) {
            var radix = 16;
            return Number(dec).toString(radix);
        }
    }, {
        key: 'extractDomainFromUrl',
        value: function extractDomainFromUrl(url) {
            var domain = void 0;
            if (url.indexOf('://') > -1 || url.indexOf('//') === 0) {
                domain = url.split('/')[2];
            } else {
                domain = url.split('/')[0];
            }
            domain = domain.split(':')[0];
            return domain;
        }
    }, {
        key: 'getRandomFloat',
        value: function getRandomFloat(min, max) {
            return Utils.randomGenerator.floating({
                min: min,
                max: max,
                fixed: 7
            });
        }
    }, {
        key: 'getRandomGenerator',
        value: function getRandomGenerator() {
            var randomGenerator = Utils.randomGenerator;
            if (!randomGenerator) {
                throw new Error('`randomGenerator` static property is undefined');
            }
            return Utils.randomGenerator;
        }
    }, {
        key: 'getRandomInteger',
        value: function getRandomInteger(min, max) {
            return Utils.randomGenerator.integer({
                min: min,
                max: max
            });
        }
    }, {
        key: 'getRandomVariableName',
        value: function getRandomVariableName() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

            var rangeMinInteger = 10000,
                rangeMaxInteger = 99999999;
            return '_' + Utils.hexadecimalPrefix + Utils.decToHex(Utils.getRandomInteger(rangeMinInteger, rangeMaxInteger)).substr(0, length);
        }
    }, {
        key: 'hideString',
        value: function hideString(str, length) {
            var escapeRegExp = function escapeRegExp(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            };
            var randomMerge = function randomMerge(s1, s2) {
                var i1 = -1,
                    i2 = -1,
                    result = '';
                while (i1 < s1.length || i2 < s2.length) {
                    if (Utils.getRandomFloat(0, 1) < 0.5 && i2 < s2.length) {
                        result += s2.charAt(++i2);
                    } else {
                        result += s1.charAt(++i1);
                    }
                }
                return result;
            };
            var randomString = Utils.randomGenerator.string({
                length: length,
                pool: Utils.randomGeneratorPool
            });
            var randomStringDiff = randomString.replace(new RegExp('[' + escapeRegExp(str) + ']', 'g'), '');
            var randomStringDiffArray = randomStringDiff.split('');
            Utils.randomGenerator.shuffle(randomStringDiffArray);
            randomStringDiff = randomStringDiffArray.join('');
            return [randomMerge(str, randomStringDiff), randomStringDiff];
        }
    }, {
        key: 'isInteger',
        value: function isInteger(number) {
            return number % 1 === 0;
        }
    }, {
        key: 'mapGetFirstKeyOf',
        value: function mapGetFirstKeyOf(map, value) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        key = _step$value[0],
                        storageValue = _step$value[1];

                    if (isEqual(value, storageValue)) {
                        return key;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        }
    }, {
        key: 'rc4',
        value: function rc4(string, key) {
            var s = [],
                j = 0,
                x = void 0,
                result = '';
            for (var i = 0; i < 256; i++) {
                s[i] = i;
            }
            for (i = 0; i < 256; i++) {
                j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
            }
            i = 0;
            j = 0;
            for (var y = 0; y < string.length; y++) {
                i = (i + 1) % 256;
                j = (j + s[i]) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
                result += String.fromCharCode(string.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
            }
            return result;
        }
    }, {
        key: 'setRandomGeneratorSeed',
        value: function setRandomGeneratorSeed(randomGeneratorSeed) {
            Utils.randomGenerator = new chance_1.Chance(randomGeneratorSeed);
        }
    }, {
        key: 'strEnumify',
        value: function strEnumify(obj) {
            return obj;
        }
    }, {
        key: 'stringToJSFuck',
        value: function stringToJSFuck(string) {
            return Array.from(string).map(function (character) {
                return JSFuck_1.JSFuck[character] || character;
            }).join(' + ');
        }
    }, {
        key: 'stringToUnicodeEscapeSequence',
        value: function stringToUnicodeEscapeSequence(string) {
            var radix = 16;
            var prefix = void 0,
                regexp = new RegExp('[\x00-\x7F]'),
                template = void 0;
            return '' + string.replace(/[\s\S]/g, function (escape) {
                if (regexp.test(escape)) {
                    prefix = '\\x';
                    template = '0'.repeat(2);
                } else {
                    prefix = '\\u';
                    template = '0'.repeat(4);
                }
                return '' + prefix + (template + escape.charCodeAt(0).toString(radix)).slice(-template.length);
            });
        }
    }]);

    return Utils;
}();

Utils.hexadecimalPrefix = '0x';
Utils.randomGeneratorPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
Utils.randomGeneratorPoolWithNumbers = Utils.randomGeneratorPool + '0123456789';
Utils.randomGenerator = new chance_1.Chance();
exports.Utils = Utils;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(2);
exports.ObfuscationEvents = Utils_1.Utils.strEnumify({
    AfterObfuscation: 'afterObfuscation',
    BeforeObfuscation: 'beforeObfuscation'
});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NodeType_1 = __webpack_require__(9);

var Node = function () {
    function Node() {
        _classCallCheck(this, Node);
    }

    _createClass(Node, null, [{
        key: 'getProgramNode',
        value: function getProgramNode(bodyNode) {
            return {
                'type': NodeType_1.NodeType.Program,
                'body': bodyNode,
                'sourceType': 'script',
                'obfuscated': false
            };
        }
    }, {
        key: 'isArrowFunctionExpressionNode',
        value: function isArrowFunctionExpressionNode(node) {
            return node.type === NodeType_1.NodeType.ArrowFunctionExpression;
        }
    }, {
        key: 'isBlockStatementNode',
        value: function isBlockStatementNode(node) {
            return node.type === NodeType_1.NodeType.BlockStatement;
        }
    }, {
        key: 'isBreakStatementNode',
        value: function isBreakStatementNode(node) {
            return node.type === NodeType_1.NodeType.BreakStatement;
        }
    }, {
        key: 'isCallExpressionNode',
        value: function isCallExpressionNode(node) {
            return node.type === NodeType_1.NodeType.CallExpression;
        }
    }, {
        key: 'isContinueStatementNode',
        value: function isContinueStatementNode(node) {
            return node.type === NodeType_1.NodeType.ContinueStatement;
        }
    }, {
        key: 'isExpressionStatementNode',
        value: function isExpressionStatementNode(node) {
            return node.type === NodeType_1.NodeType.ExpressionStatement;
        }
    }, {
        key: 'isFunctionDeclarationNode',
        value: function isFunctionDeclarationNode(node) {
            return node.type === NodeType_1.NodeType.FunctionDeclaration;
        }
    }, {
        key: 'isFunctionExpressionNode',
        value: function isFunctionExpressionNode(node) {
            return node.type === NodeType_1.NodeType.FunctionExpression;
        }
    }, {
        key: 'isIdentifierNode',
        value: function isIdentifierNode(node) {
            return node.type === NodeType_1.NodeType.Identifier;
        }
    }, {
        key: 'isLabelIdentifierNode',
        value: function isLabelIdentifierNode(node, parentNode) {
            var parentNodeIsLabeledStatementNode = Node.isLabeledStatementNode(parentNode) && parentNode.label === node;
            var parentNodeIsContinueStatementNode = Node.isContinueStatementNode(parentNode) && parentNode.label === node;
            var parentNodeIsBreakStatementNode = Node.isBreakStatementNode(parentNode) && parentNode.label === node;
            return parentNodeIsLabeledStatementNode || parentNodeIsContinueStatementNode || parentNodeIsBreakStatementNode;
        }
    }, {
        key: 'isLabeledStatementNode',
        value: function isLabeledStatementNode(node) {
            return node.type === NodeType_1.NodeType.LabeledStatement;
        }
    }, {
        key: 'isLiteralNode',
        value: function isLiteralNode(node) {
            return node.type === NodeType_1.NodeType.Literal;
        }
    }, {
        key: 'isMemberExpressionNode',
        value: function isMemberExpressionNode(node) {
            return node.type === NodeType_1.NodeType.MemberExpression;
        }
    }, {
        key: 'isObjectExpressionNode',
        value: function isObjectExpressionNode(node) {
            return node.type === NodeType_1.NodeType.ObjectExpression;
        }
    }, {
        key: 'isProgramNode',
        value: function isProgramNode(node) {
            return node.type === NodeType_1.NodeType.Program;
        }
    }, {
        key: 'isPropertyNode',
        value: function isPropertyNode(node) {
            return node.type === NodeType_1.NodeType.Property;
        }
    }, {
        key: 'isReplaceableIdentifierNode',
        value: function isReplaceableIdentifierNode(node, parentNode) {
            if (!Node.isIdentifierNode(node)) {
                return false;
            }
            var parentNodeIsPropertyNode = Node.isPropertyNode(parentNode) && parentNode.key === node;
            var parentNodeIsMemberExpressionNode = Node.isMemberExpressionNode(parentNode) && parentNode.computed === false && parentNode.property === node;
            return !parentNodeIsPropertyNode && !parentNodeIsMemberExpressionNode && !Node.isLabelIdentifierNode(node, parentNode);
        }
    }, {
        key: 'isVariableDeclarationNode',
        value: function isVariableDeclarationNode(node) {
            return node.type === NodeType_1.NodeType.VariableDeclaration;
        }
    }, {
        key: 'isVariableDeclaratorNode',
        value: function isVariableDeclaratorNode(node) {
            return node.type === NodeType_1.NodeType.VariableDeclarator;
        }
    }, {
        key: 'isNodeHasBlockStatement',
        value: function isNodeHasBlockStatement(node) {
            return node.hasOwnProperty('body') && Array.isArray(node.body);
        }
    }]);

    return Node;
}();

exports.Node = Node;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils_1 = __webpack_require__(2);

var NodeAppender = function () {
    function NodeAppender() {
        _classCallCheck(this, NodeAppender);
    }

    _createClass(NodeAppender, null, [{
        key: 'appendNode',
        value: function appendNode(blockScopeNode, nodeBodyStatements) {
            if (!NodeAppender.validateBodyStatements(nodeBodyStatements)) {
                nodeBodyStatements = [];
            }
            nodeBodyStatements = NodeAppender.parentizeBodyStatementsBeforeAppend(blockScopeNode, nodeBodyStatements);
            blockScopeNode.body = [].concat(_toConsumableArray(blockScopeNode.body), _toConsumableArray(nodeBodyStatements));
        }
    }, {
        key: 'appendNodeToOptimalBlockScope',
        value: function appendNodeToOptimalBlockScope(blockScopeStackTraceData, blockScopeNode, nodeBodyStatements) {
            var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            var targetBlockScope = void 0;
            if (!blockScopeStackTraceData.length) {
                targetBlockScope = blockScopeNode;
            } else {
                targetBlockScope = NodeAppender.getOptimalBlockScope(blockScopeStackTraceData, index);
            }
            NodeAppender.prependNode(targetBlockScope, nodeBodyStatements);
        }
    }, {
        key: 'getOptimalBlockScope',
        value: function getOptimalBlockScope(blockScopeTraceData, index) {
            var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

            var firstCall = blockScopeTraceData[index];
            if (deep <= 0) {
                throw new Error('Invalid `deep` argument value. Value should be bigger then 0.');
            }
            if (deep > 1 && firstCall.stackTrace.length) {
                return NodeAppender.getOptimalBlockScope(firstCall.stackTrace, 0, --deep);
            } else {
                return firstCall.callee;
            }
        }
    }, {
        key: 'getRandomStackTraceIndex',
        value: function getRandomStackTraceIndex(stackTraceRootLength) {
            return Utils_1.Utils.getRandomInteger(0, Math.max(0, Math.round(stackTraceRootLength - 1)));
        }
    }, {
        key: 'insertNodeAtIndex',
        value: function insertNodeAtIndex(blockScopeNode, nodeBodyStatements, index) {
            if (!NodeAppender.validateBodyStatements(nodeBodyStatements)) {
                nodeBodyStatements = [];
            }
            nodeBodyStatements = NodeAppender.parentizeBodyStatementsBeforeAppend(blockScopeNode, nodeBodyStatements);
            blockScopeNode.body = [].concat(_toConsumableArray(blockScopeNode.body.slice(0, index)), _toConsumableArray(nodeBodyStatements), _toConsumableArray(blockScopeNode.body.slice(index)));
        }
    }, {
        key: 'prependNode',
        value: function prependNode(blockScopeNode, nodeBodyStatements) {
            if (!NodeAppender.validateBodyStatements(nodeBodyStatements)) {
                nodeBodyStatements = [];
            }
            nodeBodyStatements = NodeAppender.parentizeBodyStatementsBeforeAppend(blockScopeNode, nodeBodyStatements);
            blockScopeNode.body = [].concat(_toConsumableArray(nodeBodyStatements), _toConsumableArray(blockScopeNode.body));
        }
    }, {
        key: 'parentizeBodyStatementsBeforeAppend',
        value: function parentizeBodyStatementsBeforeAppend(blockScopeNode, nodeBodyStatements) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = nodeBodyStatements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var statement = _step.value;

                    statement.parentNode = blockScopeNode;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return nodeBodyStatements;
        }
    }, {
        key: 'validateBodyStatements',
        value: function validateBodyStatements(nodeBodyStatements) {
            return nodeBodyStatements.every(function (statementNode) {
                return !!statementNode && statementNode.hasOwnProperty('type');
            });
        }
    }]);

    return NodeAppender;
}();

exports.NodeAppender = NodeAppender;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("estraverse");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var NodeUtils_1 = __webpack_require__(10);
var AbstractCustomNode = function () {
    function AbstractCustomNode(options) {
        _classCallCheck(this, AbstractCustomNode);

        this.initialized = false;
        this.options = options;
    }

    _createClass(AbstractCustomNode, [{
        key: "checkInitialization",
        value: function checkInitialization() {
            if (!this.initialized) {
                throw new Error("Custom node should be initialized first by calling `initialize` method!");
            }
        }
    }, {
        key: "initialize",
        value: function initialize() {
            this.initialized = true;
        }
    }, {
        key: "getAppendEvent",
        value: function getAppendEvent() {
            return this.appendEvent;
        }
    }, {
        key: "getNode",
        value: function getNode() {
            this.checkInitialization();
            return this.getNodeStructure();
        }
    }, {
        key: "setAppendEvent",
        value: function setAppendEvent(appendEvent) {
            this.appendEvent = appendEvent;
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            return NodeUtils_1.NodeUtils.convertCodeToStructure(this.getCode());
        }
    }]);

    return AbstractCustomNode;
}();
AbstractCustomNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], AbstractCustomNode);
exports.AbstractCustomNode = AbstractCustomNode;

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("string-template");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(2);
exports.NodeType = Utils_1.Utils.strEnumify({
    ArrayExpression: 'ArrayExpression',
    ArrowFunctionExpression: 'ArrowFunctionExpression',
    AssignmentExpression: 'AssignmentExpression',
    BinaryExpression: 'BinaryExpression',
    BlockStatement: 'BlockStatement',
    BreakStatement: 'BreakStatement',
    CallExpression: 'CallExpression',
    CatchClause: 'CatchClause',
    ClassDeclaration: 'ClassDeclaration',
    ContinueStatement: 'ContinueStatement',
    ExpressionStatement: 'ExpressionStatement',
    FunctionDeclaration: 'FunctionDeclaration',
    FunctionExpression: 'FunctionExpression',
    Identifier: 'Identifier',
    IfStatement: 'IfStatement',
    LabeledStatement: 'LabeledStatement',
    Literal: 'Literal',
    LogicalExpression: 'LogicalExpression',
    MemberExpression: 'MemberExpression',
    MethodDefinition: 'MethodDefinition',
    ObjectExpression: 'ObjectExpression',
    Program: 'Program',
    Property: 'Property',
    ReturnStatement: 'ReturnStatement',
    TryStatement: 'TryStatement',
    UnaryExpression: 'UnaryExpression',
    UpdateExpression: 'UpdateExpression',
    VariableDeclaration: 'VariableDeclaration',
    VariableDeclarator: 'VariableDeclarator',
    WhileStatement: 'WhileStatement'
});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var escodegen = __webpack_require__(14);
var esprima = __webpack_require__(28);
var estraverse = __webpack_require__(6);
var NodeType_1 = __webpack_require__(9);
var Node_1 = __webpack_require__(4);
var Utils_1 = __webpack_require__(2);

var NodeUtils = function () {
    function NodeUtils() {
        _classCallCheck(this, NodeUtils);
    }

    _createClass(NodeUtils, null, [{
        key: 'addXVerbatimPropertyToLiterals',
        value: function addXVerbatimPropertyToLiterals(node) {
            NodeUtils.typedReplace(node, NodeType_1.NodeType.Literal, {
                leave: function leave(node) {
                    node['x-verbatim-property'] = {
                        content: node.raw,
                        precedence: escodegen.Precedence.Primary
                    };
                }
            });
        }
    }, {
        key: 'convertCodeToStructure',
        value: function convertCodeToStructure(code) {
            var structure = esprima.parse(code);
            NodeUtils.addXVerbatimPropertyToLiterals(structure);
            NodeUtils.parentize(structure);
            return structure.body;
        }
    }, {
        key: 'getBlockStatementNodeByIndex',
        value: function getBlockStatementNodeByIndex(node) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (Node_1.Node.isNodeHasBlockStatement(node)) {
                if (node.body[index] === undefined) {
                    throw new ReferenceError('Wrong index `' + index + '`. Block-statement body length is `' + node.body.length + '`');
                }
                return node.body[index];
            }
            throw new TypeError('The specified node have no a block-statement');
        }
    }, {
        key: 'getBlockScopeOfNode',
        value: function getBlockScopeOfNode(node) {
            var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var parentNode = node.parentNode;
            if (!parentNode) {
                throw new ReferenceError('`parentNode` property of given node is `undefined`');
            }
            if (Node_1.Node.isBlockStatementNode(parentNode)) {
                if (!parentNode.parentNode) {
                    throw new ReferenceError('`parentNode` property of `parentNode` of given node is `undefined`');
                }
                if (!Utils_1.Utils.arrayContains(NodeUtils.nodesWithBlockScope, parentNode.parentNode.type)) {
                    return NodeUtils.getBlockScopeOfNode(parentNode, depth);
                } else if (depth > 0) {
                    return NodeUtils.getBlockScopeOfNode(parentNode, --depth);
                }
                return parentNode;
            }
            if (Node_1.Node.isProgramNode(parentNode)) {
                return parentNode;
            }
            return NodeUtils.getBlockScopeOfNode(parentNode);
        }
    }, {
        key: 'getNodeBlockScopeDepth',
        value: function getNodeBlockScopeDepth(node) {
            var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var parentNode = node.parentNode;
            if (!parentNode) {
                throw new ReferenceError('`parentNode` property of given node is `undefined`');
            }
            if (Node_1.Node.isProgramNode(parentNode)) {
                return depth;
            }
            if (Node_1.Node.isBlockStatementNode(node) && Utils_1.Utils.arrayContains(NodeUtils.nodesWithBlockScope, parentNode.type)) {
                return NodeUtils.getNodeBlockScopeDepth(parentNode, ++depth);
            }
            return NodeUtils.getNodeBlockScopeDepth(parentNode, depth);
        }
    }, {
        key: 'parentize',
        value: function parentize(node) {
            var isRootNode = true;
            estraverse.replace(node, {
                enter: function enter(node, parentNode) {
                    var value = void 0;
                    if (isRootNode) {
                        if (node.type === NodeType_1.NodeType.Program) {
                            value = node;
                        } else {
                            value = Node_1.Node.getProgramNode([node]);
                            value.parentNode = value;
                        }
                        isRootNode = false;
                    } else {
                        value = parentNode || node;
                    }
                    node.parentNode = value;
                    node.obfuscated = false;
                }
            });
        }
    }, {
        key: 'typedReplace',
        value: function typedReplace(node, nodeType, visitor) {
            NodeUtils.typedTraverse(node, nodeType, visitor, 'replace');
        }
    }, {
        key: 'typedTraverse',
        value: function typedTraverse(node, nodeType, visitor) {
            var traverseType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'traverse';

            estraverse[traverseType](node, {
                enter: function enter(node, parentNode) {
                    if (node.type === nodeType && visitor.enter) {
                        visitor.enter(node, parentNode);
                    }
                },
                leave: function leave(node, parentNode) {
                    if (node.type === nodeType && visitor.leave) {
                        visitor.leave(node, parentNode);
                    }
                }
            });
        }
    }]);

    return NodeUtils;
}();

NodeUtils.nodesWithBlockScope = [NodeType_1.NodeType.ArrowFunctionExpression, NodeType_1.NodeType.FunctionDeclaration, NodeType_1.NodeType.FunctionExpression, NodeType_1.NodeType.MethodDefinition, NodeType_1.NodeType.Program];
exports.NodeUtils = NodeUtils;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var AbstractNodeTransformer = function AbstractNodeTransformer(customNodesStorage, options) {
    _classCallCheck(this, AbstractNodeTransformer);

    this.customNodesStorage = customNodesStorage;
    this.options = options;
};
AbstractNodeTransformer = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], AbstractNodeTransformer);
exports.AbstractNodeTransformer = AbstractNodeTransformer;

/***/ },
/* 12 */
/***/ function(module, exports) {

"use strict";
"use strict";

(function (NodeObfuscatorsReplacers) {
    NodeObfuscatorsReplacers[NodeObfuscatorsReplacers["BooleanReplacer"] = 0] = "BooleanReplacer";
    NodeObfuscatorsReplacers[NodeObfuscatorsReplacers["IdentifierReplacer"] = 1] = "IdentifierReplacer";
    NodeObfuscatorsReplacers[NodeObfuscatorsReplacers["NumberLiteralReplacer"] = 2] = "NumberLiteralReplacer";
    NodeObfuscatorsReplacers[NodeObfuscatorsReplacers["StringLiteralReplacer"] = 3] = "StringLiteralReplacer";
})(exports.NodeObfuscatorsReplacers || (exports.NodeObfuscatorsReplacers = {}));
var NodeObfuscatorsReplacers = exports.NodeObfuscatorsReplacers;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(114);
if (!global._babelPolyfill) {
    __webpack_require__(106);
}
var InversifyContainerFacade_1 = __webpack_require__(36);
var JavaScriptObfuscatorCLI_1 = __webpack_require__(35);
var ServiceIdentifiers_1 = __webpack_require__(1);

var JavaScriptObfuscator = function () {
    function JavaScriptObfuscator() {
        _classCallCheck(this, JavaScriptObfuscator);
    }

    _createClass(JavaScriptObfuscator, null, [{
        key: 'obfuscate',
        value: function obfuscate(sourceCode) {
            var inputOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var inversifyContainerFacade = new InversifyContainerFacade_1.InversifyContainerFacade(inputOptions);
            var javaScriptObfuscator = inversifyContainerFacade.get(ServiceIdentifiers_1.ServiceIdentifiers.IJavaScriptObfuscator);
            return javaScriptObfuscator.obfuscate(sourceCode);
        }
    }, {
        key: 'runCLI',
        value: function runCLI(argv) {
            new JavaScriptObfuscatorCLI_1.JavaScriptObfuscatorCLI(argv).run();
        }
    }]);

    return JavaScriptObfuscator;
}();

exports.JavaScriptObfuscator = JavaScriptObfuscator;

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("escodegen");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var ObfuscationEvents_1 = __webpack_require__(3);
var AbstractCustomNodesFactory = function () {
    function AbstractCustomNodesFactory(options) {
        _classCallCheck(this, AbstractCustomNodesFactory);

        this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        this.options = options;
    }

    _createClass(AbstractCustomNodesFactory, [{
        key: "syncCustomNodesWithNodesFactory",
        value: function syncCustomNodesWithNodesFactory(customNodes) {
            var _this = this;

            customNodes.forEach(function (customNode) {
                customNode.setAppendEvent(_this.appendEvent);
            });
            return customNodes;
        }
    }]);

    return AbstractCustomNodesFactory;
}();
AbstractCustomNodesFactory = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], AbstractCustomNodesFactory);
exports.AbstractCustomNodesFactory = AbstractCustomNodesFactory;

/***/ },
/* 16 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.SourceMapMode = {
    Inline: 'inline',
    Separate: 'separate'
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var AbstractReplacer = function AbstractReplacer(customNodesStorage, options) {
    _classCallCheck(this, AbstractReplacer);

    this.customNodesStorage = customNodesStorage;
    this.options = options;
};
AbstractReplacer = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], AbstractReplacer);
exports.AbstractReplacer = AbstractReplacer;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var SourceMapMode_1 = __webpack_require__(16);
exports.NO_CUSTOM_NODES_PRESET = Object.freeze({
    compact: true,
    controlFlowFlattening: false,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: false,
    domainLock: [],
    reservedNames: [],
    rotateStringArray: false,
    seed: 0,
    selfDefending: false,
    sourceMap: false,
    sourceMapBaseUrl: '',
    sourceMapFileName: '',
    sourceMapMode: SourceMapMode_1.SourceMapMode.Separate,
    stringArray: false,
    stringArrayEncoding: false,
    stringArrayThreshold: 0,
    unicodeEscapeSequence: true
});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var SingleNodeCallControllerTemplate_1 = __webpack_require__(89);
var NoCustomNodesPreset_1 = __webpack_require__(18);
var AbstractCustomNode_1 = __webpack_require__(7);
var JavaScriptObfuscator_1 = __webpack_require__(13);
var NodeAppender_1 = __webpack_require__(5);
var NodeCallsControllerFunctionNode = function (_AbstractCustomNode_) {
    _inherits(NodeCallsControllerFunctionNode, _AbstractCustomNode_);

    function NodeCallsControllerFunctionNode(options) {
        _classCallCheck(this, NodeCallsControllerFunctionNode);

        var _this = _possibleConstructorReturn(this, (NodeCallsControllerFunctionNode.__proto__ || Object.getPrototypeOf(NodeCallsControllerFunctionNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        return _this;
    }

    _createClass(NodeCallsControllerFunctionNode, [{
        key: "initialize",
        value: function initialize(callsControllerFunctionName, randomStackTraceIndex) {
            this.callsControllerFunctionName = callsControllerFunctionName;
            this.randomStackTraceIndex = randomStackTraceIndex;
            _get(NodeCallsControllerFunctionNode.prototype.__proto__ || Object.getPrototypeOf(NodeCallsControllerFunctionNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            var targetBlockScope = void 0;
            if (stackTraceData.length) {
                targetBlockScope = NodeAppender_1.NodeAppender.getOptimalBlockScope(stackTraceData, this.randomStackTraceIndex, 1);
            } else {
                targetBlockScope = blockScopeNode;
            }
            NodeAppender_1.NodeAppender.prependNode(targetBlockScope, this.getNode());
        }
    }, {
        key: "getCode",
        value: function getCode() {
            if (this.appendEvent === ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation) {
                return JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(format(SingleNodeCallControllerTemplate_1.SingleNodeCallControllerTemplate(), {
                    singleNodeCallControllerFunctionName: this.callsControllerFunctionName
                }), Object.assign({}, NoCustomNodesPreset_1.NO_CUSTOM_NODES_PRESET, {
                    seed: this.options.seed
                })).getObfuscatedCode();
            }
            return format(SingleNodeCallControllerTemplate_1.SingleNodeCallControllerTemplate(), {
                singleNodeCallControllerFunctionName: this.callsControllerFunctionName
            });
        }
    }]);

    return NodeCallsControllerFunctionNode;
}(AbstractCustomNode_1.AbstractCustomNode);
NodeCallsControllerFunctionNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], NodeCallsControllerFunctionNode);
exports.NodeCallsControllerFunctionNode = NodeCallsControllerFunctionNode;

/***/ },
/* 20 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.StringArrayEncoding = {
    base64: 'base64',
    rc4: 'rc4'
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var AbstractCalleeDataExtractor = function AbstractCalleeDataExtractor() {
    _classCallCheck(this, AbstractCalleeDataExtractor);
};
AbstractCalleeDataExtractor = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], AbstractCalleeDataExtractor);
exports.AbstractCalleeDataExtractor = AbstractCalleeDataExtractor;

/***/ },
/* 22 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.JSFuck = {
    False: '![]',
    True: '!![]',
    a: '(false+"")[1]',
    b: '([]["entries"]()+"")[2]',
    c: '([]["fill"]+"")[3]',
    d: '(undefined+"")[2]',
    e: '(true+"")[3]',
    f: '(false+"")[0]',
    g: '(false+[0]+String)[20]',
    h: '(+(101))["toString"](21)[1]',
    i: '([false]+undefined)[10]',
    j: '([]["entries"]()+"")[3]',
    k: '(+(20))["toString"](21)',
    l: '(false+"")[2]',
    m: '(Number+"")[11]',
    n: '(undefined+"")[1]',
    o: '(true+[]["fill"])[10]',
    p: '(+(211))["toString"](31)[1]',
    q: '(+(212))["toString"](31)[1]',
    r: '(true+"")[1]',
    s: '(false+"")[3]',
    t: '(true+"")[0]',
    u: '(undefined+"")[0]',
    v: '(+(31))["toString"](32)',
    w: '(+(32))["toString"](33)',
    x: '(+(101))["toString"](34)[1]',
    y: '(NaN+[Infinity])[10]',
    z: '(+(35))["toString"](36)',
    A: '(+[]+Array)[10]',
    B: '(+[]+Boolean)[10]',
    C: 'Function("return escape")()(("")["italics"]())[2]',
    D: 'Function("return escape")()([]["fill"])["slice"]("-1")',
    E: '(RegExp+"")[12]',
    F: '(+[]+Function)[10]',
    G: '(false+Function("return Date")()())[30]',
    H: '\'H\'',
    I: '(Infinity+"")[0]',
    J: '\'J\'',
    K: '\'K\'',
    L: '\'L\'',
    M: '(true+Function("return Date")()())[30]',
    N: '(NaN+"")[0]',
    O: '(NaN+Function("return{}")())[11]',
    P: '\'P\'',
    Q: '\'Q\'',
    R: '(+[]+RegExp)[10]',
    S: '(+[]+String)[10]',
    T: '(NaN+Function("return Date")()())[30]',
    U: '(NaN+Function("return{}")()["toString"]["call"]())[11]',
    V: '\'V\'',
    W: '\'W\'',
    X: '\'X\'',
    Y: '\'Y\'',
    Z: '\'Z\''
};

/***/ },
/* 23 */
/***/ function(module, exports) {

"use strict";
"use strict";

(function (CalleeDataExtractors) {
    CalleeDataExtractors[CalleeDataExtractors["FunctionDeclarationCalleeDataExtractor"] = 0] = "FunctionDeclarationCalleeDataExtractor";
    CalleeDataExtractors[CalleeDataExtractors["FunctionExpressionCalleeDataExtractor"] = 1] = "FunctionExpressionCalleeDataExtractor";
    CalleeDataExtractors[CalleeDataExtractors["ObjectExpressionCalleeDataExtractor"] = 2] = "ObjectExpressionCalleeDataExtractor";
})(exports.CalleeDataExtractors || (exports.CalleeDataExtractors = {}));
var CalleeDataExtractors = exports.CalleeDataExtractors;

/***/ },
/* 24 */
/***/ function(module, exports) {

"use strict";
"use strict";

(function (NodeTransformers) {
    NodeTransformers[NodeTransformers["FunctionControlFlowTransformer"] = 0] = "FunctionControlFlowTransformer";
    NodeTransformers[NodeTransformers["CatchClauseObfuscator"] = 1] = "CatchClauseObfuscator";
    NodeTransformers[NodeTransformers["FunctionDeclarationObfuscator"] = 2] = "FunctionDeclarationObfuscator";
    NodeTransformers[NodeTransformers["FunctionObfuscator"] = 3] = "FunctionObfuscator";
    NodeTransformers[NodeTransformers["LabeledStatementObfuscator"] = 4] = "LabeledStatementObfuscator";
    NodeTransformers[NodeTransformers["LiteralObfuscator"] = 5] = "LiteralObfuscator";
    NodeTransformers[NodeTransformers["MemberExpressionObfuscator"] = 6] = "MemberExpressionObfuscator";
    NodeTransformers[NodeTransformers["MethodDefinitionObfuscator"] = 7] = "MethodDefinitionObfuscator";
    NodeTransformers[NodeTransformers["ObjectExpressionObfuscator"] = 8] = "ObjectExpressionObfuscator";
    NodeTransformers[NodeTransformers["VariableDeclarationObfuscator"] = 9] = "VariableDeclarationObfuscator";
})(exports.NodeTransformers || (exports.NodeTransformers = {}));
var NodeTransformers = exports.NodeTransformers;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var escodegen = __webpack_require__(14);
var AbstractControlFlowReplacer_1 = __webpack_require__(62);
var BinaryExpressionFunctionNode_1 = __webpack_require__(43);
var ControlFlowStorageCallNode_1 = __webpack_require__(44);
var BinaryExpressionControlFlowReplacer_1 = function (_AbstractControlFlowR) {
    _inherits(BinaryExpressionControlFlowReplacer, _AbstractControlFlowR);

    function BinaryExpressionControlFlowReplacer(customNodesStorage, options) {
        _classCallCheck(this, BinaryExpressionControlFlowReplacer);

        return _possibleConstructorReturn(this, (BinaryExpressionControlFlowReplacer.__proto__ || Object.getPrototypeOf(BinaryExpressionControlFlowReplacer)).call(this, customNodesStorage, options));
    }

    _createClass(BinaryExpressionControlFlowReplacer, [{
        key: "replace",
        value: function replace(binaryExpressionNode, parentNode, controlFlowStorage, controlFlowStorageCustomNodeName) {
            var key = AbstractControlFlowReplacer_1.AbstractControlFlowReplacer.getStorageKey();
            var binaryExpressionFunctionNode = new BinaryExpressionFunctionNode_1.BinaryExpressionFunctionNode(this.options);
            binaryExpressionFunctionNode.initialize(binaryExpressionNode.operator);
            controlFlowStorage.set(key, binaryExpressionFunctionNode);
            var controlFlowStorageCallNode = new ControlFlowStorageCallNode_1.ControlFlowStorageCallNode(this.options);
            controlFlowStorageCallNode.initialize(controlFlowStorageCustomNodeName, key, BinaryExpressionControlFlowReplacer_1.getExpressionValue(binaryExpressionNode.left), BinaryExpressionControlFlowReplacer_1.getExpressionValue(binaryExpressionNode.right));
            return controlFlowStorageCallNode;
        }
    }], [{
        key: "getExpressionValue",
        value: function getExpressionValue(expressionNode) {
            return escodegen.generate(expressionNode, {
                sourceMapWithCode: true
            }).code;
        }
    }]);

    return BinaryExpressionControlFlowReplacer;
}(AbstractControlFlowReplacer_1.AbstractControlFlowReplacer);
var BinaryExpressionControlFlowReplacer = BinaryExpressionControlFlowReplacer_1;
BinaryExpressionControlFlowReplacer = BinaryExpressionControlFlowReplacer_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], BinaryExpressionControlFlowReplacer);
exports.BinaryExpressionControlFlowReplacer = BinaryExpressionControlFlowReplacer;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var SourceMapMode_1 = __webpack_require__(16);
exports.DEFAULT_PRESET = Object.freeze({
    compact: true,
    controlFlowFlattening: false,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: true,
    domainLock: [],
    reservedNames: [],
    rotateStringArray: true,
    seed: 0,
    selfDefending: true,
    sourceMap: false,
    sourceMapBaseUrl: '',
    sourceMapFileName: '',
    sourceMapMode: SourceMapMode_1.SourceMapMode.Separate,
    stringArray: true,
    stringArrayEncoding: false,
    stringArrayThreshold: 0.8,
    unicodeEscapeSequence: true
});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var Utils_1 = __webpack_require__(2);
var MapStorage = function () {
    function MapStorage() {
        _classCallCheck(this, MapStorage);

        this.storage = new Map();
    }

    _createClass(MapStorage, [{
        key: "get",
        value: function get(key) {
            var value = this.storage.get(key);
            if (!value) {
                throw new Error("No value found in map storage with key `" + key + "`");
            }
            return value;
        }
    }, {
        key: "getKeyOf",
        value: function getKeyOf(value) {
            return Utils_1.Utils.mapGetFirstKeyOf(this.storage, value);
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return Array.from(this.storage).length;
        }
    }, {
        key: "getStorage",
        value: function getStorage() {
            return this.storage;
        }
    }, {
        key: "initialize",
        value: function initialize() {}
    }, {
        key: "set",
        value: function set(key, value) {
            this.storage.set(key, value);
        }
    }]);

    return MapStorage;
}();
MapStorage = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], MapStorage);
exports.MapStorage = MapStorage;

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("esprima");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var esprima = __webpack_require__(28);
var escodegen = __webpack_require__(14);
var Utils_1 = __webpack_require__(2);
var JavaScriptObfuscatorInternal_1 = function () {
    function JavaScriptObfuscatorInternal(obfuscator, sourceMapCorrector, customNodesStorage, options) {
        _classCallCheck(this, JavaScriptObfuscatorInternal);

        this.obfuscator = obfuscator;
        this.sourceMapCorrector = sourceMapCorrector;
        this.customNodesStorage = customNodesStorage;
        this.options = options;
    }

    _createClass(JavaScriptObfuscatorInternal, [{
        key: "generateCode",
        value: function generateCode(sourceCode, astTree) {
            var escodegenParams = Object.assign({}, JavaScriptObfuscatorInternal_1.escodegenParams);
            if (this.options.sourceMap) {
                escodegenParams.sourceMap = 'sourceMap';
                escodegenParams.sourceContent = sourceCode;
            }
            escodegenParams.format = {
                compact: this.options.compact
            };
            var generatorOutput = escodegen.generate(astTree, escodegenParams);
            generatorOutput.map = generatorOutput.map ? generatorOutput.map.toString() : '';
            return generatorOutput;
        }
    }, {
        key: "getObfuscationResult",
        value: function getObfuscationResult(generatorOutput) {
            return this.sourceMapCorrector.correct(generatorOutput.code, generatorOutput.map);
        }
    }, {
        key: "obfuscate",
        value: function obfuscate(sourceCode) {
            if (this.options.seed !== 0) {
                Utils_1.Utils.setRandomGeneratorSeed(this.options.seed);
            }
            var astTree = esprima.parse(sourceCode, JavaScriptObfuscatorInternal_1.esprimaParams);
            var obfuscatedAstTree = this.obfuscator.obfuscateAstTree(astTree, this.customNodesStorage);
            var generatorOutput = this.generateCode(sourceCode, obfuscatedAstTree);
            return this.getObfuscationResult(generatorOutput);
        }
    }]);

    return JavaScriptObfuscatorInternal;
}();
var JavaScriptObfuscatorInternal = JavaScriptObfuscatorInternal_1;
JavaScriptObfuscatorInternal.escodegenParams = {
    verbatim: 'x-verbatim-property',
    sourceMapWithCode: true
};
JavaScriptObfuscatorInternal.esprimaParams = {
    loc: true
};
JavaScriptObfuscatorInternal = JavaScriptObfuscatorInternal_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscator)), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.ISourceMapCorrector)), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object, Object, Object])], JavaScriptObfuscatorInternal);
exports.JavaScriptObfuscatorInternal = JavaScriptObfuscatorInternal;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var ObfuscationResult = function () {
    function ObfuscationResult() {
        _classCallCheck(this, ObfuscationResult);

        this.initialized = false;
    }

    _createClass(ObfuscationResult, [{
        key: "checkInitialization",
        value: function checkInitialization() {
            if (!this.initialized) {
                throw new Error("`ObfuscationResult` should be initialized first by calling `initialize` method!");
            }
        }
    }, {
        key: "initialize",
        value: function initialize(obfuscatedCode, sourceMap) {
            this.obfuscatedCode = obfuscatedCode;
            this.sourceMap = sourceMap;
            this.initialized = true;
        }
    }, {
        key: "getObfuscatedCode",
        value: function getObfuscatedCode() {
            this.checkInitialization();
            return this.obfuscatedCode;
        }
    }, {
        key: "getSourceMap",
        value: function getSourceMap() {
            this.checkInitialization();
            return this.sourceMap;
        }
    }, {
        key: "toString",
        value: function toString() {
            this.checkInitialization();
            return this.obfuscatedCode;
        }
    }]);

    return ObfuscationResult;
}();
ObfuscationResult = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], ObfuscationResult);
exports.ObfuscationResult = ObfuscationResult;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeTransformers_1 = __webpack_require__(24);
var NodeType_1 = __webpack_require__(9);
var ObfuscationEvents_1 = __webpack_require__(3);
var VisitorDirection_1 = __webpack_require__(58);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var Obfuscator_1 = function () {
    function Obfuscator(stackTraceAnalyzer, obfuscationEventEmitter, nodeTransformersFactory, options) {
        _classCallCheck(this, Obfuscator);

        this.stackTraceAnalyzer = stackTraceAnalyzer;
        this.obfuscationEventEmitter = obfuscationEventEmitter;
        this.nodeTransformersFactory = nodeTransformersFactory;
        this.options = options;
    }

    _createClass(Obfuscator, [{
        key: "obfuscateAstTree",
        value: function obfuscateAstTree(astTree, customNodesStorage) {
            var _this = this;

            if (Node_1.Node.isProgramNode(astTree) && !astTree.body.length) {
                return astTree;
            }
            NodeUtils_1.NodeUtils.parentize(astTree);
            var stackTraceData = this.stackTraceAnalyzer.analyze(astTree.body);
            customNodesStorage.initialize(stackTraceData);
            customNodesStorage.getStorage().forEach(function (customNode) {
                _this.obfuscationEventEmitter.once(customNode.getAppendEvent(), customNode.appendNode.bind(customNode));
            });
            this.obfuscationEventEmitter.emit(ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation, astTree, stackTraceData);
            if (this.options.controlFlowFlattening) {
                this.transformAstTree(astTree, VisitorDirection_1.VisitorDirection.leave, this.nodeTransformersFactory(Obfuscator_1.nodeControlFlowTransformersMap));
            }
            this.transformAstTree(astTree, VisitorDirection_1.VisitorDirection.enter, this.nodeTransformersFactory(Obfuscator_1.nodeObfuscatorsMap));
            this.obfuscationEventEmitter.emit(ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation, astTree, stackTraceData);
            return astTree;
        }
    }, {
        key: "transformAstTree",
        value: function transformAstTree(astTree, direction, nodeTransformersConcreteFactory) {
            estraverse.traverse(astTree, _defineProperty({}, direction, function (node, parentNode) {
                var nodeTransformers = nodeTransformersConcreteFactory(node.type);
                nodeTransformers.forEach(function (nodeTransformer) {
                    nodeTransformer.transformNode(node, parentNode);
                });
            }));
        }
    }]);

    return Obfuscator;
}();
var Obfuscator = Obfuscator_1;
Obfuscator.nodeControlFlowTransformersMap = new Map([[NodeType_1.NodeType.FunctionDeclaration, [NodeTransformers_1.NodeTransformers.FunctionControlFlowTransformer]], [NodeType_1.NodeType.FunctionExpression, [NodeTransformers_1.NodeTransformers.FunctionControlFlowTransformer]]]);
Obfuscator.nodeObfuscatorsMap = new Map([[NodeType_1.NodeType.ArrowFunctionExpression, [NodeTransformers_1.NodeTransformers.FunctionObfuscator]], [NodeType_1.NodeType.ClassDeclaration, [NodeTransformers_1.NodeTransformers.FunctionDeclarationObfuscator]], [NodeType_1.NodeType.CatchClause, [NodeTransformers_1.NodeTransformers.CatchClauseObfuscator]], [NodeType_1.NodeType.FunctionDeclaration, [NodeTransformers_1.NodeTransformers.FunctionDeclarationObfuscator, NodeTransformers_1.NodeTransformers.FunctionObfuscator]], [NodeType_1.NodeType.FunctionExpression, [NodeTransformers_1.NodeTransformers.FunctionObfuscator]], [NodeType_1.NodeType.MemberExpression, [NodeTransformers_1.NodeTransformers.MemberExpressionObfuscator]], [NodeType_1.NodeType.MethodDefinition, [NodeTransformers_1.NodeTransformers.MethodDefinitionObfuscator]], [NodeType_1.NodeType.ObjectExpression, [NodeTransformers_1.NodeTransformers.ObjectExpressionObfuscator]], [NodeType_1.NodeType.VariableDeclaration, [NodeTransformers_1.NodeTransformers.VariableDeclarationObfuscator]], [NodeType_1.NodeType.LabeledStatement, [NodeTransformers_1.NodeTransformers.LabeledStatementObfuscator]], [NodeType_1.NodeType.Literal, [NodeTransformers_1.NodeTransformers.LiteralObfuscator]]]);
Obfuscator = Obfuscator_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IStackTraceAnalyzer)), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscationEventEmitter)), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<INodeTransformer[]>'])), __param(3, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object, Function, Object])], Obfuscator);
exports.Obfuscator = Obfuscator;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var SourceMapMode_1 = __webpack_require__(16);
var Utils_1 = __webpack_require__(2);
var SourceMapCorrector = function () {
    function SourceMapCorrector(obfuscationResultFactory, options) {
        _classCallCheck(this, SourceMapCorrector);

        this.obfuscationResultFactory = obfuscationResultFactory;
        this.options = options;
    }

    _createClass(SourceMapCorrector, [{
        key: "correct",
        value: function correct(obfuscatedCode, sourceMap) {
            return this.obfuscationResultFactory(this.correctObfuscatedCode(obfuscatedCode, sourceMap), sourceMap);
        }
    }, {
        key: "correctObfuscatedCode",
        value: function correctObfuscatedCode(obfuscatedCode, sourceMap) {
            if (!sourceMap) {
                return obfuscatedCode;
            }
            var sourceMapUrl = this.options.sourceMapBaseUrl + this.options.sourceMapFileName;
            var sourceMappingUrl = '//# sourceMappingURL=';
            switch (this.options.sourceMapMode) {
                case SourceMapMode_1.SourceMapMode.Inline:
                    sourceMappingUrl += "data:application/json;base64," + Utils_1.Utils.btoa(sourceMap);
                    break;
                case SourceMapMode_1.SourceMapMode.Separate:
                default:
                    if (!sourceMapUrl) {
                        return obfuscatedCode;
                    }
                    sourceMappingUrl += sourceMapUrl;
                    break;
            }
            return obfuscatedCode + "\n" + sourceMappingUrl;
        }
    }]);

    return SourceMapCorrector;
}();
SourceMapCorrector = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IObfuscationResult>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Function, Object])], SourceMapCorrector);
exports.SourceMapCorrector = SourceMapCorrector;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = __webpack_require__(111);
var mkdirp = __webpack_require__(113);
var path = __webpack_require__(29);
var Utils_1 = __webpack_require__(2);

var CLIUtils = function () {
    function CLIUtils() {
        _classCallCheck(this, CLIUtils);
    }

    _createClass(CLIUtils, null, [{
        key: 'getOutputCodePath',
        value: function getOutputCodePath(outputPath, inputPath) {
            if (outputPath) {
                return outputPath;
            }
            return inputPath.split('.').map(function (value, index) {
                return index === 0 ? value + '-obfuscated' : value;
            }).join('.');
        }
    }, {
        key: 'getOutputSourceMapPath',
        value: function getOutputSourceMapPath(outputCodePath) {
            var sourceMapFileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (sourceMapFileName) {
                outputCodePath = outputCodePath.substr(0, outputCodePath.lastIndexOf('/')) + '/' + sourceMapFileName;
            }
            if (!/\.js\.map$/.test(outputCodePath)) {
                outputCodePath = outputCodePath.split('.')[0] + '.js.map';
            } else if (/\.js$/.test(outputCodePath)) {
                outputCodePath += '.map';
            }
            return outputCodePath;
        }
    }, {
        key: 'getPackageConfig',
        value: function getPackageConfig() {
            return JSON.parse(fs.readFileSync(path.join(path.dirname(fs.realpathSync(process.argv[1])), '../package.json'), CLIUtils.encoding));
        }
    }, {
        key: 'isFilePath',
        value: function isFilePath(filePath) {
            try {
                return fs.statSync(filePath).isFile();
            } catch (e) {
                return false;
            }
        }
    }, {
        key: 'readFile',
        value: function readFile(inputPath) {
            return fs.readFileSync(inputPath, CLIUtils.encoding);
        }
    }, {
        key: 'validateInputPath',
        value: function validateInputPath(inputPath) {
            if (!CLIUtils.isFilePath(inputPath)) {
                throw new ReferenceError('Given input path must be a valid file path');
            }
            if (!Utils_1.Utils.arrayContains(CLIUtils.availableInputExtensions, path.extname(inputPath))) {
                throw new ReferenceError('Input file must have .js extension');
            }
        }
    }, {
        key: 'writeFile',
        value: function writeFile(outputPath, data) {
            mkdirp.sync(path.dirname(outputPath));
            fs.writeFileSync(outputPath, data, {
                encoding: CLIUtils.encoding
            });
        }
    }]);

    return CLIUtils;
}();

CLIUtils.availableInputExtensions = ['.js'];
CLIUtils.encoding = 'utf8';
exports.CLIUtils = CLIUtils;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var commander = __webpack_require__(109);
var path = __webpack_require__(29);
var SourceMapMode_1 = __webpack_require__(16);
var StringArrayEncoding_1 = __webpack_require__(20);
var DefaultPreset_1 = __webpack_require__(26);
var CLIUtils_1 = __webpack_require__(34);
var JavaScriptObfuscator_1 = __webpack_require__(13);
var Utils_1 = __webpack_require__(2);

var JavaScriptObfuscatorCLI = function () {
    function JavaScriptObfuscatorCLI(argv) {
        _classCallCheck(this, JavaScriptObfuscatorCLI);

        this.data = '';
        this.rawArguments = argv;
        this.arguments = this.rawArguments.slice(2);
    }

    _createClass(JavaScriptObfuscatorCLI, [{
        key: 'run',
        value: function run() {
            this.configureCommands();
            if (!this.arguments.length || Utils_1.Utils.arrayContains(this.arguments, '--help')) {
                this.commands.outputHelp();
                return;
            }
            this.inputPath = this.arguments[0];
            CLIUtils_1.CLIUtils.validateInputPath(this.inputPath);
            this.getData();
            this.processData();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions() {
            var inputOptions = {};
            var availableOptions = Object.keys(DefaultPreset_1.DEFAULT_PRESET);
            for (var option in this.commands) {
                if (!this.commands.hasOwnProperty(option)) {
                    continue;
                }
                if (!Utils_1.Utils.arrayContains(availableOptions, option)) {
                    continue;
                }
                inputOptions[option] = this.commands[option];
            }
            return Object.assign({}, DefaultPreset_1.DEFAULT_PRESET, inputOptions);
        }
    }, {
        key: 'configureCommands',
        value: function configureCommands() {
            this.commands = new commander.Command().version(JavaScriptObfuscatorCLI.getBuildVersion(), '-v, --version').usage('<inputPath> [options]').option('-o, --output <path>', 'Output path for obfuscated code').option('--compact <boolean>', 'Disable one line output code compacting', JavaScriptObfuscatorCLI.parseBoolean).option('--controlFlowFlattening <boolean>', 'Enables control flow flattening', JavaScriptObfuscatorCLI.parseBoolean).option('--debugProtection <boolean>', 'Disable browser Debug panel (can cause DevTools enabled browser freeze)', JavaScriptObfuscatorCLI.parseBoolean).option('--debugProtectionInterval <boolean>', 'Disable browser Debug panel even after page was loaded (can cause DevTools enabled browser freeze)', JavaScriptObfuscatorCLI.parseBoolean).option('--disableConsoleOutput <boolean>', 'Allow console.log, console.info, console.error and console.warn messages output into browser console', JavaScriptObfuscatorCLI.parseBoolean).option('--domainLock <list>', 'Blocks the execution of the code in domains that do not match the passed RegExp patterns (comma separated)', function (val) {
                return val.split(',');
            }).option('--reservedNames <list>', 'Disable obfuscation of variable names, function names and names of function parameters that match the passed RegExp patterns (comma separated)', function (val) {
                return val.split(',');
            }).option('--rotateStringArray <boolean>', 'Disable rotation of unicode array values during obfuscation', JavaScriptObfuscatorCLI.parseBoolean).option('--seed <number>', 'Sets seed for random generator. This is useful for creating repeatable results.', parseFloat).option('--selfDefending <boolean>', 'Disables self-defending for obfuscated code', JavaScriptObfuscatorCLI.parseBoolean).option('--sourceMap <boolean>', 'Enables source map generation', JavaScriptObfuscatorCLI.parseBoolean).option('--sourceMapBaseUrl <string>', 'Sets base url to the source map import url when `--sourceMapMode=separate`').option('--sourceMapFileName <string>', 'Sets file name for output source map when `--sourceMapMode=separate`').option('--sourceMapMode <string> [inline, separate]', 'Specify source map output mode', JavaScriptObfuscatorCLI.parseSourceMapMode).option('--stringArray <boolean>', 'Disables gathering of all literal strings into an array and replacing every literal string with an array call', JavaScriptObfuscatorCLI.parseBoolean).option('--stringArrayEncoding <boolean|string> [true, false, base64, rc4]', 'Encodes all strings in strings array using base64 or rc4 (this option can slow down your code speed', JavaScriptObfuscatorCLI.parseStringArrayEncoding).option('--stringArrayThreshold <number>', 'The probability that the literal string will be inserted into stringArray (Default: 0.8, Min: 0, Max: 1)', parseFloat).option('--unicodeEscapeSequence <boolean>', 'Allows to enable/disable string conversion to unicode escape sequence', JavaScriptObfuscatorCLI.parseBoolean).parse(this.rawArguments);
            this.commands.on('--help', function () {
                console.log('  Examples:\n');
                console.log('    %> javascript-obfuscator in.js --compact true --selfDefending false');
                console.log('    %> javascript-obfuscator in.js --output out.js --compact true --selfDefending false');
                console.log('');
            });
        }
    }, {
        key: 'getData',
        value: function getData() {
            this.data = CLIUtils_1.CLIUtils.readFile(this.inputPath);
        }
    }, {
        key: 'processData',
        value: function processData() {
            var options = this.buildOptions();
            var outputCodePath = CLIUtils_1.CLIUtils.getOutputCodePath(this.commands.output, this.inputPath);
            if (options.sourceMap) {
                this.processDataWithSourceMap(outputCodePath, options);
            } else {
                this.processDataWithoutSourceMap(outputCodePath, options);
            }
        }
    }, {
        key: 'processDataWithoutSourceMap',
        value: function processDataWithoutSourceMap(outputCodePath, options) {
            var obfuscatedCode = JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(this.data, options).getObfuscatedCode();
            CLIUtils_1.CLIUtils.writeFile(outputCodePath, obfuscatedCode);
        }
    }, {
        key: 'processDataWithSourceMap',
        value: function processDataWithSourceMap(outputCodePath, options) {
            var outputSourceMapPath = CLIUtils_1.CLIUtils.getOutputSourceMapPath(outputCodePath, options.sourceMapFileName || '');
            options.sourceMapFileName = path.basename(outputSourceMapPath);
            var obfuscationResult = JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(this.data, options);
            CLIUtils_1.CLIUtils.writeFile(outputCodePath, obfuscationResult.getObfuscatedCode());
            if (options.sourceMapMode === 'separate' && obfuscationResult.getSourceMap()) {
                CLIUtils_1.CLIUtils.writeFile(outputSourceMapPath, obfuscationResult.getSourceMap());
            }
        }
    }], [{
        key: 'getBuildVersion',
        value: function getBuildVersion() {
            return CLIUtils_1.CLIUtils.getPackageConfig().version;
        }
    }, {
        key: 'parseBoolean',
        value: function parseBoolean(value) {
            return value === 'true' || value === '1';
        }
    }, {
        key: 'parseSourceMapMode',
        value: function parseSourceMapMode(value) {
            var availableMode = Object.keys(SourceMapMode_1.SourceMapMode).some(function (key) {
                return SourceMapMode_1.SourceMapMode[key] === value;
            });
            if (!availableMode) {
                throw new ReferenceError('Invalid value of `--sourceMapMode` option');
            }
            return value;
        }
    }, {
        key: 'parseStringArrayEncoding',
        value: function parseStringArrayEncoding(value) {
            switch (value) {
                case 'true':
                case '1':
                case StringArrayEncoding_1.StringArrayEncoding.base64:
                    return true;
                case StringArrayEncoding_1.StringArrayEncoding.rc4:
                    return StringArrayEncoding_1.StringArrayEncoding.rc4;
                default:
                    return false;
            }
        }
    }]);

    return JavaScriptObfuscatorCLI;
}();

exports.JavaScriptObfuscatorCLI = JavaScriptObfuscatorCLI;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var NodeControlFlowTransformersModule_1 = __webpack_require__(37);
var NodeObfuscatorsModule_1 = __webpack_require__(38);
var NodeTransformersModule_1 = __webpack_require__(39);
var StackTraceAnalyzerModule_1 = __webpack_require__(40);
var CustomNodesStorage_1 = __webpack_require__(85);
var JavaScriptObfuscatorInternal_1 = __webpack_require__(30);
var ObfuscationEventEmitter_1 = __webpack_require__(60);
var ObfuscationResult_1 = __webpack_require__(31);
var Obfuscator_1 = __webpack_require__(32);
var Options_1 = __webpack_require__(76);
var SourceMapCorrector_1 = __webpack_require__(33);

var InversifyContainerFacade = function () {
    function InversifyContainerFacade(options) {
        _classCallCheck(this, InversifyContainerFacade);

        this.container = new inversify_1.Container();
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers.IOptions).toDynamicValue(function () {
            return new Options_1.Options(options);
        }).inSingletonScope();
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers.IJavaScriptObfuscator).to(JavaScriptObfuscatorInternal_1.JavaScriptObfuscatorInternal).inSingletonScope();
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscator).to(Obfuscator_1.Obfuscator).inSingletonScope();
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscationResult).to(ObfuscationResult_1.ObfuscationResult).inSingletonScope();
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IObfuscationResult>']).toFactory(function (context) {
            return function (obfuscatedCode, sourceMap) {
                var obfuscationResult = context.container.get(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscationResult);
                obfuscationResult.initialize(obfuscatedCode, sourceMap);
                return obfuscationResult;
            };
        });
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers.ISourceMapCorrector).to(SourceMapCorrector_1.SourceMapCorrector).inSingletonScope();
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers.IObfuscationEventEmitter).to(ObfuscationEventEmitter_1.ObfuscationEventEmitter).inSingletonScope();
        this.container.bind(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>']).to(CustomNodesStorage_1.CustomNodesStorage).inSingletonScope();
        this.container.load(StackTraceAnalyzerModule_1.stackTraceAnalyzerModule);
        this.container.load(NodeTransformersModule_1.nodeTransformersModule);
        this.container.load(NodeControlFlowTransformersModule_1.nodeControlFlowTransformersModule);
        this.container.load(NodeObfuscatorsModule_1.nodeObfuscatorsModule);
    }

    _createClass(InversifyContainerFacade, [{
        key: 'get',
        value: function get(serviceIdentifier) {
            return this.container.get(serviceIdentifier);
        }
    }]);

    return InversifyContainerFacade;
}();

exports.InversifyContainerFacade = InversifyContainerFacade;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var NodeControlFlowTransformersReplacers_1 = __webpack_require__(59);
var BinaryExpressionControlFlowReplacer_1 = __webpack_require__(25);
exports.nodeControlFlowTransformersModule = new inversify_1.ContainerModule(function (bind) {
    var nodeControlFlowTransformersReplacersTag = 'nodeControlFlowTransformersReplacers';
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IControlFlowReplacer).to(BinaryExpressionControlFlowReplacer_1.BinaryExpressionControlFlowReplacer).whenTargetTagged(nodeControlFlowTransformersReplacersTag, NodeControlFlowTransformersReplacers_1.NodeControlFlowTransformersReplacers.BinaryExpressionControlFlowReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IControlFlowReplacer>']).toFactory(function (context) {
        var cache = new Map();
        return function (replacer) {
            if (cache.has(replacer)) {
                return cache.get(replacer);
            }
            var controlFlowReplacer = context.container.getTagged(ServiceIdentifiers_1.ServiceIdentifiers.IControlFlowReplacer, nodeControlFlowTransformersReplacersTag, replacer);
            cache.set(replacer, controlFlowReplacer);
            return controlFlowReplacer;
        };
    });
});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var BooleanLiteralReplacer_1 = __webpack_require__(72);
var IdentifierReplacer_1 = __webpack_require__(73);
var NumberLiteralReplacer_1 = __webpack_require__(74);
var StringLiteralReplacer_1 = __webpack_require__(75);
exports.nodeObfuscatorsModule = new inversify_1.ContainerModule(function (bind) {
    var nodeObfuscatorsReplacersTag = 'nodeObfuscatorsReplacers';
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IReplacer).to(BooleanLiteralReplacer_1.BooleanLiteralReplacer).whenTargetTagged(nodeObfuscatorsReplacersTag, NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.BooleanReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IReplacer).to(IdentifierReplacer_1.IdentifierReplacer).whenTargetTagged(nodeObfuscatorsReplacersTag, NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.IdentifierReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IReplacer).to(NumberLiteralReplacer_1.NumberLiteralReplacer).whenTargetTagged(nodeObfuscatorsReplacersTag, NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.NumberLiteralReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IReplacer).to(StringLiteralReplacer_1.StringLiteralReplacer).whenTargetTagged(nodeObfuscatorsReplacersTag, NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.StringLiteralReplacer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>']).toFactory(function (context) {
        var cache = new Map();
        return function (replacer) {
            if (cache.has(replacer)) {
                return cache.get(replacer);
            }
            var obfuscationReplacer = context.container.getTagged(ServiceIdentifiers_1.ServiceIdentifiers.IReplacer, nodeObfuscatorsReplacersTag, replacer);
            cache.set(replacer, obfuscationReplacer);
            return obfuscationReplacer;
        };
    });
});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var NodeTransformers_1 = __webpack_require__(24);
var FunctionControlFlowTransformer_1 = __webpack_require__(61);
var CatchClauseObfuscator_1 = __webpack_require__(63);
var FunctionDeclarationObfuscator_1 = __webpack_require__(64);
var FunctionObfuscator_1 = __webpack_require__(65);
var LabeledStatementObfuscator_1 = __webpack_require__(66);
var LiteralObfuscator_1 = __webpack_require__(67);
var MemberExpressionObfuscator_1 = __webpack_require__(68);
var MethodDefinitionObfuscator_1 = __webpack_require__(69);
var ObjectExpressionObfuscator_1 = __webpack_require__(70);
var VariableDeclarationObfuscator_1 = __webpack_require__(71);
exports.nodeTransformersModule = new inversify_1.ContainerModule(function (bind) {
    var nodeTransformersTag = 'nodeTransformers';
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(FunctionControlFlowTransformer_1.FunctionControlFlowTransformer).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.FunctionControlFlowTransformer);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(CatchClauseObfuscator_1.CatchClauseObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.CatchClauseObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(FunctionDeclarationObfuscator_1.FunctionDeclarationObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.FunctionDeclarationObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(FunctionObfuscator_1.FunctionObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.FunctionObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(LabeledStatementObfuscator_1.LabeledStatementObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.LabeledStatementObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(LiteralObfuscator_1.LiteralObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.LiteralObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(MemberExpressionObfuscator_1.MemberExpressionObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.MemberExpressionObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(MethodDefinitionObfuscator_1.MethodDefinitionObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.MethodDefinitionObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(ObjectExpressionObfuscator_1.ObjectExpressionObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.ObjectExpressionObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer).to(VariableDeclarationObfuscator_1.VariableDeclarationObfuscator).whenTargetTagged(nodeTransformersTag, NodeTransformers_1.NodeTransformers.VariableDeclarationObfuscator);
    bind(ServiceIdentifiers_1.ServiceIdentifiers['Factory<INodeTransformer[]>']).toFactory(function (context) {
        var cache = new Map();
        return function (nodeTransformersMap) {
            return function (nodeType) {
                var nodeTransformers = nodeTransformersMap.get(nodeType) || [];
                var instancesArray = [];
                nodeTransformers.forEach(function (transformer) {
                    var nodeTransformer = void 0;
                    if (cache.has(transformer)) {
                        nodeTransformer = cache.get(transformer);
                    } else {
                        nodeTransformer = context.container.getTagged(ServiceIdentifiers_1.ServiceIdentifiers.INodeTransformer, nodeTransformersTag, transformer);
                        cache.set(transformer, nodeTransformer);
                    }
                    instancesArray.push(nodeTransformer);
                });
                return instancesArray;
            };
        };
    });
});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var FunctionDeclarationCalleeDataExtractor_1 = __webpack_require__(80);
var FunctionExpressionCalleeDataExtractor_1 = __webpack_require__(81);
var ObjectExpressionCalleeDataExtractor_1 = __webpack_require__(82);
var StackTraceAnalyzer_1 = __webpack_require__(79);
var CalleeDataExtractors_1 = __webpack_require__(23);
exports.stackTraceAnalyzerModule = new inversify_1.ContainerModule(function (bind) {
    var calleeDataExtractorsTag = 'calleeDataExtractors';
    bind(ServiceIdentifiers_1.ServiceIdentifiers.IStackTraceAnalyzer).to(StackTraceAnalyzer_1.StackTraceAnalyzer).inSingletonScope();
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor).to(FunctionDeclarationCalleeDataExtractor_1.FunctionDeclarationCalleeDataExtractor).whenTargetTagged(calleeDataExtractorsTag, CalleeDataExtractors_1.CalleeDataExtractors.FunctionDeclarationCalleeDataExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor).to(FunctionExpressionCalleeDataExtractor_1.FunctionExpressionCalleeDataExtractor).whenTargetTagged(calleeDataExtractorsTag, CalleeDataExtractors_1.CalleeDataExtractors.FunctionExpressionCalleeDataExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor).to(ObjectExpressionCalleeDataExtractor_1.ObjectExpressionCalleeDataExtractor).whenTargetTagged(calleeDataExtractorsTag, CalleeDataExtractors_1.CalleeDataExtractors.ObjectExpressionCalleeDataExtractor);
    bind(ServiceIdentifiers_1.ServiceIdentifiers['Factory<ICalleeDataExtractor>']).toFactory(function (context) {
        var cache = new Map();
        return function (calleeDataExtractorName) {
            if (cache.has(calleeDataExtractorName)) {
                return cache.get(calleeDataExtractorName);
            }
            var calleeDataExtractor = context.container.getTagged(ServiceIdentifiers_1.ServiceIdentifiers.ICalleeDataExtractor, calleeDataExtractorsTag, calleeDataExtractorName);
            cache.set(calleeDataExtractorName, calleeDataExtractor);
            return calleeDataExtractor;
        };
    });
});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var ConsoleOutputDisableExpressionTemplate_1 = __webpack_require__(90);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var ConsoleOutputDisableExpressionNode = function (_AbstractCustomNode_) {
    _inherits(ConsoleOutputDisableExpressionNode, _AbstractCustomNode_);

    function ConsoleOutputDisableExpressionNode(options) {
        _classCallCheck(this, ConsoleOutputDisableExpressionNode);

        var _this = _possibleConstructorReturn(this, (ConsoleOutputDisableExpressionNode.__proto__ || Object.getPrototypeOf(ConsoleOutputDisableExpressionNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        return _this;
    }

    _createClass(ConsoleOutputDisableExpressionNode, [{
        key: "initialize",
        value: function initialize(callsControllerFunctionName, randomStackTraceIndex) {
            this.callsControllerFunctionName = callsControllerFunctionName;
            this.randomStackTraceIndex = randomStackTraceIndex;
            _get(ConsoleOutputDisableExpressionNode.prototype.__proto__ || Object.getPrototypeOf(ConsoleOutputDisableExpressionNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            NodeAppender_1.NodeAppender.appendNodeToOptimalBlockScope(stackTraceData, blockScopeNode, this.getNode(), this.randomStackTraceIndex);
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return format(ConsoleOutputDisableExpressionTemplate_1.ConsoleOutputDisableExpressionTemplate(), {
                consoleLogDisableFunctionName: Utils_1.Utils.getRandomVariableName(),
                singleNodeCallControllerFunctionName: this.callsControllerFunctionName
            });
        }
    }]);

    return ConsoleOutputDisableExpressionNode;
}(AbstractCustomNode_1.AbstractCustomNode);
ConsoleOutputDisableExpressionNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], ConsoleOutputDisableExpressionNode);
exports.ConsoleOutputDisableExpressionNode = ConsoleOutputDisableExpressionNode;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var ConsoleOutputDisableExpressionNode_1 = __webpack_require__(41);
var NodeCallsControllerFunctionNode_1 = __webpack_require__(19);
var AbstractCustomNodesFactory_1 = __webpack_require__(15);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var ConsoleOutputCustomNodesFactory = function (_AbstractCustomNodesF) {
    _inherits(ConsoleOutputCustomNodesFactory, _AbstractCustomNodesF);

    function ConsoleOutputCustomNodesFactory(options) {
        _classCallCheck(this, ConsoleOutputCustomNodesFactory);

        return _possibleConstructorReturn(this, (ConsoleOutputCustomNodesFactory.__proto__ || Object.getPrototypeOf(ConsoleOutputCustomNodesFactory)).call(this, options));
    }

    _createClass(ConsoleOutputCustomNodesFactory, [{
        key: "initializeCustomNodes",
        value: function initializeCustomNodes(stackTraceData) {
            if (!this.options.disableConsoleOutput) {
                return;
            }
            var callsControllerFunctionName = Utils_1.Utils.getRandomVariableName();
            var randomStackTraceIndex = NodeAppender_1.NodeAppender.getRandomStackTraceIndex(stackTraceData.length);
            var consoleOutputDisableExpressionNode = new ConsoleOutputDisableExpressionNode_1.ConsoleOutputDisableExpressionNode(this.options);
            var nodeCallsControllerFunctionNode = new NodeCallsControllerFunctionNode_1.NodeCallsControllerFunctionNode(this.options);
            consoleOutputDisableExpressionNode.initialize(callsControllerFunctionName, randomStackTraceIndex);
            nodeCallsControllerFunctionNode.initialize(callsControllerFunctionName, randomStackTraceIndex);
            return this.syncCustomNodesWithNodesFactory(new Map([['consoleOutputDisableExpressionNode', consoleOutputDisableExpressionNode], ['ConsoleOutputNodeCallsControllerFunctionNode', nodeCallsControllerFunctionNode]]));
        }
    }]);

    return ConsoleOutputCustomNodesFactory;
}(AbstractCustomNodesFactory_1.AbstractCustomNodesFactory);
ConsoleOutputCustomNodesFactory = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], ConsoleOutputCustomNodesFactory);
exports.ConsoleOutputCustomNodesFactory = ConsoleOutputCustomNodesFactory;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var BinaryExpressionFunctionTemplate_1 = __webpack_require__(91);
var AbstractCustomNode_1 = __webpack_require__(7);
var Utils_1 = __webpack_require__(2);
var BinaryExpressionFunctionNode = function (_AbstractCustomNode_) {
    _inherits(BinaryExpressionFunctionNode, _AbstractCustomNode_);

    function BinaryExpressionFunctionNode(options) {
        _classCallCheck(this, BinaryExpressionFunctionNode);

        var _this = _possibleConstructorReturn(this, (BinaryExpressionFunctionNode.__proto__ || Object.getPrototypeOf(BinaryExpressionFunctionNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        return _this;
    }

    _createClass(BinaryExpressionFunctionNode, [{
        key: "initialize",
        value: function initialize(operator) {
            this.operator = operator;
            _get(BinaryExpressionFunctionNode.prototype.__proto__ || Object.getPrototypeOf(BinaryExpressionFunctionNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {}
    }, {
        key: "getCode",
        value: function getCode() {
            return format(BinaryExpressionFunctionTemplate_1.BinaryExpressionFunctionTemplate(), {
                functionName: Utils_1.Utils.getRandomVariableName(1),
                operator: this.operator
            });
        }
    }]);

    return BinaryExpressionFunctionNode;
}(AbstractCustomNode_1.AbstractCustomNode);
BinaryExpressionFunctionNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], BinaryExpressionFunctionNode);
exports.BinaryExpressionFunctionNode = BinaryExpressionFunctionNode;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var ControlFlowStorageCallTemplate_1 = __webpack_require__(92);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var ControlFlowStorageCallNode = function (_AbstractCustomNode_) {
    _inherits(ControlFlowStorageCallNode, _AbstractCustomNode_);

    function ControlFlowStorageCallNode(options) {
        _classCallCheck(this, ControlFlowStorageCallNode);

        var _this = _possibleConstructorReturn(this, (ControlFlowStorageCallNode.__proto__ || Object.getPrototypeOf(ControlFlowStorageCallNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(ControlFlowStorageCallNode, [{
        key: "initialize",
        value: function initialize(controlFlowStorageName, controlFlowStorageKey, leftValue, rightValue) {
            this.controlFlowStorageName = controlFlowStorageName;
            this.controlFlowStorageKey = controlFlowStorageKey;
            this.leftValue = leftValue;
            this.rightValue = rightValue;
            _get(ControlFlowStorageCallNode.prototype.__proto__ || Object.getPrototypeOf(ControlFlowStorageCallNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            NodeAppender_1.NodeAppender.prependNode(blockScopeNode, this.getNode());
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return format(ControlFlowStorageCallTemplate_1.ControlFlowStorageCallTemplate(), {
                controlFlowStorageKey: this.controlFlowStorageKey,
                controlFlowStorageName: this.controlFlowStorageName,
                leftValue: this.leftValue,
                rightValue: this.rightValue
            });
        }
    }]);

    return ControlFlowStorageCallNode;
}(AbstractCustomNode_1.AbstractCustomNode);
ControlFlowStorageCallNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], ControlFlowStorageCallNode);
exports.ControlFlowStorageCallNode = ControlFlowStorageCallNode;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var ControlFlowStorageTemplate_1 = __webpack_require__(93);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var ControlFlowStorageNode = function (_AbstractCustomNode_) {
    _inherits(ControlFlowStorageNode, _AbstractCustomNode_);

    function ControlFlowStorageNode(options) {
        _classCallCheck(this, ControlFlowStorageNode);

        var _this = _possibleConstructorReturn(this, (ControlFlowStorageNode.__proto__ || Object.getPrototypeOf(ControlFlowStorageNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(ControlFlowStorageNode, [{
        key: "initialize",
        value: function initialize(controlFlowStorage, controlFlowStorageName) {
            this.controlFlowStorage = controlFlowStorage;
            this.controlFlowStorageName = controlFlowStorageName;
            _get(ControlFlowStorageNode.prototype.__proto__ || Object.getPrototypeOf(ControlFlowStorageNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            NodeAppender_1.NodeAppender.prependNode(blockScopeNode, this.getNode());
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return format(ControlFlowStorageTemplate_1.ControlFlowStorageTemplate(), {
                controlFlowStorage: this.controlFlowStorage.toString(),
                controlFlowStorageName: this.controlFlowStorageName
            });
        }
    }]);

    return ControlFlowStorageNode;
}(AbstractCustomNode_1.AbstractCustomNode);
ControlFlowStorageNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], ControlFlowStorageNode);
exports.ControlFlowStorageNode = ControlFlowStorageNode;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var DebufProtectionFunctionCallTemplate_1 = __webpack_require__(94);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var DebugProtectionFunctionCallNode = function (_AbstractCustomNode_) {
    _inherits(DebugProtectionFunctionCallNode, _AbstractCustomNode_);

    function DebugProtectionFunctionCallNode(options) {
        _classCallCheck(this, DebugProtectionFunctionCallNode);

        var _this = _possibleConstructorReturn(this, (DebugProtectionFunctionCallNode.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionCallNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        return _this;
    }

    _createClass(DebugProtectionFunctionCallNode, [{
        key: "initialize",
        value: function initialize(debugProtectionFunctionName) {
            this.debugProtectionFunctionName = debugProtectionFunctionName;
            _get(DebugProtectionFunctionCallNode.prototype.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionCallNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            NodeAppender_1.NodeAppender.appendNode(blockScopeNode, this.getNode());
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return format(DebufProtectionFunctionCallTemplate_1.DebugProtectionFunctionCallTemplate(), {
                debugProtectionFunctionName: this.debugProtectionFunctionName
            });
        }
    }]);

    return DebugProtectionFunctionCallNode;
}(AbstractCustomNode_1.AbstractCustomNode);
DebugProtectionFunctionCallNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], DebugProtectionFunctionCallNode);
exports.DebugProtectionFunctionCallNode = DebugProtectionFunctionCallNode;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var DebugProtectionFunctionIntervalTemplate_1 = __webpack_require__(95);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var DebugProtectionFunctionIntervalNode = function (_AbstractCustomNode_) {
    _inherits(DebugProtectionFunctionIntervalNode, _AbstractCustomNode_);

    function DebugProtectionFunctionIntervalNode(options) {
        _classCallCheck(this, DebugProtectionFunctionIntervalNode);

        var _this = _possibleConstructorReturn(this, (DebugProtectionFunctionIntervalNode.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionIntervalNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        return _this;
    }

    _createClass(DebugProtectionFunctionIntervalNode, [{
        key: "initialize",
        value: function initialize(debugProtectionFunctionName) {
            this.debugProtectionFunctionName = debugProtectionFunctionName;
            _get(DebugProtectionFunctionIntervalNode.prototype.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionIntervalNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            NodeAppender_1.NodeAppender.appendNode(blockScopeNode, this.getNode());
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return format(DebugProtectionFunctionIntervalTemplate_1.DebugProtectionFunctionIntervalTemplate(), {
                debugProtectionFunctionName: this.debugProtectionFunctionName
            });
        }
    }]);

    return DebugProtectionFunctionIntervalNode;
}(AbstractCustomNode_1.AbstractCustomNode);
DebugProtectionFunctionIntervalNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], DebugProtectionFunctionIntervalNode);
exports.DebugProtectionFunctionIntervalNode = DebugProtectionFunctionIntervalNode;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var DebugProtectionFunctionTemplate_1 = __webpack_require__(96);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var DebugProtectionFunctionNode = function (_AbstractCustomNode_) {
    _inherits(DebugProtectionFunctionNode, _AbstractCustomNode_);

    function DebugProtectionFunctionNode(options) {
        _classCallCheck(this, DebugProtectionFunctionNode);

        var _this = _possibleConstructorReturn(this, (DebugProtectionFunctionNode.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        return _this;
    }

    _createClass(DebugProtectionFunctionNode, [{
        key: "initialize",
        value: function initialize(debugProtectionFunctionName) {
            this.debugProtectionFunctionName = debugProtectionFunctionName;
            _get(DebugProtectionFunctionNode.prototype.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            var programBodyLength = blockScopeNode.body.length,
                randomIndex = Utils_1.Utils.getRandomInteger(0, programBodyLength);
            NodeAppender_1.NodeAppender.insertNodeAtIndex(blockScopeNode, this.getNode(), randomIndex);
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return format(DebugProtectionFunctionTemplate_1.DebugProtectionFunctionTemplate(), {
                debugProtectionFunctionName: this.debugProtectionFunctionName
            });
        }
    }]);

    return DebugProtectionFunctionNode;
}(AbstractCustomNode_1.AbstractCustomNode);
DebugProtectionFunctionNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], DebugProtectionFunctionNode);
exports.DebugProtectionFunctionNode = DebugProtectionFunctionNode;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var DebugProtectionFunctionCallNode_1 = __webpack_require__(46);
var DebugProtectionFunctionIntervalNode_1 = __webpack_require__(47);
var DebugProtectionFunctionNode_1 = __webpack_require__(48);
var AbstractCustomNodesFactory_1 = __webpack_require__(15);
var Utils_1 = __webpack_require__(2);
var DebugProtectionCustomNodesFactory = function (_AbstractCustomNodesF) {
    _inherits(DebugProtectionCustomNodesFactory, _AbstractCustomNodesF);

    function DebugProtectionCustomNodesFactory(options) {
        _classCallCheck(this, DebugProtectionCustomNodesFactory);

        return _possibleConstructorReturn(this, (DebugProtectionCustomNodesFactory.__proto__ || Object.getPrototypeOf(DebugProtectionCustomNodesFactory)).call(this, options));
    }

    _createClass(DebugProtectionCustomNodesFactory, [{
        key: "initializeCustomNodes",
        value: function initializeCustomNodes(stackTraceData) {
            if (!this.options.debugProtection) {
                return;
            }
            var debugProtectionFunctionName = Utils_1.Utils.getRandomVariableName();
            var debugProtectionFunctionNode = new DebugProtectionFunctionNode_1.DebugProtectionFunctionNode(this.options);
            var debugProtectionFunctionCallNode = new DebugProtectionFunctionCallNode_1.DebugProtectionFunctionCallNode(this.options);
            var debugProtectionFunctionIntervalNode = new DebugProtectionFunctionIntervalNode_1.DebugProtectionFunctionIntervalNode(this.options);
            debugProtectionFunctionNode.initialize(debugProtectionFunctionName);
            debugProtectionFunctionCallNode.initialize(debugProtectionFunctionName);
            debugProtectionFunctionIntervalNode.initialize(debugProtectionFunctionName);
            var customNodes = new Map([['debugProtectionFunctionNode', debugProtectionFunctionNode], ['debugProtectionFunctionCallNode', debugProtectionFunctionCallNode]]);
            if (this.options.debugProtectionInterval) {
                customNodes.set('debugProtectionFunctionIntervalNode', debugProtectionFunctionIntervalNode);
            }
            return this.syncCustomNodesWithNodesFactory(customNodes);
        }
    }]);

    return DebugProtectionCustomNodesFactory;
}(AbstractCustomNodesFactory_1.AbstractCustomNodesFactory);
DebugProtectionCustomNodesFactory = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], DebugProtectionCustomNodesFactory);
exports.DebugProtectionCustomNodesFactory = DebugProtectionCustomNodesFactory;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var DomainLockNodeTemplate_1 = __webpack_require__(97);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var DomainLockNode = function (_AbstractCustomNode_) {
    _inherits(DomainLockNode, _AbstractCustomNode_);

    function DomainLockNode(options) {
        _classCallCheck(this, DomainLockNode);

        var _this = _possibleConstructorReturn(this, (DomainLockNode.__proto__ || Object.getPrototypeOf(DomainLockNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.BeforeObfuscation;
        return _this;
    }

    _createClass(DomainLockNode, [{
        key: "initialize",
        value: function initialize(callsControllerFunctionName, randomStackTraceIndex) {
            this.callsControllerFunctionName = callsControllerFunctionName;
            this.randomStackTraceIndex = randomStackTraceIndex;
            _get(DomainLockNode.prototype.__proto__ || Object.getPrototypeOf(DomainLockNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            NodeAppender_1.NodeAppender.appendNodeToOptimalBlockScope(stackTraceData, blockScopeNode, this.getNode(), this.randomStackTraceIndex);
        }
    }, {
        key: "getCode",
        value: function getCode() {
            var domainsString = this.options.domainLock.join(';'),
                _Utils_1$Utils$hideSt = Utils_1.Utils.hideString(domainsString, domainsString.length * 3),
                _Utils_1$Utils$hideSt2 = _slicedToArray(_Utils_1$Utils$hideSt, 2),
                hiddenDomainsString = _Utils_1$Utils$hideSt2[0],
                diff = _Utils_1$Utils$hideSt2[1];
            return format(DomainLockNodeTemplate_1.DomainLockNodeTemplate(), {
                domainLockFunctionName: Utils_1.Utils.getRandomVariableName(),
                diff: diff,
                domains: hiddenDomainsString,
                singleNodeCallControllerFunctionName: this.callsControllerFunctionName
            });
        }
    }]);

    return DomainLockNode;
}(AbstractCustomNode_1.AbstractCustomNode);
DomainLockNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], DomainLockNode);
exports.DomainLockNode = DomainLockNode;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var DomainLockNode_1 = __webpack_require__(50);
var NodeCallsControllerFunctionNode_1 = __webpack_require__(19);
var AbstractCustomNodesFactory_1 = __webpack_require__(15);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var DomainLockCustomNodesFactory = function (_AbstractCustomNodesF) {
    _inherits(DomainLockCustomNodesFactory, _AbstractCustomNodesF);

    function DomainLockCustomNodesFactory(options) {
        _classCallCheck(this, DomainLockCustomNodesFactory);

        return _possibleConstructorReturn(this, (DomainLockCustomNodesFactory.__proto__ || Object.getPrototypeOf(DomainLockCustomNodesFactory)).call(this, options));
    }

    _createClass(DomainLockCustomNodesFactory, [{
        key: "initializeCustomNodes",
        value: function initializeCustomNodes(stackTraceData) {
            if (!this.options.domainLock.length) {
                return;
            }
            var callsControllerFunctionName = Utils_1.Utils.getRandomVariableName();
            var randomStackTraceIndex = NodeAppender_1.NodeAppender.getRandomStackTraceIndex(stackTraceData.length);
            var domainLockNode = new DomainLockNode_1.DomainLockNode(this.options);
            var nodeCallsControllerFunctionNode = new NodeCallsControllerFunctionNode_1.NodeCallsControllerFunctionNode(this.options);
            domainLockNode.initialize(callsControllerFunctionName, randomStackTraceIndex);
            nodeCallsControllerFunctionNode.initialize(callsControllerFunctionName, randomStackTraceIndex);
            return this.syncCustomNodesWithNodesFactory(new Map([['DomainLockNode', domainLockNode], ['DomainLockNodeCallsControllerFunctionNode', nodeCallsControllerFunctionNode]]));
        }
    }]);

    return DomainLockCustomNodesFactory;
}(AbstractCustomNodesFactory_1.AbstractCustomNodesFactory);
DomainLockCustomNodesFactory = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], DomainLockCustomNodesFactory);
exports.DomainLockCustomNodesFactory = DomainLockCustomNodesFactory;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var NoCustomNodesPreset_1 = __webpack_require__(18);
var SelfDefendingTemplate_1 = __webpack_require__(98);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var JavaScriptObfuscator_1 = __webpack_require__(13);
var Utils_1 = __webpack_require__(2);
var SelfDefendingUnicodeNode = function (_AbstractCustomNode_) {
    _inherits(SelfDefendingUnicodeNode, _AbstractCustomNode_);

    function SelfDefendingUnicodeNode(options) {
        _classCallCheck(this, SelfDefendingUnicodeNode);

        var _this = _possibleConstructorReturn(this, (SelfDefendingUnicodeNode.__proto__ || Object.getPrototypeOf(SelfDefendingUnicodeNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(SelfDefendingUnicodeNode, [{
        key: "initialize",
        value: function initialize(callsControllerFunctionName, randomStackTraceIndex) {
            this.callsControllerFunctionName = callsControllerFunctionName;
            this.randomStackTraceIndex = randomStackTraceIndex;
            _get(SelfDefendingUnicodeNode.prototype.__proto__ || Object.getPrototypeOf(SelfDefendingUnicodeNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            NodeAppender_1.NodeAppender.appendNodeToOptimalBlockScope(stackTraceData, blockScopeNode, this.getNode(), this.randomStackTraceIndex);
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(format(SelfDefendingTemplate_1.SelfDefendingTemplate(), {
                selfDefendingFunctionName: Utils_1.Utils.getRandomVariableName(),
                singleNodeCallControllerFunctionName: this.callsControllerFunctionName
            }), Object.assign({}, NoCustomNodesPreset_1.NO_CUSTOM_NODES_PRESET, {
                seed: this.options.seed
            })).getObfuscatedCode();
        }
    }]);

    return SelfDefendingUnicodeNode;
}(AbstractCustomNode_1.AbstractCustomNode);
SelfDefendingUnicodeNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], SelfDefendingUnicodeNode);
exports.SelfDefendingUnicodeNode = SelfDefendingUnicodeNode;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var ObfuscationEvents_1 = __webpack_require__(3);
var NodeCallsControllerFunctionNode_1 = __webpack_require__(19);
var SelfDefendingUnicodeNode_1 = __webpack_require__(52);
var AbstractCustomNodesFactory_1 = __webpack_require__(15);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var SelfDefendingCustomNodesFactory = function (_AbstractCustomNodesF) {
    _inherits(SelfDefendingCustomNodesFactory, _AbstractCustomNodesF);

    function SelfDefendingCustomNodesFactory(options) {
        _classCallCheck(this, SelfDefendingCustomNodesFactory);

        var _this = _possibleConstructorReturn(this, (SelfDefendingCustomNodesFactory.__proto__ || Object.getPrototypeOf(SelfDefendingCustomNodesFactory)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(SelfDefendingCustomNodesFactory, [{
        key: "initializeCustomNodes",
        value: function initializeCustomNodes(stackTraceData) {
            if (!this.options.selfDefending) {
                return;
            }
            var callsControllerFunctionName = Utils_1.Utils.getRandomVariableName();
            var randomStackTraceIndex = NodeAppender_1.NodeAppender.getRandomStackTraceIndex(stackTraceData.length);
            var selfDefendingUnicodeNode = new SelfDefendingUnicodeNode_1.SelfDefendingUnicodeNode(this.options);
            var nodeCallsControllerFunctionNode = new NodeCallsControllerFunctionNode_1.NodeCallsControllerFunctionNode(this.options);
            selfDefendingUnicodeNode.initialize(callsControllerFunctionName, randomStackTraceIndex);
            nodeCallsControllerFunctionNode.initialize(callsControllerFunctionName, randomStackTraceIndex);
            return this.syncCustomNodesWithNodesFactory(new Map([['selfDefendingUnicodeNode', selfDefendingUnicodeNode], ['SelfDefendingNodeCallsControllerFunctionNode', nodeCallsControllerFunctionNode]]));
        }
    }]);

    return SelfDefendingCustomNodesFactory;
}(AbstractCustomNodesFactory_1.AbstractCustomNodesFactory);
SelfDefendingCustomNodesFactory = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], SelfDefendingCustomNodesFactory);
exports.SelfDefendingCustomNodesFactory = SelfDefendingCustomNodesFactory;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var StringArrayEncoding_1 = __webpack_require__(20);
var NoCustomNodesPreset_1 = __webpack_require__(18);
var AtobTemplate_1 = __webpack_require__(87);
var Rc4Template_1 = __webpack_require__(88);
var SelfDefendingTemplate_1 = __webpack_require__(99);
var StringArrayBase64DecodeNodeTemplate_1 = __webpack_require__(100);
var StringArrayCallsWrapperTemplate_1 = __webpack_require__(101);
var StringArrayRC4DecodeNodeTemplate_1 = __webpack_require__(102);
var AbstractCustomNode_1 = __webpack_require__(7);
var JavaScriptObfuscator_1 = __webpack_require__(13);
var NodeAppender_1 = __webpack_require__(5);
var StringArrayCallsWrapper = function (_AbstractCustomNode_) {
    _inherits(StringArrayCallsWrapper, _AbstractCustomNode_);

    function StringArrayCallsWrapper(options) {
        _classCallCheck(this, StringArrayCallsWrapper);

        var _this = _possibleConstructorReturn(this, (StringArrayCallsWrapper.__proto__ || Object.getPrototypeOf(StringArrayCallsWrapper)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(StringArrayCallsWrapper, [{
        key: "initialize",
        value: function initialize(stringArray, stringArrayName, stringArrayCallsWrapperName) {
            this.stringArray = stringArray;
            this.stringArrayName = stringArrayName;
            this.stringArrayCallsWrapperName = stringArrayCallsWrapperName;
            _get(StringArrayCallsWrapper.prototype.__proto__ || Object.getPrototypeOf(StringArrayCallsWrapper.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            if (!this.stringArray.getLength()) {
                return;
            }
            NodeAppender_1.NodeAppender.insertNodeAtIndex(blockScopeNode, this.getNode(), 1);
        }
    }, {
        key: "getCode",
        value: function getCode() {
            var decodeNodeTemplate = this.getDecodeStringArrayTemplate();
            return JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(format(StringArrayCallsWrapperTemplate_1.StringArrayCallsWrapperTemplate(), {
                decodeNodeTemplate: decodeNodeTemplate,
                stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
                stringArrayName: this.stringArrayName
            }), Object.assign({}, NoCustomNodesPreset_1.NO_CUSTOM_NODES_PRESET, {
                seed: this.options.seed
            })).getObfuscatedCode();
        }
    }, {
        key: "getNodeIdentifier",
        value: function getNodeIdentifier() {
            return this.stringArrayCallsWrapperName;
        }
    }, {
        key: "getNode",
        value: function getNode() {
            return _get(StringArrayCallsWrapper.prototype.__proto__ || Object.getPrototypeOf(StringArrayCallsWrapper.prototype), "getNode", this).call(this);
        }
    }, {
        key: "getDecodeStringArrayTemplate",
        value: function getDecodeStringArrayTemplate() {
            var decodeStringArrayTemplate = '',
                selfDefendingCode = '';
            if (this.options.selfDefending) {
                selfDefendingCode = format(SelfDefendingTemplate_1.SelfDefendingTemplate(), {
                    stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
                    stringArrayName: this.stringArrayName
                });
            }
            switch (this.options.stringArrayEncoding) {
                case StringArrayEncoding_1.StringArrayEncoding.base64:
                    decodeStringArrayTemplate = format(StringArrayBase64DecodeNodeTemplate_1.StringArrayBase64DecodeNodeTemplate(), {
                        atobPolyfill: AtobTemplate_1.AtobTemplate(),
                        selfDefendingCode: selfDefendingCode,
                        stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
                    });
                    break;
                case StringArrayEncoding_1.StringArrayEncoding.rc4:
                    decodeStringArrayTemplate = format(StringArrayRC4DecodeNodeTemplate_1.StringArrayRc4DecodeNodeTemplate(), {
                        atobPolyfill: AtobTemplate_1.AtobTemplate(),
                        rc4Polyfill: Rc4Template_1.Rc4Template(),
                        selfDefendingCode: selfDefendingCode,
                        stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
                    });
                    break;
            }
            return decodeStringArrayTemplate;
        }
    }]);

    return StringArrayCallsWrapper;
}(AbstractCustomNode_1.AbstractCustomNode);
StringArrayCallsWrapper = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], StringArrayCallsWrapper);
exports.StringArrayCallsWrapper = StringArrayCallsWrapper;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var StringArrayTemplate_1 = __webpack_require__(103);
var AbstractCustomNode_1 = __webpack_require__(7);
var NodeAppender_1 = __webpack_require__(5);
var StringArrayNode = function (_AbstractCustomNode_) {
    _inherits(StringArrayNode, _AbstractCustomNode_);

    function StringArrayNode(options) {
        _classCallCheck(this, StringArrayNode);

        var _this = _possibleConstructorReturn(this, (StringArrayNode.__proto__ || Object.getPrototypeOf(StringArrayNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(StringArrayNode, [{
        key: "initialize",
        value: function initialize(stringArray, stringArrayName, stringArrayRotateValue) {
            this.stringArray = stringArray;
            this.stringArrayName = stringArrayName;
            this.stringArrayRotateValue = stringArrayRotateValue;
            _get(StringArrayNode.prototype.__proto__ || Object.getPrototypeOf(StringArrayNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            if (!this.stringArray.getLength()) {
                return;
            }
            NodeAppender_1.NodeAppender.prependNode(blockScopeNode, this.getNode());
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return format(StringArrayTemplate_1.StringArrayTemplate(), {
                stringArrayName: this.stringArrayName,
                stringArray: this.stringArray.toString()
            });
        }
    }, {
        key: "getNodeData",
        value: function getNodeData() {
            return this.stringArray;
        }
    }, {
        key: "getNode",
        value: function getNode() {
            this.stringArray.rotateArray(this.stringArrayRotateValue);
            return _get(StringArrayNode.prototype.__proto__ || Object.getPrototypeOf(StringArrayNode.prototype), "getNode", this).call(this);
        }
    }]);

    return StringArrayNode;
}(AbstractCustomNode_1.AbstractCustomNode);
StringArrayNode.ARRAY_RANDOM_LENGTH = 4;
StringArrayNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], StringArrayNode);
exports.StringArrayNode = StringArrayNode;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var format = __webpack_require__(8);
var ObfuscationEvents_1 = __webpack_require__(3);
var NoCustomNodesPreset_1 = __webpack_require__(18);
var SelfDefendingTemplate_1 = __webpack_require__(104);
var StringArrayRotateFunctionTemplate_1 = __webpack_require__(105);
var AbstractCustomNode_1 = __webpack_require__(7);
var JavaScriptObfuscator_1 = __webpack_require__(13);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var StringArrayRotateFunctionNode = function (_AbstractCustomNode_) {
    _inherits(StringArrayRotateFunctionNode, _AbstractCustomNode_);

    function StringArrayRotateFunctionNode(options) {
        _classCallCheck(this, StringArrayRotateFunctionNode);

        var _this = _possibleConstructorReturn(this, (StringArrayRotateFunctionNode.__proto__ || Object.getPrototypeOf(StringArrayRotateFunctionNode)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(StringArrayRotateFunctionNode, [{
        key: "initialize",
        value: function initialize(stringArray, stringArrayName, stringArrayRotateValue) {
            this.stringArray = stringArray;
            this.stringArrayName = stringArrayName;
            this.stringArrayRotateValue = stringArrayRotateValue;
            _get(StringArrayRotateFunctionNode.prototype.__proto__ || Object.getPrototypeOf(StringArrayRotateFunctionNode.prototype), "initialize", this).call(this);
        }
    }, {
        key: "appendNode",
        value: function appendNode(blockScopeNode, stackTraceData) {
            if (!this.stringArray.getLength()) {
                return;
            }
            NodeAppender_1.NodeAppender.insertNodeAtIndex(blockScopeNode, this.getNode(), 1);
        }
    }, {
        key: "getCode",
        value: function getCode() {
            var code = '',
                timesName = Utils_1.Utils.getRandomVariableName(),
                whileFunctionName = Utils_1.Utils.getRandomVariableName();
            if (this.options.selfDefending) {
                code = format(SelfDefendingTemplate_1.SelfDefendingTemplate(), {
                    timesName: timesName,
                    whileFunctionName: whileFunctionName
                });
            } else {
                code = whileFunctionName + "(++" + timesName + ")";
            }
            return JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(format(StringArrayRotateFunctionTemplate_1.StringArrayRotateFunctionTemplate(), {
                code: code,
                timesName: timesName,
                stringArrayName: this.stringArrayName,
                stringArrayRotateValue: Utils_1.Utils.decToHex(this.stringArrayRotateValue),
                whileFunctionName: whileFunctionName
            }), Object.assign({}, NoCustomNodesPreset_1.NO_CUSTOM_NODES_PRESET, {
                seed: this.options.seed
            })).getObfuscatedCode();
        }
    }]);

    return StringArrayRotateFunctionNode;
}(AbstractCustomNode_1.AbstractCustomNode);
StringArrayRotateFunctionNode = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], StringArrayRotateFunctionNode);
exports.StringArrayRotateFunctionNode = StringArrayRotateFunctionNode;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var ObfuscationEvents_1 = __webpack_require__(3);
var StringArrayCallsWrapper_1 = __webpack_require__(54);
var StringArrayNode_1 = __webpack_require__(55);
var StringArrayRotateFunctionNode_1 = __webpack_require__(56);
var AbstractCustomNodesFactory_1 = __webpack_require__(15);
var StringArrayStorage_1 = __webpack_require__(86);
var Utils_1 = __webpack_require__(2);
var StringArrayCustomNodesFactory = function (_AbstractCustomNodesF) {
    _inherits(StringArrayCustomNodesFactory, _AbstractCustomNodesF);

    function StringArrayCustomNodesFactory(options) {
        _classCallCheck(this, StringArrayCustomNodesFactory);

        var _this = _possibleConstructorReturn(this, (StringArrayCustomNodesFactory.__proto__ || Object.getPrototypeOf(StringArrayCustomNodesFactory)).call(this, options));

        _this.appendEvent = ObfuscationEvents_1.ObfuscationEvents.AfterObfuscation;
        return _this;
    }

    _createClass(StringArrayCustomNodesFactory, [{
        key: "initializeCustomNodes",
        value: function initializeCustomNodes(stackTraceData) {
            if (!this.options.stringArray) {
                return;
            }
            var stringArray = new StringArrayStorage_1.StringArrayStorage();
            var stringArrayNode = new StringArrayNode_1.StringArrayNode(this.options);
            var stringArrayCallsWrapper = new StringArrayCallsWrapper_1.StringArrayCallsWrapper(this.options);
            var stringArrayRotateFunctionNode = new StringArrayRotateFunctionNode_1.StringArrayRotateFunctionNode(this.options);
            var stringArrayName = Utils_1.Utils.getRandomVariableName(StringArrayNode_1.StringArrayNode.ARRAY_RANDOM_LENGTH);
            var stringArrayCallsWrapperName = Utils_1.Utils.getRandomVariableName(StringArrayNode_1.StringArrayNode.ARRAY_RANDOM_LENGTH);
            var stringArrayRotateValue = void 0;
            if (this.options.rotateStringArray) {
                stringArrayRotateValue = Utils_1.Utils.getRandomInteger(100, 500);
            } else {
                stringArrayRotateValue = 0;
            }
            stringArrayNode.initialize(stringArray, stringArrayName, stringArrayRotateValue);
            stringArrayCallsWrapper.initialize(stringArray, stringArrayName, stringArrayCallsWrapperName);
            stringArrayRotateFunctionNode.initialize(stringArray, stringArrayName, stringArrayRotateValue);
            var customNodes = new Map([['stringArrayNode', stringArrayNode], ['stringArrayCallsWrapper', stringArrayCallsWrapper]]);
            if (this.options.rotateStringArray) {
                customNodes.set('stringArrayRotateFunctionNode', stringArrayRotateFunctionNode);
            }
            return this.syncCustomNodesWithNodesFactory(customNodes);
        }
    }]);

    return StringArrayCustomNodesFactory;
}(AbstractCustomNodesFactory_1.AbstractCustomNodesFactory);
StringArrayCustomNodesFactory = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], StringArrayCustomNodesFactory);
exports.StringArrayCustomNodesFactory = StringArrayCustomNodesFactory;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(2);
exports.VisitorDirection = Utils_1.Utils.strEnumify({
    enter: 'enter',
    leave: 'leave'
});

/***/ },
/* 59 */
/***/ function(module, exports) {

"use strict";
"use strict";

(function (NodeControlFlowTransformersReplacers) {
    NodeControlFlowTransformersReplacers[NodeControlFlowTransformersReplacers["BinaryExpressionControlFlowReplacer"] = 0] = "BinaryExpressionControlFlowReplacer";
})(exports.NodeControlFlowTransformersReplacers || (exports.NodeControlFlowTransformersReplacers = {}));
var NodeControlFlowTransformersReplacers = exports.NodeControlFlowTransformersReplacers;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var events_1 = __webpack_require__(110);
inversify_1.decorate(inversify_1.injectable(), events_1.EventEmitter);
var ObfuscationEventEmitter = function (_events_1$EventEmitte) {
    _inherits(ObfuscationEventEmitter, _events_1$EventEmitte);

    function ObfuscationEventEmitter() {
        _classCallCheck(this, ObfuscationEventEmitter);

        return _possibleConstructorReturn(this, (ObfuscationEventEmitter.__proto__ || Object.getPrototypeOf(ObfuscationEventEmitter)).apply(this, arguments));
    }

    return ObfuscationEventEmitter;
}(events_1.EventEmitter);
ObfuscationEventEmitter = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], ObfuscationEventEmitter);
exports.ObfuscationEventEmitter = ObfuscationEventEmitter;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var BinaryExpressionControlFlowReplacer_1 = __webpack_require__(25);
var ControlFlowStorage_1 = __webpack_require__(84);
var ControlFlowStorageNode_1 = __webpack_require__(45);
var Node_1 = __webpack_require__(4);
var NodeAppender_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(2);
var FunctionControlFlowTransformer_1 = function (_AbstractNodeTransfor) {
    _inherits(FunctionControlFlowTransformer, _AbstractNodeTransfor);

    function FunctionControlFlowTransformer(customNodesStorage, options) {
        _classCallCheck(this, FunctionControlFlowTransformer);

        return _possibleConstructorReturn(this, (FunctionControlFlowTransformer.__proto__ || Object.getPrototypeOf(FunctionControlFlowTransformer)).call(this, customNodesStorage, options));
    }

    _createClass(FunctionControlFlowTransformer, [{
        key: "transformNode",
        value: function transformNode(functionNode) {
            this.changeFunctionBodyControlFlow(functionNode);
        }
    }, {
        key: "changeFunctionBodyControlFlow",
        value: function changeFunctionBodyControlFlow(functionNode) {
            var _this2 = this;

            if (Node_1.Node.isArrowFunctionExpressionNode(functionNode)) {
                return;
            }
            var controlFlowStorage = new ControlFlowStorage_1.ControlFlowStorage();
            var controlFlowStorageCustomNodeName = Utils_1.Utils.getRandomVariableName(6);
            estraverse.replace(functionNode.body, {
                enter: function enter(node, parentNode) {
                    var controlFlowReplacer = FunctionControlFlowTransformer_1.controlFlowReplacers.get(node.type);
                    if (!controlFlowReplacer) {
                        return;
                    }
                    var controlFlowStorageCallCustomNode = new controlFlowReplacer(_this2.customNodesStorage, _this2.options).replace(node, parentNode, controlFlowStorage, controlFlowStorageCustomNodeName);
                    if (!controlFlowStorageCallCustomNode) {
                        return;
                    }
                    var statementNode = controlFlowStorageCallCustomNode.getNode()[0];
                    if (!statementNode || !Node_1.Node.isExpressionStatementNode(statementNode)) {
                        throw new Error("`controlFlowStorageCallCustomNode.getNode()` should returns array with `ExpressionStatement` node");
                    }
                    return statementNode.expression;
                }
            });
            if (!controlFlowStorage.getLength()) {
                return;
            }
            var controlFlowStorageCustomNode = new ControlFlowStorageNode_1.ControlFlowStorageNode(this.options);
            controlFlowStorageCustomNode.initialize(controlFlowStorage, controlFlowStorageCustomNodeName);
            NodeAppender_1.NodeAppender.prependNode(functionNode.body, controlFlowStorageCustomNode.getNode());
        }
    }]);

    return FunctionControlFlowTransformer;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
var FunctionControlFlowTransformer = FunctionControlFlowTransformer_1;
FunctionControlFlowTransformer.controlFlowReplacers = new Map([[NodeType_1.NodeType.BinaryExpression, BinaryExpressionControlFlowReplacer_1.BinaryExpressionControlFlowReplacer]]);
FunctionControlFlowTransformer = FunctionControlFlowTransformer_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], FunctionControlFlowTransformer);
exports.FunctionControlFlowTransformer = FunctionControlFlowTransformer;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var AbstractControlFlowReplacer = function () {
    function AbstractControlFlowReplacer(customNodesStorage, options) {
        _classCallCheck(this, AbstractControlFlowReplacer);

        this.customNodesStorage = customNodesStorage;
        this.options = options;
    }

    _createClass(AbstractControlFlowReplacer, null, [{
        key: "getStorageKey",
        value: function getStorageKey() {
            return Utils_1.Utils.getRandomGenerator().string({
                length: 3,
                pool: Utils_1.Utils.randomGeneratorPool
            });
        }
    }]);

    return AbstractControlFlowReplacer;
}();
AbstractControlFlowReplacer = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], AbstractControlFlowReplacer);
exports.AbstractControlFlowReplacer = AbstractControlFlowReplacer;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var Utils_1 = __webpack_require__(2);
var CatchClauseObfuscator = function (_AbstractNodeTransfor) {
    _inherits(CatchClauseObfuscator, _AbstractNodeTransfor);

    function CatchClauseObfuscator(customNodesStorage, replacersFactory, options) {
        _classCallCheck(this, CatchClauseObfuscator);

        var _this = _possibleConstructorReturn(this, (CatchClauseObfuscator.__proto__ || Object.getPrototypeOf(CatchClauseObfuscator)).call(this, customNodesStorage, options));

        _this.identifierReplacer = replacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.IdentifierReplacer);
        return _this;
    }

    _createClass(CatchClauseObfuscator, [{
        key: "transformNode",
        value: function transformNode(catchClauseNode) {
            this.identifierReplacer.setPrefix(Utils_1.Utils.getRandomGenerator().string({
                length: 5,
                pool: Utils_1.Utils.randomGeneratorPool
            }));
            this.storeCatchClauseParam(catchClauseNode);
            this.replaceCatchClauseParam(catchClauseNode);
        }
    }, {
        key: "storeCatchClauseParam",
        value: function storeCatchClauseParam(catchClauseNode) {
            var _this2 = this;

            NodeUtils_1.NodeUtils.typedTraverse(catchClauseNode.param, NodeType_1.NodeType.Identifier, {
                enter: function enter(node) {
                    return _this2.identifierReplacer.storeNames(node.name);
                }
            });
        }
    }, {
        key: "replaceCatchClauseParam",
        value: function replaceCatchClauseParam(catchClauseNode) {
            var _this3 = this;

            estraverse.replace(catchClauseNode, {
                enter: function enter(node, parentNode) {
                    if (Node_1.Node.isReplaceableIdentifierNode(node, parentNode)) {
                        node.name = _this3.identifierReplacer.replace(node.name);
                    }
                }
            });
        }
    }]);

    return CatchClauseObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
CatchClauseObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], CatchClauseObfuscator);
exports.CatchClauseObfuscator = CatchClauseObfuscator;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var Utils_1 = __webpack_require__(2);
var FunctionDeclarationObfuscator = function (_AbstractNodeTransfor) {
    _inherits(FunctionDeclarationObfuscator, _AbstractNodeTransfor);

    function FunctionDeclarationObfuscator(customNodesStorage, nodeObfuscatorsReplacersFactory, options) {
        _classCallCheck(this, FunctionDeclarationObfuscator);

        var _this = _possibleConstructorReturn(this, (FunctionDeclarationObfuscator.__proto__ || Object.getPrototypeOf(FunctionDeclarationObfuscator)).call(this, customNodesStorage, options));

        _this.identifierReplacer = nodeObfuscatorsReplacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.IdentifierReplacer);
        return _this;
    }

    _createClass(FunctionDeclarationObfuscator, [{
        key: "transformNode",
        value: function transformNode(functionDeclarationNode, parentNode) {
            this.identifierReplacer.setPrefix(Utils_1.Utils.getRandomGenerator().string({
                length: 5,
                pool: Utils_1.Utils.randomGeneratorPool
            }));
            var blockScopeOfFunctionDeclarationNode = NodeUtils_1.NodeUtils.getBlockScopeOfNode(functionDeclarationNode);
            if (blockScopeOfFunctionDeclarationNode.type === NodeType_1.NodeType.Program) {
                return;
            }
            this.storeFunctionName(functionDeclarationNode);
            this.replaceFunctionName(blockScopeOfFunctionDeclarationNode);
        }
    }, {
        key: "storeFunctionName",
        value: function storeFunctionName(functionDeclarationNode) {
            var _this2 = this;

            NodeUtils_1.NodeUtils.typedTraverse(functionDeclarationNode.id, NodeType_1.NodeType.Identifier, {
                enter: function enter(node) {
                    return _this2.identifierReplacer.storeNames(node.name);
                }
            });
        }
    }, {
        key: "replaceFunctionName",
        value: function replaceFunctionName(scopeNode) {
            var _this3 = this;

            estraverse.replace(scopeNode, {
                enter: function enter(node, parentNode) {
                    if (Node_1.Node.isReplaceableIdentifierNode(node, parentNode)) {
                        node.name = _this3.identifierReplacer.replace(node.name);
                    }
                }
            });
        }
    }]);

    return FunctionDeclarationObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
FunctionDeclarationObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], FunctionDeclarationObfuscator);
exports.FunctionDeclarationObfuscator = FunctionDeclarationObfuscator;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var Utils_1 = __webpack_require__(2);
var FunctionObfuscator = function (_AbstractNodeTransfor) {
    _inherits(FunctionObfuscator, _AbstractNodeTransfor);

    function FunctionObfuscator(customNodesStorage, nodeObfuscatorsReplacersFactory, options) {
        _classCallCheck(this, FunctionObfuscator);

        var _this = _possibleConstructorReturn(this, (FunctionObfuscator.__proto__ || Object.getPrototypeOf(FunctionObfuscator)).call(this, customNodesStorage, options));

        _this.identifierReplacer = nodeObfuscatorsReplacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.IdentifierReplacer);
        return _this;
    }

    _createClass(FunctionObfuscator, [{
        key: "transformNode",
        value: function transformNode(functionNode) {
            this.identifierReplacer.setPrefix(Utils_1.Utils.getRandomGenerator().string({
                length: 5,
                pool: Utils_1.Utils.randomGeneratorPool
            }));
            this.storeFunctionParams(functionNode);
            this.replaceFunctionParams(functionNode);
        }
    }, {
        key: "storeFunctionParams",
        value: function storeFunctionParams(functionNode) {
            var _this2 = this;

            functionNode.params.forEach(function (paramsNode) {
                NodeUtils_1.NodeUtils.typedTraverse(paramsNode, NodeType_1.NodeType.Identifier, {
                    enter: function enter(node) {
                        return _this2.identifierReplacer.storeNames(node.name);
                    }
                });
            });
        }
    }, {
        key: "replaceFunctionParams",
        value: function replaceFunctionParams(functionNode) {
            var _this3 = this;

            var traverseVisitor = {
                enter: function enter(node, parentNode) {
                    if (Node_1.Node.isReplaceableIdentifierNode(node, parentNode)) {
                        var newNodeName = _this3.identifierReplacer.replace(node.name);
                        if (node.name !== newNodeName) {
                            node.name = newNodeName;
                            node.obfuscated = true;
                        }
                    }
                }
            };
            functionNode.params.forEach(function (paramsNode) {
                return estraverse.replace(paramsNode, traverseVisitor);
            });
            estraverse.replace(functionNode.body, traverseVisitor);
        }
    }]);

    return FunctionObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
FunctionObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], FunctionObfuscator);
exports.FunctionObfuscator = FunctionObfuscator;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var Utils_1 = __webpack_require__(2);
var LabeledStatementObfuscator = function (_AbstractNodeTransfor) {
    _inherits(LabeledStatementObfuscator, _AbstractNodeTransfor);

    function LabeledStatementObfuscator(customNodesStorage, nodeObfuscatorsReplacersFactory, options) {
        _classCallCheck(this, LabeledStatementObfuscator);

        var _this = _possibleConstructorReturn(this, (LabeledStatementObfuscator.__proto__ || Object.getPrototypeOf(LabeledStatementObfuscator)).call(this, customNodesStorage, options));

        _this.identifierReplacer = nodeObfuscatorsReplacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.IdentifierReplacer);
        return _this;
    }

    _createClass(LabeledStatementObfuscator, [{
        key: "transformNode",
        value: function transformNode(labeledStatementNode) {
            this.identifierReplacer.setPrefix(Utils_1.Utils.getRandomGenerator().string({
                length: 5,
                pool: Utils_1.Utils.randomGeneratorPool
            }));
            this.storeLabeledStatementName(labeledStatementNode);
            this.replaceLabeledStatementName(labeledStatementNode);
        }
    }, {
        key: "storeLabeledStatementName",
        value: function storeLabeledStatementName(labeledStatementNode) {
            var _this2 = this;

            NodeUtils_1.NodeUtils.typedTraverse(labeledStatementNode.label, NodeType_1.NodeType.Identifier, {
                enter: function enter(node) {
                    return _this2.identifierReplacer.storeNames(node.name);
                }
            });
        }
    }, {
        key: "replaceLabeledStatementName",
        value: function replaceLabeledStatementName(labeledStatementNode) {
            var _this3 = this;

            estraverse.replace(labeledStatementNode, {
                enter: function enter(node, parentNode) {
                    if (Node_1.Node.isLabelIdentifierNode(node, parentNode)) {
                        node.name = _this3.identifierReplacer.replace(node.name);
                    }
                }
            });
        }
    }]);

    return LabeledStatementObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
LabeledStatementObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], LabeledStatementObfuscator);
exports.LabeledStatementObfuscator = LabeledStatementObfuscator;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var escodegen = __webpack_require__(14);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var LiteralObfuscator = function (_AbstractNodeTransfor) {
    _inherits(LiteralObfuscator, _AbstractNodeTransfor);

    function LiteralObfuscator(customNodesStorage, replacersFactory, options) {
        _classCallCheck(this, LiteralObfuscator);

        var _this = _possibleConstructorReturn(this, (LiteralObfuscator.__proto__ || Object.getPrototypeOf(LiteralObfuscator)).call(this, customNodesStorage, options));

        _this.replacersFactory = replacersFactory;
        return _this;
    }

    _createClass(LiteralObfuscator, [{
        key: "transformNode",
        value: function transformNode(literalNode, parentNode) {
            if (Node_1.Node.isPropertyNode(parentNode) && parentNode.key === literalNode) {
                return;
            }
            var content = void 0;
            switch (_typeof(literalNode.value)) {
                case 'boolean':
                    content = this.replacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.BooleanReplacer).replace(literalNode.value);
                    break;
                case 'number':
                    content = this.replacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.NumberLiteralReplacer).replace(literalNode.value);
                    break;
                case 'string':
                    content = this.replacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.StringLiteralReplacer).replace(literalNode.value);
                    break;
                default:
                    return;
            }
            literalNode['x-verbatim-property'] = {
                content: content,
                precedence: escodegen.Precedence.Primary
            };
        }
    }]);

    return LiteralObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
LiteralObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], LiteralObfuscator);
exports.LiteralObfuscator = LiteralObfuscator;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var escodegen = __webpack_require__(14);
var estraverse = __webpack_require__(6);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var MemberExpressionObfuscator = function (_AbstractNodeTransfor) {
    _inherits(MemberExpressionObfuscator, _AbstractNodeTransfor);

    function MemberExpressionObfuscator(customNodesStorage, replacersFactory, options) {
        _classCallCheck(this, MemberExpressionObfuscator);

        var _this = _possibleConstructorReturn(this, (MemberExpressionObfuscator.__proto__ || Object.getPrototypeOf(MemberExpressionObfuscator)).call(this, customNodesStorage, options));

        _this.stringLiteralReplacer = replacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.StringLiteralReplacer);
        return _this;
    }

    _createClass(MemberExpressionObfuscator, [{
        key: "transformNode",
        value: function transformNode(memberExpressionNode) {
            var _this2 = this;

            estraverse.traverse(memberExpressionNode.property, {
                enter: function enter(node, parentNode) {
                    if (Node_1.Node.isLiteralNode(node)) {
                        _this2.obfuscateLiteralProperty(node);
                        return;
                    }
                    if (Node_1.Node.isIdentifierNode(node)) {
                        if (memberExpressionNode.computed) {
                            return;
                        }
                        memberExpressionNode.computed = true;
                        _this2.obfuscateIdentifierProperty(node);
                    }
                }
            });
        }
    }, {
        key: "obfuscateIdentifierProperty",
        value: function obfuscateIdentifierProperty(node) {
            var nodeValue = node.name;
            var literalNode = {
                raw: "'" + nodeValue + "'",
                'x-verbatim-property': {
                    content: this.stringLiteralReplacer.replace(nodeValue),
                    precedence: escodegen.Precedence.Primary
                },
                type: NodeType_1.NodeType.Literal,
                value: nodeValue
            };
            delete node.name;
            Object.assign(node, literalNode);
        }
    }, {
        key: "obfuscateLiteralProperty",
        value: function obfuscateLiteralProperty(node) {
            if (typeof node.value === 'string' && !node['x-verbatim-property']) {
                node['x-verbatim-property'] = {
                    content: this.stringLiteralReplacer.replace(node.value),
                    precedence: escodegen.Precedence.Primary
                };
            }
        }
    }]);

    return MemberExpressionObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
MemberExpressionObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], MemberExpressionObfuscator);
exports.MemberExpressionObfuscator = MemberExpressionObfuscator;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var Utils_1 = __webpack_require__(2);
var MethodDefinitionObfuscator_1 = function (_AbstractNodeTransfor) {
    _inherits(MethodDefinitionObfuscator, _AbstractNodeTransfor);

    function MethodDefinitionObfuscator(customNodesStorage, replacersFactory, options) {
        _classCallCheck(this, MethodDefinitionObfuscator);

        var _this = _possibleConstructorReturn(this, (MethodDefinitionObfuscator.__proto__ || Object.getPrototypeOf(MethodDefinitionObfuscator)).call(this, customNodesStorage, options));

        _this.stringLiteralReplacer = replacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.StringLiteralReplacer);
        return _this;
    }

    _createClass(MethodDefinitionObfuscator, [{
        key: "transformNode",
        value: function transformNode(methodDefinitionNode, parentNode) {
            this.replaceMethodName(methodDefinitionNode);
        }
    }, {
        key: "replaceMethodName",
        value: function replaceMethodName(methodDefinitionNode) {
            var _this2 = this;

            estraverse.replace(methodDefinitionNode.key, {
                enter: function enter(node) {
                    if (Node_1.Node.isIdentifierNode(node) && !Utils_1.Utils.arrayContains(MethodDefinitionObfuscator_1.ignoredNames, node.name) && methodDefinitionNode.computed === false) {
                        methodDefinitionNode.computed = true;
                        node.name = _this2.stringLiteralReplacer.replace(node.name);
                        return;
                    }
                    return estraverse.VisitorOption.Skip;
                }
            });
        }
    }]);

    return MethodDefinitionObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
var MethodDefinitionObfuscator = MethodDefinitionObfuscator_1;
MethodDefinitionObfuscator.ignoredNames = ['constructor'];
MethodDefinitionObfuscator = MethodDefinitionObfuscator_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], MethodDefinitionObfuscator);
exports.MethodDefinitionObfuscator = MethodDefinitionObfuscator;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var escodegen = __webpack_require__(14);
var estraverse = __webpack_require__(6);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var Utils_1 = __webpack_require__(2);
var ObjectExpressionObfuscator = function (_AbstractNodeTransfor) {
    _inherits(ObjectExpressionObfuscator, _AbstractNodeTransfor);

    function ObjectExpressionObfuscator(customNodesStorage, options) {
        _classCallCheck(this, ObjectExpressionObfuscator);

        return _possibleConstructorReturn(this, (ObjectExpressionObfuscator.__proto__ || Object.getPrototypeOf(ObjectExpressionObfuscator)).call(this, customNodesStorage, options));
    }

    _createClass(ObjectExpressionObfuscator, [{
        key: "transformNode",
        value: function transformNode(objectExpressionNode) {
            var _this2 = this;

            objectExpressionNode.properties.forEach(function (property) {
                if (property.shorthand) {
                    property.shorthand = false;
                }
                estraverse.traverse(property.key, {
                    enter: function enter(node, parentNode) {
                        if (Node_1.Node.isLiteralNode(node)) {
                            _this2.obfuscateLiteralPropertyKey(node);
                            return;
                        }
                        if (Node_1.Node.isIdentifierNode(node)) {
                            _this2.obfuscateIdentifierPropertyKey(node);
                        }
                    }
                });
            });
        }
    }, {
        key: "obfuscateLiteralPropertyKey",
        value: function obfuscateLiteralPropertyKey(node) {
            if (typeof node.value === 'string' && !node['x-verbatim-property']) {
                node['x-verbatim-property'] = {
                    content: "'" + Utils_1.Utils.stringToUnicodeEscapeSequence(node.value) + "'",
                    precedence: escodegen.Precedence.Primary
                };
            }
        }
    }, {
        key: "obfuscateIdentifierPropertyKey",
        value: function obfuscateIdentifierPropertyKey(node) {
            var nodeValue = node.name;
            var literalNode = {
                raw: "'" + nodeValue + "'",
                'x-verbatim-property': {
                    content: "'" + Utils_1.Utils.stringToUnicodeEscapeSequence(nodeValue) + "'",
                    precedence: escodegen.Precedence.Primary
                },
                type: NodeType_1.NodeType.Literal,
                value: nodeValue
            };
            delete node.name;
            Object.assign(node, literalNode);
        }
    }]);

    return ObjectExpressionObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
ObjectExpressionObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], ObjectExpressionObfuscator);
exports.ObjectExpressionObfuscator = ObjectExpressionObfuscator;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var NodeObfuscatorsReplacers_1 = __webpack_require__(12);
var NodeType_1 = __webpack_require__(9);
var AbstractNodeTransformer_1 = __webpack_require__(11);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var Utils_1 = __webpack_require__(2);
var VariableDeclarationObfuscator = function (_AbstractNodeTransfor) {
    _inherits(VariableDeclarationObfuscator, _AbstractNodeTransfor);

    function VariableDeclarationObfuscator(customNodesStorage, replacersFactory, options) {
        _classCallCheck(this, VariableDeclarationObfuscator);

        var _this = _possibleConstructorReturn(this, (VariableDeclarationObfuscator.__proto__ || Object.getPrototypeOf(VariableDeclarationObfuscator)).call(this, customNodesStorage, options));

        _this.identifierReplacer = replacersFactory(NodeObfuscatorsReplacers_1.NodeObfuscatorsReplacers.IdentifierReplacer);
        return _this;
    }

    _createClass(VariableDeclarationObfuscator, [{
        key: "transformNode",
        value: function transformNode(variableDeclarationNode, parentNode) {
            this.identifierReplacer.setPrefix(Utils_1.Utils.getRandomGenerator().string({
                length: 5,
                pool: Utils_1.Utils.randomGeneratorPool
            }));
            var blockScopeOfVariableDeclarationNode = NodeUtils_1.NodeUtils.getBlockScopeOfNode(variableDeclarationNode);
            if (blockScopeOfVariableDeclarationNode.type === NodeType_1.NodeType.Program) {
                return;
            }
            var scopeNode = variableDeclarationNode.kind === 'var' ? blockScopeOfVariableDeclarationNode : parentNode;
            this.storeVariableNames(variableDeclarationNode);
            this.replaceVariableNames(scopeNode);
        }
    }, {
        key: "storeVariableNames",
        value: function storeVariableNames(variableDeclarationNode) {
            var _this2 = this;

            variableDeclarationNode.declarations.forEach(function (declarationNode) {
                NodeUtils_1.NodeUtils.typedTraverse(declarationNode.id, NodeType_1.NodeType.Identifier, {
                    enter: function enter(node) {
                        return _this2.identifierReplacer.storeNames(node.name);
                    }
                });
            });
        }
    }, {
        key: "replaceVariableNames",
        value: function replaceVariableNames(scopeNode) {
            var _this3 = this;

            estraverse.replace(scopeNode, {
                enter: function enter(node, parentNode) {
                    if (!node.obfuscated && Node_1.Node.isReplaceableIdentifierNode(node, parentNode)) {
                        node.name = _this3.identifierReplacer.replace(node.name);
                    }
                }
            });
        }
    }]);

    return VariableDeclarationObfuscator;
}(AbstractNodeTransformer_1.AbstractNodeTransformer);
VariableDeclarationObfuscator = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<IReplacer>'])), __param(2, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Function, Object])], VariableDeclarationObfuscator);
exports.VariableDeclarationObfuscator = VariableDeclarationObfuscator;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var JSFuck_1 = __webpack_require__(22);
var AbstractReplacer_1 = __webpack_require__(17);
var BooleanLiteralReplacer = function (_AbstractReplacer_1$A) {
    _inherits(BooleanLiteralReplacer, _AbstractReplacer_1$A);

    function BooleanLiteralReplacer(customNodesStorage, options) {
        _classCallCheck(this, BooleanLiteralReplacer);

        return _possibleConstructorReturn(this, (BooleanLiteralReplacer.__proto__ || Object.getPrototypeOf(BooleanLiteralReplacer)).call(this, customNodesStorage, options));
    }

    _createClass(BooleanLiteralReplacer, [{
        key: "replace",
        value: function replace(nodeValue) {
            return nodeValue ? JSFuck_1.JSFuck.True : JSFuck_1.JSFuck.False;
        }
    }]);

    return BooleanLiteralReplacer;
}(AbstractReplacer_1.AbstractReplacer);
BooleanLiteralReplacer = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], BooleanLiteralReplacer);
exports.BooleanLiteralReplacer = BooleanLiteralReplacer;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var AbstractReplacer_1 = __webpack_require__(17);
var Utils_1 = __webpack_require__(2);
var IdentifierReplacer = function (_AbstractReplacer_1$A) {
    _inherits(IdentifierReplacer, _AbstractReplacer_1$A);

    function IdentifierReplacer(customNodesStorage, options) {
        _classCallCheck(this, IdentifierReplacer);

        var _this = _possibleConstructorReturn(this, (IdentifierReplacer.__proto__ || Object.getPrototypeOf(IdentifierReplacer)).call(this, customNodesStorage, options));

        _this.namesMap = new Map();
        return _this;
    }

    _createClass(IdentifierReplacer, [{
        key: "replace",
        value: function replace(nodeValue) {
            var obfuscatedIdentifierName = this.namesMap.get(nodeValue + "-" + this.uniquePrefix);
            if (!obfuscatedIdentifierName) {
                return nodeValue;
            }
            return obfuscatedIdentifierName;
        }
    }, {
        key: "setPrefix",
        value: function setPrefix(uniquePrefix) {
            this.uniquePrefix = uniquePrefix;
        }
    }, {
        key: "storeNames",
        value: function storeNames(nodeName) {
            if (!this.uniquePrefix) {
                throw new Error('`uniquePrefix` is `undefined`. Set it before `storeNames`');
            }
            if (!this.isReservedName(nodeName)) {
                this.namesMap.set(nodeName + "-" + this.uniquePrefix, Utils_1.Utils.getRandomVariableName());
            }
        }
    }, {
        key: "isReservedName",
        value: function isReservedName(name) {
            return this.options.reservedNames.some(function (reservedName) {
                return new RegExp(reservedName, 'g').test(name);
            });
        }
    }]);

    return IdentifierReplacer;
}(AbstractReplacer_1.AbstractReplacer);
IdentifierReplacer = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], IdentifierReplacer);
exports.IdentifierReplacer = IdentifierReplacer;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var AbstractReplacer_1 = __webpack_require__(17);
var Utils_1 = __webpack_require__(2);
var NumberLiteralReplacer = function (_AbstractReplacer_1$A) {
    _inherits(NumberLiteralReplacer, _AbstractReplacer_1$A);

    function NumberLiteralReplacer(customNodesStorage, options) {
        _classCallCheck(this, NumberLiteralReplacer);

        return _possibleConstructorReturn(this, (NumberLiteralReplacer.__proto__ || Object.getPrototypeOf(NumberLiteralReplacer)).call(this, customNodesStorage, options));
    }

    _createClass(NumberLiteralReplacer, [{
        key: "replace",
        value: function replace(nodeValue) {
            if (!Utils_1.Utils.isInteger(nodeValue)) {
                return String(nodeValue);
            }
            return "" + Utils_1.Utils.hexadecimalPrefix + Utils_1.Utils.decToHex(nodeValue);
        }
    }]);

    return NumberLiteralReplacer;
}(AbstractReplacer_1.AbstractReplacer);
NumberLiteralReplacer = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], NumberLiteralReplacer);
exports.NumberLiteralReplacer = NumberLiteralReplacer;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var StringArrayEncoding_1 = __webpack_require__(20);
var AbstractReplacer_1 = __webpack_require__(17);
var Utils_1 = __webpack_require__(2);
var StringLiteralReplacer_1 = function (_AbstractReplacer_1$A) {
    _inherits(StringLiteralReplacer, _AbstractReplacer_1$A);

    function StringLiteralReplacer(customNodesStorage, options) {
        _classCallCheck(this, StringLiteralReplacer);

        return _possibleConstructorReturn(this, (StringLiteralReplacer.__proto__ || Object.getPrototypeOf(StringLiteralReplacer)).call(this, customNodesStorage, options));
    }

    _createClass(StringLiteralReplacer, [{
        key: "replace",
        value: function replace(nodeValue) {
            var replaceWithStringArrayFlag = nodeValue.length >= StringLiteralReplacer_1.minimumLengthForStringArray && Utils_1.Utils.getRandomFloat(0, 1) <= this.options.stringArrayThreshold;
            if (this.options.stringArray && replaceWithStringArrayFlag) {
                return this.replaceStringLiteralWithStringArrayCall(nodeValue);
            }
            return "'" + Utils_1.Utils.stringToUnicodeEscapeSequence(nodeValue) + "'";
        }
    }, {
        key: "replaceStringLiteralWithStringArrayCall",
        value: function replaceStringLiteralWithStringArrayCall(value) {
            var stringArrayNode = this.customNodesStorage.get('stringArrayNode');
            var rc4Key = '';
            switch (this.options.stringArrayEncoding) {
                case StringArrayEncoding_1.StringArrayEncoding.base64:
                    value = Utils_1.Utils.btoa(value);
                    break;
                case StringArrayEncoding_1.StringArrayEncoding.rc4:
                    rc4Key = Utils_1.Utils.getRandomGenerator().pickone(StringLiteralReplacer_1.rc4Keys);
                    value = Utils_1.Utils.btoa(Utils_1.Utils.rc4(value, rc4Key));
                    break;
            }
            if (this.options.unicodeEscapeSequence) {
                value = Utils_1.Utils.stringToUnicodeEscapeSequence(value);
            }
            var stringArray = stringArrayNode.getNodeData();
            var indexOfExistingValue = stringArray.getKeyOf(value);
            var indexOfValue = void 0;
            if (indexOfExistingValue >= 0) {
                indexOfValue = indexOfExistingValue;
            } else {
                indexOfValue = stringArray.getLength();
                stringArray.set(null, value);
            }
            var stringArrayCallsWrapper = this.customNodesStorage.get('stringArrayCallsWrapper');
            var hexadecimalIndex = "" + Utils_1.Utils.hexadecimalPrefix + Utils_1.Utils.decToHex(indexOfValue);
            if (this.options.stringArrayEncoding === StringArrayEncoding_1.StringArrayEncoding.rc4) {
                return stringArrayCallsWrapper.getNodeIdentifier() + "('" + hexadecimalIndex + "', '" + Utils_1.Utils.stringToUnicodeEscapeSequence(rc4Key) + "')";
            }
            return stringArrayCallsWrapper.getNodeIdentifier() + "('" + hexadecimalIndex + "')";
        }
    }]);

    return StringLiteralReplacer;
}(AbstractReplacer_1.AbstractReplacer);
var StringLiteralReplacer = StringLiteralReplacer_1;
StringLiteralReplacer.minimumLengthForStringArray = 3;
StringLiteralReplacer.rc4Keys = Utils_1.Utils.getRandomGenerator().n(function () {
    return Utils_1.Utils.getRandomGenerator().string({ length: 4 });
}, 50);
StringLiteralReplacer = StringLiteralReplacer_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['IStorage<ICustomNode>'])), __param(1, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object, Object])], StringLiteralReplacer);
exports.StringLiteralReplacer = StringLiteralReplacer;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var class_validator_1 = __webpack_require__(108);
var DefaultPreset_1 = __webpack_require__(26);
var OptionsNormalizer_1 = __webpack_require__(77);
var ValidationErrorsFormatter_1 = __webpack_require__(78);
var Options_1 = function Options(inputOptions) {
    _classCallCheck(this, Options);

    Object.assign(this, DefaultPreset_1.DEFAULT_PRESET, inputOptions);
    var errors = class_validator_1.validateSync(this, Options_1.validatorOptions);
    if (errors.length) {
        throw new ReferenceError("Validation failed. errors:\n" + ValidationErrorsFormatter_1.ValidationErrorsFormatter.format(errors));
    }
    Object.assign(this, OptionsNormalizer_1.OptionsNormalizer.normalizeOptions(this));
};
var Options = Options_1;
Options.validatorOptions = {
    validationError: {
        target: false
    }
};
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "compact", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "controlFlowFlattening", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "debugProtection", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "debugProtectionInterval", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "disableConsoleOutput", void 0);
__decorate([class_validator_1.IsArray(), class_validator_1.ArrayUnique(), class_validator_1.IsString({
    each: true
}), __metadata('design:type', Array)], Options.prototype, "domainLock", void 0);
__decorate([class_validator_1.IsArray(), class_validator_1.ArrayUnique(), class_validator_1.IsString({
    each: true
}), __metadata('design:type', Array)], Options.prototype, "reservedNames", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "rotateStringArray", void 0);
__decorate([class_validator_1.IsNumber(), __metadata('design:type', Number)], Options.prototype, "seed", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "selfDefending", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "sourceMap", void 0);
__decorate([class_validator_1.IsString(), class_validator_1.ValidateIf(function (options) {
    return Boolean(options.sourceMapBaseUrl);
}), class_validator_1.IsUrl({
    require_protocol: true,
    require_valid_protocol: true
}), __metadata('design:type', String)], Options.prototype, "sourceMapBaseUrl", void 0);
__decorate([class_validator_1.IsString(), __metadata('design:type', String)], Options.prototype, "sourceMapFileName", void 0);
__decorate([class_validator_1.IsIn(['inline', 'separate']), __metadata('design:type', String)], Options.prototype, "sourceMapMode", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "stringArray", void 0);
__decorate([class_validator_1.IsIn([true, false, 'base64', 'rc4']), __metadata('design:type', Object)], Options.prototype, "stringArrayEncoding", void 0);
__decorate([class_validator_1.IsNumber(), class_validator_1.Min(0), class_validator_1.Max(1), __metadata('design:type', Number)], Options.prototype, "stringArrayThreshold", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "unicodeEscapeSequence", void 0);
Options = Options_1 = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [Object])], Options);
exports.Options = Options;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils_1 = __webpack_require__(2);

var OptionsNormalizer = function () {
    function OptionsNormalizer() {
        _classCallCheck(this, OptionsNormalizer);
    }

    _createClass(OptionsNormalizer, null, [{
        key: 'normalizeOptions',
        value: function normalizeOptions(options) {
            var normalizedOptions = Object.assign({}, options);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = OptionsNormalizer.normalizerRules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var normalizerRule = _step.value;

                    normalizedOptions = normalizerRule(normalizedOptions);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return normalizedOptions;
        }
    }, {
        key: 'domainLockRule',
        value: function domainLockRule(options) {
            if (options.domainLock.length) {
                var normalizedDomains = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = options.domainLock[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var domain = _step2.value;

                        normalizedDomains.push(Utils_1.Utils.extractDomainFromUrl(domain));
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                Object.assign(options, {
                    domainLock: normalizedDomains
                });
            }
            return options;
        }
    }, {
        key: 'selfDefendingRule',
        value: function selfDefendingRule(options) {
            if (options.selfDefending) {
                Object.assign(options, OptionsNormalizer.SELF_DEFENDING_OPTIONS);
            }
            return options;
        }
    }, {
        key: 'sourceMapBaseUrlRule',
        value: function sourceMapBaseUrlRule(options) {
            var sourceMapBaseUrl = options.sourceMapBaseUrl;
            if (!options.sourceMapFileName) {
                Object.assign(options, {
                    sourceMapBaseUrl: ''
                });
                return options;
            }
            if (sourceMapBaseUrl && !sourceMapBaseUrl.endsWith('/')) {
                Object.assign(options, {
                    sourceMapBaseUrl: sourceMapBaseUrl + '/'
                });
            }
            return options;
        }
    }, {
        key: 'sourceMapFileNameRule',
        value: function sourceMapFileNameRule(options) {
            var sourceMapFileName = options.sourceMapFileName;
            if (sourceMapFileName) {
                sourceMapFileName = sourceMapFileName.replace(/^\/+/, '').split('.')[0];
                Object.assign(options, {
                    sourceMapFileName: sourceMapFileName + '.js.map'
                });
            }
            return options;
        }
    }, {
        key: 'stringArrayRule',
        value: function stringArrayRule(options) {
            if (!options.stringArray) {
                Object.assign(options, OptionsNormalizer.DISABLED_UNICODE_ARRAY_OPTIONS);
            }
            return options;
        }
    }, {
        key: 'stringArrayEncodingRule',
        value: function stringArrayEncodingRule(options) {
            if (options.stringArrayEncoding === true) {
                Object.assign(options, OptionsNormalizer.UNICODE_ARRAY_ENCODING_OPTIONS);
            }
            return options;
        }
    }, {
        key: 'stringArrayThresholdRule',
        value: function stringArrayThresholdRule(options) {
            if (options.stringArrayThreshold === 0) {
                Object.assign(options, OptionsNormalizer.DISABLED_UNICODE_ARRAY_OPTIONS);
            }
            return options;
        }
    }]);

    return OptionsNormalizer;
}();

OptionsNormalizer.DISABLED_UNICODE_ARRAY_OPTIONS = {
    rotateStringArray: false,
    stringArray: false,
    stringArrayEncoding: false,
    stringArrayThreshold: 0
};
OptionsNormalizer.SELF_DEFENDING_OPTIONS = {
    compact: true,
    selfDefending: true
};
OptionsNormalizer.UNICODE_ARRAY_ENCODING_OPTIONS = {
    stringArrayEncoding: 'base64'
};
OptionsNormalizer.normalizerRules = [OptionsNormalizer.domainLockRule, OptionsNormalizer.selfDefendingRule, OptionsNormalizer.sourceMapBaseUrlRule, OptionsNormalizer.sourceMapFileNameRule, OptionsNormalizer.stringArrayRule, OptionsNormalizer.stringArrayEncodingRule, OptionsNormalizer.stringArrayThresholdRule];
exports.OptionsNormalizer = OptionsNormalizer;

/***/ },
/* 78 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationErrorsFormatter = function () {
    function ValidationErrorsFormatter() {
        _classCallCheck(this, ValidationErrorsFormatter);
    }

    _createClass(ValidationErrorsFormatter, null, [{
        key: "format",
        value: function format(validationErrors) {
            var errorsArray = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = validationErrors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var error = _step.value;

                    errorsArray.push(ValidationErrorsFormatter.formatError(error));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return errorsArray.join('\n');
        }
    }, {
        key: "formatError",
        value: function formatError(validationError) {
            var constraints = validationError.constraints;
            var errorString = "`" + validationError.property + "` errors:\n";
            for (var constraint in constraints) {
                if (!constraints.hasOwnProperty(constraint)) {
                    continue;
                }
                errorString += "    - " + constraints[constraint] + "\n";
            }
            return errorString;
        }
    }]);

    return ValidationErrorsFormatter;
}();

exports.ValidationErrorsFormatter = ValidationErrorsFormatter;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var estraverse = __webpack_require__(6);
var CalleeDataExtractors_1 = __webpack_require__(23);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var StackTraceAnalyzer_1 = function () {
    function StackTraceAnalyzer(calleeDataExtractorsFactory) {
        _classCallCheck(this, StackTraceAnalyzer);

        this.calleeDataExtractorsFactory = calleeDataExtractorsFactory;
    }

    _createClass(StackTraceAnalyzer, [{
        key: "analyze",
        value: function analyze(blockScopeBody) {
            return this.analyzeRecursive(blockScopeBody);
        }
    }, {
        key: "analyzeRecursive",
        value: function analyzeRecursive(blockScopeBody) {
            var _this = this;

            var limitIndex = StackTraceAnalyzer_1.getLimitIndex(blockScopeBody.length);
            var stackTraceData = [];
            var blockScopeBodyLength = blockScopeBody.length;

            var _loop = function _loop(index) {
                if (index > limitIndex) {
                    return "break";
                }
                var blockScopeBodyNode = blockScopeBody[index];
                estraverse.traverse(blockScopeBodyNode, {
                    enter: function enter(node) {
                        if (!Node_1.Node.isCallExpressionNode(node) || blockScopeBodyNode.parentNode !== NodeUtils_1.NodeUtils.getBlockScopeOfNode(node)) {
                            return;
                        }
                        _this.analyzeCallExpressionNode(stackTraceData, blockScopeBody, node);
                    }
                });
            };

            for (var index = 0; index < blockScopeBodyLength; index++) {
                var _ret = _loop(index);

                if (_ret === "break") break;
            }
            return stackTraceData;
        }
    }, {
        key: "analyzeCallExpressionNode",
        value: function analyzeCallExpressionNode(stackTraceData, blockScopeBody, callExpressionNode) {
            var _this2 = this;

            StackTraceAnalyzer_1.calleeDataExtractorsList.forEach(function (calleeDataExtractorName) {
                var calleeData = _this2.calleeDataExtractorsFactory(calleeDataExtractorName).extract(blockScopeBody, callExpressionNode.callee);
                if (!calleeData) {
                    return;
                }
                stackTraceData.push(Object.assign({}, calleeData, {
                    stackTrace: _this2.analyzeRecursive(calleeData.callee.body)
                }));
            });
        }
    }], [{
        key: "getLimitIndex",
        value: function getLimitIndex(blockScopeBodyLength) {
            var lastIndex = blockScopeBodyLength - 1;
            var limitThresholdActivationIndex = StackTraceAnalyzer_1.limitThresholdActivationLength - 1;
            var limitIndex = lastIndex;
            if (lastIndex > limitThresholdActivationIndex) {
                limitIndex = Math.round(limitThresholdActivationIndex + lastIndex * StackTraceAnalyzer_1.limitThreshold);
                if (limitIndex > lastIndex) {
                    limitIndex = lastIndex;
                }
            }
            return limitIndex;
        }
    }]);

    return StackTraceAnalyzer;
}();
var StackTraceAnalyzer = StackTraceAnalyzer_1;
StackTraceAnalyzer.calleeDataExtractorsList = [CalleeDataExtractors_1.CalleeDataExtractors.FunctionDeclarationCalleeDataExtractor, CalleeDataExtractors_1.CalleeDataExtractors.FunctionExpressionCalleeDataExtractor, CalleeDataExtractors_1.CalleeDataExtractors.ObjectExpressionCalleeDataExtractor];
StackTraceAnalyzer.limitThresholdActivationLength = 25;
StackTraceAnalyzer.limitThreshold = 0.002;
StackTraceAnalyzer = StackTraceAnalyzer_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers['Factory<ICalleeDataExtractor>'])), __metadata('design:paramtypes', [Function])], StackTraceAnalyzer);
exports.StackTraceAnalyzer = StackTraceAnalyzer;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var estraverse = __webpack_require__(6);
var AbstractCalleeDataExtractor_1 = __webpack_require__(21);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var FunctionDeclarationCalleeDataExtractor = function (_AbstractCalleeDataEx) {
    _inherits(FunctionDeclarationCalleeDataExtractor, _AbstractCalleeDataEx);

    function FunctionDeclarationCalleeDataExtractor() {
        _classCallCheck(this, FunctionDeclarationCalleeDataExtractor);

        return _possibleConstructorReturn(this, (FunctionDeclarationCalleeDataExtractor.__proto__ || Object.getPrototypeOf(FunctionDeclarationCalleeDataExtractor)).apply(this, arguments));
    }

    _createClass(FunctionDeclarationCalleeDataExtractor, [{
        key: "extract",
        value: function extract(blockScopeBody, callee) {
            var calleeBlockStatement = null;
            if (Node_1.Node.isIdentifierNode(callee)) {
                calleeBlockStatement = this.getCalleeBlockStatement(NodeUtils_1.NodeUtils.getBlockScopeOfNode(blockScopeBody[0]), callee.name);
            }
            if (!calleeBlockStatement) {
                return null;
            }
            return {
                callee: calleeBlockStatement,
                name: callee.name
            };
        }
    }, {
        key: "getCalleeBlockStatement",
        value: function getCalleeBlockStatement(node, name) {
            var calleeBlockStatement = null;
            estraverse.traverse(node, {
                enter: function enter(node) {
                    if (Node_1.Node.isFunctionDeclarationNode(node) && node.id.name === name) {
                        calleeBlockStatement = node.body;
                        return estraverse.VisitorOption.Break;
                    }
                }
            });
            return calleeBlockStatement;
        }
    }]);

    return FunctionDeclarationCalleeDataExtractor;
}(AbstractCalleeDataExtractor_1.AbstractCalleeDataExtractor);
FunctionDeclarationCalleeDataExtractor = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], FunctionDeclarationCalleeDataExtractor);
exports.FunctionDeclarationCalleeDataExtractor = FunctionDeclarationCalleeDataExtractor;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var estraverse = __webpack_require__(6);
var AbstractCalleeDataExtractor_1 = __webpack_require__(21);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var FunctionExpressionCalleeDataExtractor = function (_AbstractCalleeDataEx) {
    _inherits(FunctionExpressionCalleeDataExtractor, _AbstractCalleeDataEx);

    function FunctionExpressionCalleeDataExtractor() {
        _classCallCheck(this, FunctionExpressionCalleeDataExtractor);

        return _possibleConstructorReturn(this, (FunctionExpressionCalleeDataExtractor.__proto__ || Object.getPrototypeOf(FunctionExpressionCalleeDataExtractor)).apply(this, arguments));
    }

    _createClass(FunctionExpressionCalleeDataExtractor, [{
        key: "extract",
        value: function extract(blockScopeBody, callee) {
            var calleeBlockStatement = null;
            if (Node_1.Node.isIdentifierNode(callee)) {
                calleeBlockStatement = this.getCalleeBlockStatement(NodeUtils_1.NodeUtils.getBlockScopeOfNode(blockScopeBody[0]), callee.name);
            }
            if (Node_1.Node.isFunctionExpressionNode(callee)) {
                calleeBlockStatement = callee.body;
            }
            if (!calleeBlockStatement) {
                return null;
            }
            return {
                callee: calleeBlockStatement,
                name: callee.name || null
            };
        }
    }, {
        key: "getCalleeBlockStatement",
        value: function getCalleeBlockStatement(node, name) {
            var calleeBlockStatement = null;
            estraverse.traverse(node, {
                enter: function enter(node, parentNode) {
                    if (Node_1.Node.isFunctionExpressionNode(node) && Node_1.Node.isVariableDeclaratorNode(parentNode) && Node_1.Node.isIdentifierNode(parentNode.id) && parentNode.id.name === name) {
                        calleeBlockStatement = node.body;
                        return estraverse.VisitorOption.Break;
                    }
                }
            });
            return calleeBlockStatement;
        }
    }]);

    return FunctionExpressionCalleeDataExtractor;
}(AbstractCalleeDataExtractor_1.AbstractCalleeDataExtractor);
FunctionExpressionCalleeDataExtractor = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], FunctionExpressionCalleeDataExtractor);
exports.FunctionExpressionCalleeDataExtractor = FunctionExpressionCalleeDataExtractor;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = __webpack_require__(0);
var estraverse = __webpack_require__(6);
var Node_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(10);
var AbstractCalleeDataExtractor_1 = __webpack_require__(21);
var ObjectExpressionCalleeDataExtractor = function (_AbstractCalleeDataEx) {
    _inherits(ObjectExpressionCalleeDataExtractor, _AbstractCalleeDataEx);

    function ObjectExpressionCalleeDataExtractor() {
        _classCallCheck(this, ObjectExpressionCalleeDataExtractor);

        return _possibleConstructorReturn(this, (ObjectExpressionCalleeDataExtractor.__proto__ || Object.getPrototypeOf(ObjectExpressionCalleeDataExtractor)).apply(this, arguments));
    }

    _createClass(ObjectExpressionCalleeDataExtractor, [{
        key: "extract",
        value: function extract(blockScopeBody, callee) {
            var calleeBlockStatement = null,
                functionExpressionName = null;
            if (Node_1.Node.isMemberExpressionNode(callee)) {
                var objectMembersCallsChain = this.createObjectMembersCallsChain([], callee);
                if (!objectMembersCallsChain.length) {
                    return null;
                }
                functionExpressionName = objectMembersCallsChain[objectMembersCallsChain.length - 1];
                calleeBlockStatement = this.getCalleeBlockStatement(NodeUtils_1.NodeUtils.getBlockScopeOfNode(blockScopeBody[0]), objectMembersCallsChain);
            }
            if (!calleeBlockStatement) {
                return null;
            }
            return {
                callee: calleeBlockStatement,
                name: functionExpressionName
            };
        }
    }, {
        key: "createObjectMembersCallsChain",
        value: function createObjectMembersCallsChain(currentChain, memberExpression) {
            if (Node_1.Node.isIdentifierNode(memberExpression.property) && memberExpression.computed === false) {
                currentChain.unshift(memberExpression.property.name);
            } else if (Node_1.Node.isLiteralNode(memberExpression.property) && (typeof memberExpression.property.value === 'string' || typeof memberExpression.property.value === 'number')) {
                currentChain.unshift(memberExpression.property.value);
            } else {
                return currentChain;
            }
            if (Node_1.Node.isMemberExpressionNode(memberExpression.object)) {
                return this.createObjectMembersCallsChain(currentChain, memberExpression.object);
            } else if (Node_1.Node.isIdentifierNode(memberExpression.object)) {
                currentChain.unshift(memberExpression.object.name);
            }
            return currentChain;
        }
    }, {
        key: "getCalleeBlockStatement",
        value: function getCalleeBlockStatement(node, objectMembersCallsChain) {
            var _this2 = this;

            var objectName = objectMembersCallsChain.shift();
            if (!objectName) {
                return null;
            }
            var calleeBlockStatement = null;
            estraverse.traverse(node, {
                enter: function enter(node, parentNode) {
                    if (Node_1.Node.isVariableDeclaratorNode(node) && Node_1.Node.isIdentifierNode(node.id) && node.init && Node_1.Node.isObjectExpressionNode(node.init) && node.id.name === objectName) {
                        calleeBlockStatement = _this2.findCalleeBlockStatement(node.init.properties, objectMembersCallsChain);
                        return estraverse.VisitorOption.Break;
                    }
                }
            });
            return calleeBlockStatement;
        }
    }, {
        key: "findCalleeBlockStatement",
        value: function findCalleeBlockStatement(objectExpressionProperties, objectMembersCallsChain) {
            var nextItemInCallsChain = objectMembersCallsChain.shift();
            if (!nextItemInCallsChain) {
                return null;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = objectExpressionProperties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var propertyNode = _step.value;

                    var isTargetPropertyNodeWithIdentifierKey = Node_1.Node.isIdentifierNode(propertyNode.key) && propertyNode.key.name === nextItemInCallsChain;
                    var isTargetPropertyNodeWithLiteralKey = Node_1.Node.isLiteralNode(propertyNode.key) && Boolean(propertyNode.key.value) && propertyNode.key.value === nextItemInCallsChain;
                    if (!isTargetPropertyNodeWithIdentifierKey && !isTargetPropertyNodeWithLiteralKey) {
                        continue;
                    }
                    if (Node_1.Node.isObjectExpressionNode(propertyNode.value)) {
                        return this.findCalleeBlockStatement(propertyNode.value.properties, objectMembersCallsChain);
                    }
                    if (Node_1.Node.isFunctionExpressionNode(propertyNode.value)) {
                        return propertyNode.value.body;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        }
    }]);

    return ObjectExpressionCalleeDataExtractor;
}(AbstractCalleeDataExtractor_1.AbstractCalleeDataExtractor);
ObjectExpressionCalleeDataExtractor = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], ObjectExpressionCalleeDataExtractor);
exports.ObjectExpressionCalleeDataExtractor = ObjectExpressionCalleeDataExtractor;

/***/ },
/* 83 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayStorage = function () {
    function ArrayStorage() {
        _classCallCheck(this, ArrayStorage);

        this.storage = [];
    }

    _createClass(ArrayStorage, [{
        key: "get",
        value: function get(key) {
            var value = this.storage[key];
            if (!value) {
                throw new Error("No value found in array storage with key `" + key + "`");
            }
            return value;
        }
    }, {
        key: "getKeyOf",
        value: function getKeyOf(value) {
            return this.storage.indexOf(value);
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return this.storage.length;
        }
    }, {
        key: "getStorage",
        value: function getStorage() {
            return this.storage;
        }
    }, {
        key: "initialize",
        value: function initialize() {}
    }, {
        key: "set",
        value: function set(key, value) {
            this.storage.push(value);
        }
    }]);

    return ArrayStorage;
}();

exports.ArrayStorage = ArrayStorage;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapStorage_1 = __webpack_require__(27);

var ControlFlowStorage = function (_MapStorage_1$MapStor) {
    _inherits(ControlFlowStorage, _MapStorage_1$MapStor);

    function ControlFlowStorage() {
        _classCallCheck(this, ControlFlowStorage);

        return _possibleConstructorReturn(this, (ControlFlowStorage.__proto__ || Object.getPrototypeOf(ControlFlowStorage)).apply(this, arguments));
    }

    _createClass(ControlFlowStorage, [{
        key: 'toString',
        value: function toString() {
            return Array.from(this.storage).reduce(function (controlFlowStorageItems, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                controlFlowStorageItems.push(key + ': ' + value.getCode());
                return controlFlowStorageItems;
            }, []).join(',');
        }
    }]);

    return ControlFlowStorage;
}(MapStorage_1.MapStorage);

exports.ControlFlowStorage = ControlFlowStorage;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = (function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var inversify_1 = __webpack_require__(0);
var ServiceIdentifiers_1 = __webpack_require__(1);
var ConsoleOutputCustomNodesFactory_1 = __webpack_require__(42);
var DebugProtectionCustomNodesFactory_1 = __webpack_require__(49);
var DomainLockCustomNodesFactory_1 = __webpack_require__(51);
var MapStorage_1 = __webpack_require__(27);
var SelfDefendingCustomNodesFactory_1 = __webpack_require__(53);
var StringArrayCustomNodesFactory_1 = __webpack_require__(57);
var CustomNodesStorage_1 = function (_MapStorage_1$MapStor) {
    _inherits(CustomNodesStorage, _MapStorage_1$MapStor);

    function CustomNodesStorage(options) {
        _classCallCheck(this, CustomNodesStorage);

        var _this = _possibleConstructorReturn(this, (CustomNodesStorage.__proto__ || Object.getPrototypeOf(CustomNodesStorage)).call(this));

        _this.initialized = false;
        _this.options = options;
        return _this;
    }

    _createClass(CustomNodesStorage, [{
        key: "checkInitialization",
        value: function checkInitialization() {
            if (!this.initialized) {
                throw new Error("`CustomNodesStorage` should be initialized first by calling `initialize` method!");
            }
        }
    }, {
        key: "initialize",
        value: function initialize(stackTraceData) {
            var _this2 = this;

            var customNodes = [];
            CustomNodesStorage_1.customNodesFactories.forEach(function (customNodesFactoryConstructor) {
                var customNodesFactory = new customNodesFactoryConstructor(_this2.options).initializeCustomNodes(stackTraceData);
                if (!customNodesFactory) {
                    return;
                }
                customNodes.push.apply(customNodes, _toConsumableArray(customNodesFactory));
            });
            this.storage = new Map(customNodes);
            this.initialized = true;
        }
    }, {
        key: "get",
        value: function get(key) {
            this.checkInitialization();
            return _get(CustomNodesStorage.prototype.__proto__ || Object.getPrototypeOf(CustomNodesStorage.prototype), "get", this).call(this, key);
        }
    }, {
        key: "getKeyOf",
        value: function getKeyOf(value) {
            this.checkInitialization();
            return _get(CustomNodesStorage.prototype.__proto__ || Object.getPrototypeOf(CustomNodesStorage.prototype), "getKeyOf", this).call(this, value);
        }
    }, {
        key: "getLength",
        value: function getLength() {
            this.checkInitialization();
            return _get(CustomNodesStorage.prototype.__proto__ || Object.getPrototypeOf(CustomNodesStorage.prototype), "getLength", this).call(this);
        }
    }, {
        key: "getStorage",
        value: function getStorage() {
            this.checkInitialization();
            return _get(CustomNodesStorage.prototype.__proto__ || Object.getPrototypeOf(CustomNodesStorage.prototype), "getStorage", this).call(this);
        }
    }]);

    return CustomNodesStorage;
}(MapStorage_1.MapStorage);
var CustomNodesStorage = CustomNodesStorage_1;
CustomNodesStorage.customNodesFactories = [DomainLockCustomNodesFactory_1.DomainLockCustomNodesFactory, SelfDefendingCustomNodesFactory_1.SelfDefendingCustomNodesFactory, ConsoleOutputCustomNodesFactory_1.ConsoleOutputCustomNodesFactory, DebugProtectionCustomNodesFactory_1.DebugProtectionCustomNodesFactory, StringArrayCustomNodesFactory_1.StringArrayCustomNodesFactory];
CustomNodesStorage = CustomNodesStorage_1 = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(ServiceIdentifiers_1.ServiceIdentifiers.IOptions)), __metadata('design:paramtypes', [Object])], CustomNodesStorage);
exports.CustomNodesStorage = CustomNodesStorage;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayStorage_1 = __webpack_require__(83);
var Utils_1 = __webpack_require__(2);

var StringArrayStorage = function (_ArrayStorage_1$Array) {
    _inherits(StringArrayStorage, _ArrayStorage_1$Array);

    function StringArrayStorage() {
        _classCallCheck(this, StringArrayStorage);

        return _possibleConstructorReturn(this, (StringArrayStorage.__proto__ || Object.getPrototypeOf(StringArrayStorage)).apply(this, arguments));
    }

    _createClass(StringArrayStorage, [{
        key: 'rotateArray',
        value: function rotateArray(rotationValue) {
            this.storage = Utils_1.Utils.arrayRotate(this.storage, rotationValue);
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.storage.map(function (value) {
                return '\'' + value + '\'';
            }).toString();
        }
    }]);

    return StringArrayStorage;
}(ArrayStorage_1.ArrayStorage);

exports.StringArrayStorage = StringArrayStorage;

/***/ },
/* 87 */
/***/ function(module, exports) {

"use strict";
"use strict";

function AtobTemplate() {
    return "\n        (function () {\n            var getGlobal = Function('return (function () ' + '{}.constructor(\"return this\")()' + ');');\n\n            var object = getGlobal();\n            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\n            object.atob || (\n                object.atob = function(input) {\n                    var str = String(input).replace(/=+$/, '');\n                    for (\n                        var bc = 0, bs, buffer, idx = 0, output = '';\n                        buffer = str.charAt(idx++);\n                        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n                            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n                    ) {\n                        buffer = chars.indexOf(buffer);\n                    }\n                return output;\n            });\n        })();\n    ";
}
exports.AtobTemplate = AtobTemplate;

/***/ },
/* 88 */
/***/ function(module, exports) {

"use strict";
"use strict";

function Rc4Template() {
    return "\n        var rc4 = function (str, key) {\n            var s = [], j = 0, x, res = '', newStr = '';\n           \n            str = atob(str);\n                \n            for (var k = 0, length = str.length; k < length; k++) {\n                newStr += '%' + ('00' + str.charCodeAt(k).toString(16)).slice(-2);\n            }\n        \n            str = decodeURIComponent(newStr);\n                    \t        \n\t        for (var i = 0; i < 256; i++) {\n                s[i] = i;\n            }\n \n            for (i = 0; i < 256; i++) {\n                j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;\n                x = s[i];\n                s[i] = s[j];\n                s[j] = x;\n            }\n            \n            i = 0;\n            j = 0;\n            \n            for (var y = 0; y < str.length; y++) {\n                i = (i + 1) % 256;\n                j = (j + s[i]) % 256;\n                x = s[i];\n                s[i] = s[j];\n                s[j] = x;\n                res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);\n            }\n                      \n            return res;\n        }\n    ";
}
exports.Rc4Template = Rc4Template;

/***/ },
/* 89 */
/***/ function(module, exports) {

"use strict";
"use strict";

function SingleNodeCallControllerTemplate() {
    return "\n        var {singleNodeCallControllerFunctionName} = (function(){\n            var firstCall = true;\n            \n            return function (context, fn){\t\n                var rfn = firstCall ? function(){\n                    if(fn){\n                        var res = fn.apply(context, arguments);\n                        fn = null;\n                        return res;\n                    }\n                } : function(){}\n                \n                firstCall = false;\n                \n                return rfn;\n            }\n        })();\n    ";
}
exports.SingleNodeCallControllerTemplate = SingleNodeCallControllerTemplate;

/***/ },
/* 90 */
/***/ function(module, exports) {

"use strict";
"use strict";

function ConsoleOutputDisableExpressionTemplate() {
    return "\n        var {consoleLogDisableFunctionName} = {singleNodeCallControllerFunctionName}(this, function () {\n            var getGlobal = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');');\n            \n            var func = function () {};\n            var that = getGlobal();\n                        \n            that.console.log = func; \n            that.console.error = func;\n            that.console.warn = func;\n            that.console.info = func;\n        });\n        \n        {consoleLogDisableFunctionName}();\n    ";
}
exports.ConsoleOutputDisableExpressionTemplate = ConsoleOutputDisableExpressionTemplate;

/***/ },
/* 91 */
/***/ function(module, exports) {

"use strict";
"use strict";

function BinaryExpressionFunctionTemplate() {
    return "\n        function {functionName} (x, y) {\n            return x {operator} y;\n        }\n    ";
}
exports.BinaryExpressionFunctionTemplate = BinaryExpressionFunctionTemplate;

/***/ },
/* 92 */
/***/ function(module, exports) {

"use strict";
"use strict";

function ControlFlowStorageCallTemplate() {
    return '{controlFlowStorageName}.{controlFlowStorageKey}({leftValue}, {rightValue})';
}
exports.ControlFlowStorageCallTemplate = ControlFlowStorageCallTemplate;

/***/ },
/* 93 */
/***/ function(module, exports) {

"use strict";
"use strict";

function ControlFlowStorageTemplate() {
    return "\n        var {controlFlowStorageName} = { {controlFlowStorage} };\n    ";
}
exports.ControlFlowStorageTemplate = ControlFlowStorageTemplate;

/***/ },
/* 94 */
/***/ function(module, exports) {

"use strict";
"use strict";

function DebugProtectionFunctionCallTemplate() {
    return "{debugProtectionFunctionName}();";
}
exports.DebugProtectionFunctionCallTemplate = DebugProtectionFunctionCallTemplate;

/***/ },
/* 95 */
/***/ function(module, exports) {

"use strict";
"use strict";

function DebugProtectionFunctionIntervalTemplate() {
    return "\n        setInterval(function () {\n            {debugProtectionFunctionName}();\n        }, 4000);\n    ";
}
exports.DebugProtectionFunctionIntervalTemplate = DebugProtectionFunctionIntervalTemplate;

/***/ },
/* 96 */
/***/ function(module, exports) {

"use strict";
"use strict";

function DebugProtectionFunctionTemplate() {
    return "\n        var {debugProtectionFunctionName} = function () {\n            function debuggerProtection (counter) {\n                if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {\n                    (function () {}.constructor('debugger')());\n                } else {\n                    (function () {}.constructor('debugger')());\n                }\n                \n                debuggerProtection(++counter);\n            }\n            \n            try {\n                debuggerProtection(0);\n            } catch (y) {}\n        };\n    ";
}
exports.DebugProtectionFunctionTemplate = DebugProtectionFunctionTemplate;

/***/ },
/* 97 */
/***/ function(module, exports) {

"use strict";
"use strict";

function DomainLockNodeTemplate() {
    return "\n        var {domainLockFunctionName} = {singleNodeCallControllerFunctionName}(this, function () {\n            var getGlobal = Function('return (function () ' + '{}.constructor(\"return this\")()' + ');');\n\n            var func = function () { \n                return {\n                    key: 'item',\n                    value: 'attribute',\n                    getAttribute: function () {\n                        getGlobal()['eval']('while(true){}')();\n                    }()\n                };\n            };\n                        \n            var regExp = new RegExp(\"[{diff}]\", \"g\");\n            var domains = \"{domains}\".replace(regExp, \"\").split(\";\");\n            var eval = [][\"forEach\"][\"constructor\"];\n            var windowObject = eval(\"return this\")();\n            var document;\n            var domain;\n                        \n            for (var d in windowObject) {\n                if (d.length == 8 && d.charCodeAt(7) == 116 && d.charCodeAt(5) == 101 && d.charCodeAt(3) == 117 && d.charCodeAt(0) == 100) {\n                    document = d;\n                \n                    break;\n                }\n            }\n\n            for (var d1 in windowObject[document]) {\n                if (d1.length == 6 && d1.charCodeAt(5) == 110 && d1.charCodeAt(0) == 100) {\n                    domain = d1;\n                    \n                    break;\n                }\n            }\n            \n            if ((!document && !domain) || (!windowObject[document] && !windowObject[document][domain])) {\n                return;\n            }\n            \n            var currentDomain = windowObject[document][domain];\n\n            var ok = false;\n                        \n            for (var i = 0; i < domains.length; i++) {\n                var domain = domains[i];\n                var position = currentDomain.length - domain.length;\n                var lastIndex = currentDomain.indexOf(domain, position);\n                var endsWith = lastIndex !== -1 && lastIndex === position;\n                \n                if (endsWith) {\n                    if (currentDomain.length == domain.length || domain.indexOf(\".\") === 0) {\n                        ok = true;\n                    }\n                    \n                    break;\n                }\n            }\n               \n            if (!ok) {\n                data;\n            } else {\n                return;\n            }\n            \n            func();\n        });\n\n        {domainLockFunctionName}();\n    ";
}
exports.DomainLockNodeTemplate = DomainLockNodeTemplate;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(2);
function SelfDefendingTemplate() {
    return "\n        var {selfDefendingFunctionName} = {singleNodeCallControllerFunctionName}(this, function () {\n            var func1 = function(){return 'dev';},\n                func2 = function () {\n                    return 'window';\n                };\n                \n            var test1 = function () {\n                var regExp = new RegExp('" + Utils_1.Utils.stringToUnicodeEscapeSequence("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}") + "');\n                \n                return !regExp.test(func1.toString());\n            };\n            \n            var test2 = function () {\n                var regExp = new RegExp('" + Utils_1.Utils.stringToUnicodeEscapeSequence("(\\\\[x|u](\\w){2,4})+") + "');\n                \n                return regExp.test(func2.toString());\n            };\n            \n            var recursiveFunc1 = function (string) {\n                var i = ~-1 >> 1 + 255 % 0;\n                                \n                if (string.indexOf('i' === i)) {\n                    recursiveFunc2(string)\n                }\n            };\n            \n            var recursiveFunc2 = function (string) {\n                var i = ~-4 >> 1 + 255 % 0;\n                \n                if (string.indexOf((true+\"\")[3]) !== i) {\n                    recursiveFunc1(string)\n                }\n            };\n            \n            if (!test1()) {\n                if (!test2()) {\n                    recursiveFunc1('ind\u0435xOf');\n                } else {\n                    recursiveFunc1('indexOf');\n                }\n            } else {\n                recursiveFunc1('ind\u0435xOf');\n            }\n        })\n        \n        {selfDefendingFunctionName}();\n    ";
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(2);
function SelfDefendingTemplate() {
    return "\n        var StatesClass = function (rc4Bytes) {\n            this.rc4Bytes = rc4Bytes;\n            this.states = [1, 0, 0];\n            this.newState = function(){return 'newState';};\n            this.firstState = '" + Utils_1.Utils.stringToUnicodeEscapeSequence("\\w+ *\\(\\) *{\\w+ *") + "';\n            this.secondState = '" + Utils_1.Utils.stringToUnicodeEscapeSequence("['|\"].+['|\"];? *}") + "';\n        };\n        \n        StatesClass.prototype.checkState = function () {\n            var regExp = new RegExp(this.firstState + this.secondState);\n\n            return this.runState(regExp.test(this.newState.toString()) ? --this.states[1] : --this.states[0]);\n        };\n        \n        StatesClass.prototype.runState = function (stateResult) {\n            if (!Boolean(~stateResult)) {\n                return stateResult;\n            }\n            \n            return this.getState(this.rc4Bytes);\n        };\n\n        StatesClass.prototype.getState = function (rc4Bytes) {\n            for (var i = 0, len = this.states.length; i < len; i++) {\n                this.states.push(Math.round(Math.random()));\n                len = this.states.length;\n            }\n            \n            return rc4Bytes(this.states[0]);\n        };\n\n        new StatesClass({stringArrayCallsWrapperName}).checkState();\n    ";
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;

/***/ },
/* 100 */
/***/ function(module, exports) {

"use strict";
"use strict";

function StringArrayBase64DecodeNodeTemplate() {
    return "      \n        if (!{stringArrayCallsWrapperName}.atobPolyfillAppended) {\n            {atobPolyfill}\n            \n            {stringArrayCallsWrapperName}.atobPolyfillAppended = true;\n        }\n        \n        if (!{stringArrayCallsWrapperName}.base64DecodeUnicode) {                \n            {stringArrayCallsWrapperName}.base64DecodeUnicode = function (str) {\n                var string = atob(str);\n                var newStringChars = [];\n                \n                for (var i = 0, length = string.length; i < length; i++) {\n                    newStringChars += '%' + ('00' + string.charCodeAt(i).toString(16)).slice(-2);\n                }\n                \n                return decodeURIComponent(newStringChars);\n            };\n        }\n        \n        if (!{stringArrayCallsWrapperName}.data) {\n            {stringArrayCallsWrapperName}.data = {};\n        }\n                        \n        if (!{stringArrayCallsWrapperName}.data[index]) {\n            {selfDefendingCode}\n            \n            value = {stringArrayCallsWrapperName}.base64DecodeUnicode(value);\n            {stringArrayCallsWrapperName}.data[index] = value;\n        } else {\n            value = {stringArrayCallsWrapperName}.data[index];\n        }  \n    ";
}
exports.StringArrayBase64DecodeNodeTemplate = StringArrayBase64DecodeNodeTemplate;

/***/ },
/* 101 */
/***/ function(module, exports) {

"use strict";
"use strict";

function StringArrayCallsWrapperTemplate() {
    return "\n        var {stringArrayCallsWrapperName} = function (index, key) {\n            var index = parseInt(index, 0x10);\n            var value = {stringArrayName}[index];\n            \n            {decodeNodeTemplate}\n        \n            return value;\n        };\n    ";
}
exports.StringArrayCallsWrapperTemplate = StringArrayCallsWrapperTemplate;

/***/ },
/* 102 */
/***/ function(module, exports) {

"use strict";
"use strict";

function StringArrayRc4DecodeNodeTemplate() {
    return "\n        if (!{stringArrayCallsWrapperName}.atobPolyfillAppended) {            \n            {atobPolyfill}\n            \n            {stringArrayCallsWrapperName}.atobPolyfillAppended = true;\n        }\n        \n        if (!{stringArrayCallsWrapperName}.rc4) {            \n            {rc4Polyfill}\n            \n            {stringArrayCallsWrapperName}.rc4 = rc4;\n        }\n                        \n        if (!{stringArrayCallsWrapperName}.data) {\n            {stringArrayCallsWrapperName}.data = {};\n        }\n\n        if ({stringArrayCallsWrapperName}.data[index] === undefined) {\n            if (!{stringArrayCallsWrapperName}.once) {\n                {selfDefendingCode}\n                \n                {stringArrayCallsWrapperName}.once = true;\n            }\n            \n            value = {stringArrayCallsWrapperName}.rc4(value, key);\n            {stringArrayCallsWrapperName}.data[index] = value;\n        } else {\n            value = {stringArrayCallsWrapperName}.data[index];\n        }\n    ";
}
exports.StringArrayRc4DecodeNodeTemplate = StringArrayRc4DecodeNodeTemplate;

/***/ },
/* 103 */
/***/ function(module, exports) {

"use strict";
"use strict";

function StringArrayTemplate() {
    return "\n        var {stringArrayName} = [{stringArray}];\n    ";
}
exports.StringArrayTemplate = StringArrayTemplate;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(2);
function SelfDefendingTemplate() {
    return "\n        var selfDefendingFunc = function () {            \n            var object = {\n                data: {\n                    key: 'cookie',\n                    value: 'timeout'\n                },\n                setCookie: function (options, name, value, document) {\n                    document = document || {};\n                    \n                    var updatedCookie = name + \"=\" + value;\n\n                    var i = 0;\n                                                            \n                    for (var i = 0, len = options.length; i < len; i++) {                          \n                        var propName = options[i];\n                                     \n                        updatedCookie += \"; \" + propName;\n                        \n                        var propValue = options[propName];\n                        \n                        options.push(propValue);\n                        len = options.length;\n                                                                        \n                        if (propValue !== true) {\n                            updatedCookie += \"=\" + propValue;\n                        }\n                    }\n\n                    document['cookie'] = updatedCookie;\n                },\n                removeCookie: function(){return 'dev';},\n                getCookie: function (document, name) {    \n                    document = document || function (value) { return value };\n                    var matches = document(new RegExp(\n                        \"(?:^|; )\" + name.replace(/([.$?*|{}()[]\\/+^])/g, '\\$1') + \"=([^;]*)\"\n                    ));\n                    \n                    var func = function (param1, param2) {\n                        param1(++param2);\n                    };\n                    \n                    func({whileFunctionName}, {timesName});\n                                        \n                    return matches ? decodeURIComponent(matches[1]) : undefined;\n                }\n            };\n            \n            var test1 = function () {\n                var regExp = new RegExp('" + Utils_1.Utils.stringToUnicodeEscapeSequence("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}") + "');\n                \n                return regExp.test(object.removeCookie.toString());\n            };\n            \n            object['updateCookie'] = test1;\n            \n            var cookie = '';\n            var result = object['updateCookie']();\n                                    \n            if (!result) {\n                object['setCookie'](['*'], 'counter', 1);\n            } else if (result) {\n                cookie = object['getCookie'](null, 'counter');     \n            } else {\n                object['removeCookie']();\n            }\n        };\n        \n        selfDefendingFunc();\n    ";
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;

/***/ },
/* 105 */
/***/ function(module, exports) {

"use strict";
"use strict";

function StringArrayRotateFunctionTemplate() {
    return "\n        (function (array, {timesName}) {\n            var {whileFunctionName} = function (times) {\n                while (--times) {\n                    array['push'](array['shift']());\n                }\n            };\n            \n            {code}\n        })({stringArrayName}, 0x{stringArrayRotateValue});\n    ";
}
exports.StringArrayRotateFunctionTemplate = StringArrayRotateFunctionTemplate;

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = require("chance");

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports = require("class-validator");

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = require("commander");

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports = require("events");

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports = require("is-equal");

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports = require("mkdirp");

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports = require("reflect-metadata");

/***/ },
/* 115 */,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var JavaScriptObfuscator_1 = __webpack_require__(13);
module.exports = JavaScriptObfuscator_1.JavaScriptObfuscator;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map