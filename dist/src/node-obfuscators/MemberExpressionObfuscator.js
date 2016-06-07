"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escodegen = require('escodegen');
var estraverse = require('estraverse');
var NodeType_1 = require("../enums/NodeType");
var NodeObfuscator_1 = require('./NodeObfuscator');
var NodeUtils_1 = require("../NodeUtils");

var MemberExpressionObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(MemberExpressionObfuscator, _NodeObfuscator_1$Nod);

    function MemberExpressionObfuscator() {
        _classCallCheck(this, MemberExpressionObfuscator);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MemberExpressionObfuscator).apply(this, arguments));
    }

    _createClass(MemberExpressionObfuscator, [{
        key: 'obfuscateNode',
        value: function obfuscateNode(memberExpressionNode) {
            var _this2 = this;

            estraverse.replace(memberExpressionNode.property, {
                leave: function leave(node, parentNode) {
                    if (NodeUtils_1.NodeUtils.isLiteralNode(node)) {
                        _this2.literalNodeController(node);
                        return;
                    }
                    if (NodeUtils_1.NodeUtils.isIdentifierNode(node)) {
                        if (memberExpressionNode.computed) {
                            return;
                        }
                        memberExpressionNode.computed = true;
                        _this2.identifierNodeController(node);
                    }
                }
            });
        }
    }, {
        key: 'identifierNodeController',
        value: function identifierNodeController(node) {
            var nodeValue = node.name,
                literalNode = {
                raw: '\'' + nodeValue + '\'',
                'x-verbatim-property': {
                    content: this.replaceLiteralValueByUnicodeValue(nodeValue),
                    precedence: escodegen.Precedence.Primary
                },
                type: NodeType_1.NodeType.Literal,
                value: nodeValue
            };
            delete node.name;
            Object.assign(node, literalNode);
        }
    }, {
        key: 'literalNodeController',
        value: function literalNodeController(node) {
            switch (_typeof(node.value)) {
                case 'string':
                    if (node['x-verbatim-property']) {
                        break;
                    }
                    node['x-verbatim-property'] = {
                        content: this.replaceLiteralValueByUnicodeValue(node.value),
                        precedence: escodegen.Precedence.Primary
                    };
                    break;
                default:
                    break;
            }
        }
    }]);

    return MemberExpressionObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.MemberExpressionObfuscator = MemberExpressionObfuscator;
